import { ConnectDB } from "@/lib/config/db";
import newsModel from "@/lib/models/newsModel";
const { NextResponse } = require("next/server");
import { writeFile } from 'fs/promises';
const fs = require('fs');

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// GET - Fetch All News or News by ID
export async function GET(request) {
  const newsId = request.nextUrl.searchParams.get("id");
  if (newsId) {
    const news = await newsModel.findById(newsId);
    return NextResponse.json(news);
  } else {
    const news = await newsModel.find({});
    return NextResponse.json({ news });
  }
}

// POST - Upload News
export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  // Handle main news image
  const image = formData.get('image');
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const imagePath = `./public/${timestamp}_${image.name}`;
  await writeFile(imagePath, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  // Handle subheadings
  const subheadings = [];
  let subheadingIndex = 0;

  while (formData.get(`subheadings[${subheadingIndex}][heading]`)) {
    const subheading = {
      heading: formData.get(`subheadings[${subheadingIndex}][heading]`),
      subdescription: formData.get(`subheadings[${subheadingIndex}][subdescription]`),
      image: null,
    };

    // Handle optional subheading image
    const subheadingImage = formData.get(`subheadings[${subheadingIndex}][image]`);
    if (subheadingImage && typeof subheadingImage.name === 'string') {
      const subheadingImageByteData = await subheadingImage.arrayBuffer();
      const subheadingImageBuffer = Buffer.from(subheadingImageByteData);
      const subheadingImagePath = `./public/${timestamp}_subheading_${subheadingIndex}_${subheadingImage.name}`;
      await writeFile(subheadingImagePath, subheadingImageBuffer);
      subheading.image = `/${timestamp}_subheading_${subheadingIndex}_${subheadingImage.name}`;
    }

    subheadings.push(subheading);
    subheadingIndex++;
  }

  // Create the news document
  const newsData = {
    title: formData.get('title'),
    description: formData.get('description'),
    category: formData.get('category'),
    author: formData.get('author'),
    image: imgUrl,
    subheadings,
  };

  await newsModel.create(newsData);
  console.log("News saved");

  return NextResponse.json({ success: true, msg: "News added" });
}

// DELETE - Delete News
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id');
  const news = await newsModel.findById(id);

  if (!news) return NextResponse.json({ success: false, msg: "News not found" });

  // Delete main image
  if (news.image) {
    fs.unlink(`./public${news.image}`, () => {});
  }

  // Delete subheading images
  if (Array.isArray(news.subheadings)) {
    news.subheadings.forEach((subheading) => {
      if (subheading.image) {
        fs.unlink(`./public${subheading.image}`, () => {});
      }
    });
  }

  await newsModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "News deleted" });
}
