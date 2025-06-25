import Titlebar from "@components/TitleBar";
import Image from "next/image";
import React from "react";

export default function OurCourses() {
  const departments = {
    "Government Aided": [
      {
        name: "Civil Engineering",
        image: "/departments/civil.jpg",
      },
      {
        name: "Mechanical Engineering",
        image: "/departments/mech.jpg",
      },
      {
        name: "Electrical & Electronics Engineering",
        image: "/departments/eee.jpg",
      },
    ],
    "Self Financing": [
      {
        name: "Automobile Engineering",
        image: "/departments/automobile.jpg",
      },
      {
        name: "Computer Engineering",
        image: "/departments/computer.jpg",
      },
      {
        name: "Electronics Engineering",
        image: "/departments/electronics.jpg",
      },
    ],
  };
  return (
    <div className="px-[5vw] py-[2rem] flex flex-col gap-5">
      <Titlebar title="Our Courses" />
      <div className="">
        {Object.entries(departments).map(([category, items]) => (
          <div key={category} className="mb-10 ">
            <h2 className="text-xl font-bold text-center mb-6 uppercase">
              {category}
            </h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 justify-center">
              {items.map((dept, index) => (
                <div
                  key={index}
                  className="bg-white border-r-[5px] border-r-primary/70 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
                >
                  <div className="w-full h-[180px] relative">
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center py-3 font-semibold text-blue-800">
                    {dept.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
