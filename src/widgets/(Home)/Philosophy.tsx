import Titlebar from "@components/TitleBar";
import React from "react";

export default function Philosophy() {
  return (
    <div className="relative w-full h-auto">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 bg-fixed"
       style={{ backgroundImage: "url('/slides/slide_002.png')" }}
      ></div>

      {/* Red Overlay with Opacity */}
      <div className="absolute inset-0 bg-primary bg-opacity-70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-[5vw] py-[4rem] text-white flex flex-col space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <Titlebar title="Our Philosophy" className="text-white"/>
          <h1 className="text-4xl font-bold">What Carmel Polytechnic College believes in</h1>
        </div>

        {/* Vision & Mission */}
        <div className="flex flex-col gap-10">
          <div className="lg:w-1/2 space-y-2">
            <h4 className="text-sm font-semibold tracking-wider">OUR VISION</h4>
            <ul className="list-disc pl-5 text-lg text-white/90">
              <li>
                To mould distinctive engineers with integrity and social
                commitment.
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 space-y-2">
            <h4 className="text-sm font-semibold tracking-wider">OUR MISSION</h4>
            <ul className="list-disc pl-5 text-lg text-white/90 space-y-1">
              <li>
                Extend harmonious curricular and co-curricular exposure to the
                students.
              </li>
              <li>
                Equip the students to accomplish career goals upholding moral
                values.
              </li>
              <li>
                Encourage the students to contribute for the sustainable
                development of the society.
              </li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold underline underline-offset-4">
            Core Values
          </h4>
          <div className="flex flex-wrap gap-4">
            {[
              "Faith in God",
              "Commitment to excellence",
              "Respect for diversity",
              "Integrity in actions",
              "Accountability for outcomes",
              "Compassion for others",
              "Dedication to service",
              "Excellence in innovation",
              "Collaboration and teamwork",
              "Respect for integrity",
            ].map((value) => (
              <span
                key={value}
                className="bg-white text-red-800 px-4 py-2 rounded-full text-sm font-semibold"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
