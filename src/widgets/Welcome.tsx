import Titlebar from "@components/TitleBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Welcome() {
  const newsItems = [
    {
      title: "Conclave 2024",
      date: "June 11, 2024",
      location: "College",
      description:
        "Conclave 2024 on National Education Policy & Skill Training in India",
      image: "/slides/slide_002.png",
      link: "#",
    },
    {
      title: "Alumni Day",
      date: "June 09, 2024",
      location: "College",
      description: "Alumni Day",
      image: "/slides/slide_002.png",
      link: "#",
    },
    {
      title: "Music Event",
      date: "June 08, 2024",
      location: "College",
      description: "Music Event",
      image: "/slides/slide_002.png",
      link: "#",
    },
    {
      title: "Conclave 2024",
      date: "June 11, 2024",
      location: "College",
      description:
        "Conclave 2024 on National Education Policy & Skill Training in India",
      image: "/slides/slide_002.png",
      link: "#",
    },
  ];

  return (
    <div className="px-[5vw] py-[5rem] flex flex-col gap-5">
      <div className="flex flex-row gap-10">
        <div className="flex-[2] flex flex-col gap-5">
          <Titlebar
            className=""
            title="Welcome to Carmel Polytechnic College"
          />
          <Image
            src={"/slides/slide_002.png"}
            alt=""
            width={1000}
            height={1000}
            className="w-full"
          />
          <p>
            Carmel Polytechnic College was established in 1958 by Very Rev. Fr.
            Gilbert Palakunnel CMI, and is managed by CMI Fathers - a priestly
            order reputed for their contributions in the field of education and
            healthcare.
          </p>
          <div className="">
            <button className="bg-primary border-none outline-none rounded-md px-2 py-2 text-white">
              Read more
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <Titlebar className="" title="Latest News" />
          {newsItems.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="min-w-[90px] h-[90px] relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                  <FaCalendarAlt className="text-gray-500" /> {item.date}
                  <span className="mx-2">|</span>
                  <FaMapMarkerAlt className="text-gray-500" /> {item.location}
                </p>
                <p className="text-sm mt-2">
                  {item.description}{" "}
                  <Link
                    href={item.link}
                    className="text-blue-600 hover:underline"
                  >
                    Read More →
                  </Link>
                </p>
              </div>
            </div>
          ))}
          <div className="w-full">
            <button className="bg-primary w-full border-none outline-none rounded-md px-2 py-2 text-white">
              View all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
