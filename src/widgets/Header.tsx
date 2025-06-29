"use client";
import { navItems } from "@utils/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [dropdownPositions, setDropdownPositions] = useState<{
    [key: number]: { adjustLeft: boolean; width: string };
  }>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate dropdown position when active dropdown changes
  useEffect(() => {
    if (activeDropdown !== null) {
      // Clear any pending timeouts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Wait for dropdown to render and calculate position
      timeoutRef.current = setTimeout(() => {
        const dropdownElement = dropdownRefs.current[activeDropdown];
        if (dropdownElement) {
          const rect = dropdownElement.getBoundingClientRect();
          const isOverflowing = rect.right > window.innerWidth;

          // Calculate appropriate width based on content
          const longestItem = Math.max(
            ...(navItems[activeDropdown].dropDown?.map(
              (item) => item.title.length
            ) || [0])
          );
          const width = longestItem > 30 ? "25vw" : "20vw";

          setDropdownPositions((prev) => ({
            ...prev,
            [activeDropdown]: {
              adjustLeft: isOverflowing,
              width,
            },
          }));
        }
      }, 10); // Minimal delay to ensure dropdown is mounted

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [activeDropdown]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown !== null) {
        const dropdownElement = dropdownRefs.current[activeDropdown];
        if (
          dropdownElement &&
          !dropdownElement.contains(event.target as Node)
        ) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  return (
    <div className="px-[5vw] flex flex-row items-center justify-between py-4 border-b border-b-gray-300">
      <Link href={"/"} className="flex flex-row items-center gap-2">
        <Image
          src={"/mainlogo.png"}
          width={1000}
          height={1000}
          className="w-[3.8vw]"
          alt="Carmelpoly"
          priority
        />
        <div className="flex flex-col items-start">
          <span className="uppercase text-xl font-semibold text-text-primary">
            CARMEL
          </span>
          <span className="uppercase text-sm text-text-primary">
            Polytechnic College
          </span>
          <span className="uppercase text-xs text-text-secondary">
            Punnapra · Alappuzha
          </span>
        </div>
      </Link>

      <div className="flex-2 flex items-center justify-end gap-[2vw]">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => {
              // Only close if not clicking on a dropdown item
              if (!dropdownRefs.current[index]?.matches(":hover")) {
                setActiveDropdown(null);
              }
            }}
          >
            <Link
              href={item.to || "#"}
              className="font-medium capitalize text-gray-700 flex flex-row items-center group-hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                // Prevent navigation if item has dropdown
                if (item.dropDown) {
                  e.preventDefault();
                  setActiveDropdown(activeDropdown === index ? null : index);
                }
              }}
            >
              {item.title}
              {item.dropDown && (
                <RiArrowDropDownLine className="text-3xl mt-[2px]" />
              )}
            </Link>

            {item.dropDown && activeDropdown === index && (
              <div
                className={`absolute pt-[1vh] ${
                  index > 4 ? "right-0" : "left-0"
                } z-50`}
                style={{
                  width: dropdownPositions[index]?.width || "auto",
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="bg-primary bg-opacity-95 shadow-lg w-[23vw] rounded-lg p-2 transition-all duration-200">
                  {item.dropDown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.to}
                      className="block px-4 py-2 rounded-md text-white hover:bg-white hover:bg-opacity-20 transition-all duration-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
