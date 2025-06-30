import Titlebar from '@components/TitleBar';
import React from 'react';

export default function Management() {
  return (
    <div className="px-[5vw] py-[2rem] space-y-6">
      <Titlebar title="Management" />

      <section className="space-y-4 text-justify">
        <p>
          Carmel Polytechnic College was established in 1958 as an aided institution recognized by AICTE.
          It is managed by the Priests of the Carmelites of Mary Immaculate religious congregation,
          whose primary mission is Education. The congregation manages institutions of national and international
          reputation, including a university, medical colleges, engineering colleges, arts and science colleges,
          polytechnics, ITIs, and several schools across India.
        </p>

        <p>
          Our motto is <strong>Sapientia et Labor</strong> (Wisdom & Labour). Under the vision and leadership
          of our present Chairman, Rev. Fr Thomas Choolaparampil CMI, and our Principal,
          Rev. Fr James Devasia CMI, our institution continues as one of the best in diploma education in the state.
        </p>

        <p>
          The institution offers 3-year Engineering Diploma Courses in Civil, Mechanical, and Electrical & Electronics
          in the aided scheme, and Automobile, Electronics, and Computer in the self-financing scheme,
          with a total intake of 360 students per year.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">The Management Team</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Fr Thomas Choolaparampil CMI – Chairman</li>
          <li>Fr James Devasia CMI – Principal</li>
          <li>Fr Jacob Kurian CMI – Vice-Principal & Self-Financing Section Co-ordinator</li>
          <li>Fr Bijo M.D. CMI – Bursar</li>
          <li>Fr Thomas G. CMI – Hostel Warden</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Our Chairmen</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Fr Gilbert Palakunnel CMI (1958 – 1986)</li>
          <li>Fr Joseph Palakunnel CMI (1986 – 1996)</li>
          <li>Fr Sebastian Palathara CMI (1996 – 1999)</li>
          <li>Fr Mathew Berchmans Kattapuram CMI (1999 – 2002)</li>
          <li>Fr Probus Perumalil CMI (2002 – 2005)</li>
          <li>Fr Joseph Chirayil CMI (2005 – 2008)</li>
          <li>Fr Joseph Palakunnel CMI (2008 – 2011)</li>
          <li>Fr Gregory Perumalil CMI (2011 – 2016)</li>
          <li>Fr Mathew Arekalam CMI (2016 – 2023)</li>
          <li>Fr Thomas Choolaparampil CMI (2023 – present)</li>
        </ol>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Our Principals</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Sri K. Balram (1958 – 1961)</li>
          <li>Sri C.I. Varghese (1961 – 1962)</li>
          <li>Sri Zacharia George (1962 – 1968)</li>
          <li>Sri P. Balan (1968 – 1996)</li>
          <li>Sri P.U. Varghese (1996 – 1997)</li>
          <li>Sri K.C. Mathew (1997 – 1999)</li>
          <li>Sri K.B. Venkitachalam Iyer (1999 – 2000)</li>
          <li>Sri C.A. Thomas (2000 – 2002)</li>
          <li>Fr Cyriac Kurian CMI (2002 – 2014)</li>
          <li>Fr Kunjumon Job CMI (2014 – 2016)</li>
          <li>Sri Thomaskutty Jose V. (2016 – 2019)</li>
          <li>Sri Biju Das D. (2019 – 2020)</li>
          <li>Fr Kunjumon Job CMI (2020 – 2021)</li>
          <li>Fr Josekutty Chacko CMI (2021 – 2023)</li>
          <li>Fr James Devasia CMI (2023 – present)</li>
        </ol>
      </section>
    </div>
  );
}
