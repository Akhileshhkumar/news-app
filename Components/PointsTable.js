import React from "react";
import Image from "next/image";

const PointsTable = () => {
  const pointsData = [
    { team: "PBKS", logo: "/team_logos/pbks.png", played: 2, won: 2, lost: 0, nrr: "+1.485", points: 4 },
    { team: "DC", logo: "/team_logos/dc.png", played: 2, won: 2, lost: 0, nrr: "+1.320", points: 4 },
    { team: "RCB", logo: "/team_logos/rcb.png", played: 3, won: 2, lost: 1, nrr: "+1.149", points: 4 },
    { team: "GT", logo: "/team_logos/gt.png", played: 3, won: 2, lost: 1, nrr: "+0.807", points: 4 },
    { team: "MI", logo: "/team_logos/mi.png", played: 3, won: 1, lost: 2, nrr: "+0.309", points: 2 },
    { team: "LSG", logo: "/team_logos/lsg.png", played: 3, won: 1, lost: 2, nrr: "-0.150", points: 2 },
    { team: "CSK", logo: "/team_logos/csk.png", played: 3, won: 1, lost: 2, nrr: "-0.771", points: 2 },
    { team: "SRH", logo: "/team_logos/srh.png", played: 3, won: 1, lost: 2, nrr: "-0.871", points: 2 },
    { team: "RR", logo: "/team_logos/rr.png", played: 3, won: 1, lost: 2, nrr: "-1.112", points: 2 },
    { team: "KKR", logo: "/team_logos/kkr.png", played: 3, won: 1, lost: 2, nrr: "-1.428", points: 2 },
  ];

  return (
    <div className="relative bg-white shadow-lg rounded-lg p-4 w-full max-w-[500px] min-h-[500px] ml-[12px] border border-yellow-400 hover:scale-105 transition-transform duration-300">
      {/* Background Gradient */}
      <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 bg-gradient-to-l from-yellow-500 via-orange-500 to-yellow-500 blur-lg opacity-50"></div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
        <div className="relative w-12 h-8 mr-2">
          <Image 
            src="/ipl_logo.png" 
            alt="TATA IPL Logo" 
            width={60}
            height={40}
            layout="intrinsic"
          />
        </div>
        TATA IPL 2025 - पॉइंट्स टेबल
      </h2>

      {/* Table */}
      <table className="w-full text-left border border-gray-300 rounded-lg text-sm">
        <thead>
          <tr className="bg-yellow-400 text-black">
            <th className="py-2 px-3">टीम</th>
            <th className="py-2 px-3">M</th>
            <th className="py-2 px-3">W</th>
            <th className="py-2 px-3">L</th>
            <th className="py-2 px-3">NRR</th>
            <th className="py-2 px-3">PTS</th>
          </tr>
        </thead>
        <tbody>
          {pointsData.map((row, index) => (
            <tr
              key={index}
              className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-yellow-200 transition-colors duration-300`}
            >
              <td className="py-2 px-3 flex items-center">
                <div className="relative w-6 h-6 mr-2">
                  <Image 
                    src={row.logo} 
                    alt={`${row.team} logo`} 
                    width={24} 
                    height={24} 
                    layout="intrinsic"
                  />
                </div>
                <span className="font-semibold">{row.team}</span>
              </td>
              <td className="py-2 px-3">{row.played}</td>
              <td className="py-2 px-3">{row.won}</td>
              <td className="py-2 px-3">{row.lost}</td>
              <td className="py-2 px-3">{row.nrr}</td>
              <td className="py-2 px-3 font-bold">{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointsTable;