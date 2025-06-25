import Titlebar from "@components/TitleBar";
import React from "react";

export default function History() {
  return (
    <div className="px-[5vw] py-[3rem] space-y-6">
      <Titlebar title="Our History" />
      <p className="text-gray-700 text-lg text-justify leading-relaxed">
        Carmel Polytechnic College was established in the year 1962 by the
        Carmelites of Mary Immaculate (CMI) Congregation with the vision of
        imparting quality technical education to young minds in Kerala. It began
        with a mission to mold competent professionals rooted in ethics, values,
        and social responsibility.
      </p>
      <p className="text-gray-700 text-lg text-justify leading-relaxed">
        From its humble beginnings with just a few diploma programs, the
        institution has grown over the decades into a premier polytechnic
        college, offering a wide range of technical courses with
        state-of-the-art laboratories, experienced faculty, and excellent
        placement support.
      </p>
      <p className="text-gray-700 text-lg text-justify leading-relaxed">
        The college has consistently upheld its commitment to academic
        excellence, innovation, and community service. Today, it stands as a
        beacon of hope and empowerment for students across Kerala and beyond.
      </p>
    </div>
  );
}
