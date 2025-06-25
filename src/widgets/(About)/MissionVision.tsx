import Titlebar from "@components/TitleBar";
import React from "react";

export default function MissionVision() {
  return (
    <div className="px-[5vw] py-[2rem] flex flex-col gap-5">
      <Titlebar title="Our Philosophy" />
      <span className="text-2xl font-semibold">
        What <span className="text-primary">Carmel Polytechnic College</span>{" "}
        believes in
      </span>

      {/* Vision & Mission */}
      <div className="space-y-10">
        <div className="flex flex-col gap-6">
          {/* Vision */}
          <div className="lg:w-1/2 space-y-2">
            <h4 className="text-sm font-semibold tracking-wider">OUR VISION</h4>
            <ul className="list-disc pl-5 text-lg">
              <li>
                To mould distinctive engineers with integrity and social
                commitment.
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div className="lg:w-1/2 space-y-2">
            <h4 className="text-sm font-semibold tracking-wider">
              OUR MISSION
            </h4>
            <ul className="list-disc pl-5 text-lg space-y-1">
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
            <div key={value} className="px-4 py-2 border-[2px] rounded-md border-primary">
              <span className="rounded-lg text-sm font-medium">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
