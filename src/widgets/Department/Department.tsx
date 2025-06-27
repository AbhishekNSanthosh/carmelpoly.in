"use client";
import Titlebar from "@components/TitleBar";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Department {
  id: string;
  title: string;
  to: string;
}

const DEPARTMENTS: Department[] = [
  {
    id: "cse",
    title: "Computer Engineering",
    to: "/departments/cse",
  },
  {
    id: "me",
    title: "Mechanical Engineering",
    to: "/departments/me",
  },
  {
    id: "ce",
    title: "Civil Engineering",
    to: "/departments/ce",
  },
  {
    id: "eee",
    title: "Electrical & Electronics Engineering",
    to: "/departments/eee",
  },
  {
    id: "ae",
    title: "Automobile Engineering",
    to: "/departments/ae",
  },
  {
    id: "ee",
    title: "Electronics Engineering",
    to: "/departments/ee",
  },
];

export default function Department() {
  const [department, setDepartment] = useState("");
  const params = useParams();
  
  // Safely extract depId with type checking
  const depId = params?.depId as string | undefined;

  useEffect(() => {
    if (!depId) {
      setDepartment("Unknown Department");
      return;
    }

    const foundDepartment = DEPARTMENTS.find(dept => dept.id === depId);
    setDepartment(foundDepartment?.title || "Unknown Department");
  }, [depId]);

  return (
    <div className="px-[5vw] py-[2rem]">
      <Titlebar title={`Department of ${department}`} />
    </div>
  );
}