import React from 'react';
import Head from 'next/head';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      <Head>
        <title>About Us - Your News Website</title>
        <meta name="description" content="Learn about our mission, values, and team" />
      </Head>

      <h1 className="text-3xl font-bold text-gray-800 mb-8">About Our News Platform</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Note from the Founding Editors</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Instead of the traditional models of family-owned, corporate-funded and controlled or advertising-driven 
            newspapers, magazines and TV channels, we reimagine the media as a joint venture in the public space 
            between journalists, readers and a concerned citizenry. One in which decisions about what to cover and how, 
            who to hire and where to send a correspondent or photographer, are taken by editors on the basis of 
            professional judgment, without worrying about what a proprietor or politician, official or advertiser might think or want.
          </p>
          <p>
            In a democracy, this is the least that readers or viewers expect. And yet, the business model that underpins 
            most Indian news media seldom allows editors the freedom they need. Worse, it has slowly eroded professional 
            standards of reporting and contributed to a media ecosystem rife with underhand practices: The rampant 
            editorializing, paid news and private treaties.
          </p>
          <p>
            Increasingly, media houses are reluctant to spend money on news-gathering; and as they develop secondary 
            business interests such as real estate, their newsrooms shrink, even as corporate owners grow closer to 
            political parties and politicians. Is it any wonder that readers have begun to debate the erosion of 
            professional standards, ethical breaches and fall in quality?
          </p>
          <p>
            The founding premise of our platform is that if good journalism is to survive and thrive, it can only do so 
            by being both editorially and financially independent. This means relying principally on contributions from 
            readers and concerned citizens who have no interest other than to sustain a space for quality journalism.
          </p>
          <p>
            As a publication, we are firmly committed to the public interest and democratic values. Apart from providing 
            authoritative analysis and commentary, we aim to grow as a platform buoyed by good old-fashioned reporting 
            on issues of national and international importance and interest. Being on the web also means using new media 
            technologies to change the way stories are told. With the current internet culture, video and audio are 
            integral parts of the narrative structure when warranted.
          </p>
        </div>
        <div className="mt-8 text-right italic text-gray-500">
          <p>Founding Editors</p>
          <p>May 11, 2023</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Who Owns Our Platform?</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Our platform commenced publication on May 11, 2023 and is run by the Foundation for Independent Journalism 
            (FIJ), a not-for-profit company incorporated under Section 8 of the Companies Act.
          </p>
          <p>
            Our board of directors comprises experienced journalists and media professionals committed to independent journalism.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Core Team</h2>
        <p className="text-gray-600 mb-8">
          We are a passionate team of independent journalists dedicated to serving the public interest through 
          impactful storytelling, driving positive change and holding power to account.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">FOUNDING EDITOR</h3>
            <h4 className="text-lg font-medium text-blue-600 mb-2">Editor Name 1</h4>
            <p className="text-gray-600">
              Award-winning journalist with decades of experience in investigative reporting.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">FOUNDING EDITOR</h3>
            <h4 className="text-lg font-medium text-blue-600 mb-2">Editor Name 2</h4>
            <p className="text-gray-600">
              Illuminating the journalism sphere with insightful analysis and courageous reporting.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">FOUNDING EDITOR</h3>
            <h4 className="text-lg font-medium text-blue-600 mb-2">Editor Name 3</h4>
            <p className="text-gray-600">
              Veteran journalist who challenges conventional narratives and power structures.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">EDITOR</h3>
            <h4 className="text-lg font-medium text-blue-600 mb-2">Editor Name 4</h4>
            <p className="text-gray-600">
              Experienced journalist with a track record of impactful investigative reporting.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;