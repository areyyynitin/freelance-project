"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PROJECTS } from "./Data";

const PROJECTS_PER_ROW = 9;
const TOTAL_ROWS = 10;

export function Project() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rowsRef = useRef<HTMLDivElement[]>([]);
  const rowStartWidth = useRef<number>(125);
  const rowEndWidth = useRef<number>(500);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rows = rowsRef.current;
    const isMobile = window.innerWidth < 1000;

    rowStartWidth.current = isMobile ? 250 : 125;
    rowEndWidth.current = isMobile ? 750 : 500;

    const firstRow = rows[0];
    firstRow.style.width = `${rowEndWidth.current}%`;

    const expandedRowHeight = firstRow.offsetHeight;
    firstRow.style.width = "";

    const sectionGap = parseFloat(getComputedStyle(section).gap) || 0;
    const sectionPadding =
      parseFloat(getComputedStyle(section).paddingTop) || 0;

    const expandedSectionHeight =
      expandedRowHeight * rows.length +
      sectionGap * (rows.length - 1) +
      sectionPadding * 2;

    section.style.height = `${expandedSectionHeight}px`;

    function onScrollUpdate() {
      const scrollY = window.scrollY;
      const viewPortHeight = window.innerHeight;

      rows.forEach((row) => {
        const rowRect = row.getBoundingClientRect();
        const rowTop = rowRect.top + scrollY;
        const rowBottom = rowTop + rowRect.height;

        const scrollStart = rowTop - viewPortHeight;
        const scrollEnd = rowBottom;

        let progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
        progress = Math.max(0, Math.min(1, progress));

        const width =
          rowStartWidth.current +
          (rowEndWidth.current - rowStartWidth.current) * progress;

        row.style.width = `${width}%`;
      });
    }

    gsap.ticker.add(onScrollUpdate);

    const handleResize = () => {
      const isMobile = window.innerWidth < 1000;

      rowStartWidth.current = isMobile ? 250 : 125;
      rowEndWidth.current = isMobile ? 750 : 500;

      firstRow.style.width = `${rowEndWidth.current}%`;
      const newRowHeight = firstRow.offsetHeight;
      firstRow.style.width = "";

      const newSectionHeight =
        newRowHeight * rows.length +
        sectionGap * (rows.length - 1) +
        sectionPadding * 2;

      section.style.height = `${newSectionHeight}px`;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      gsap.ticker.remove(onScrollUpdate);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const rowsData: (typeof PROJECTS)[number][][] = [];
  let currentProjectIndex = 0;

  for (let r = 0; r <= TOTAL_ROWS; r++) {
    const projects = [];
    for (let c = 0; c < PROJECTS_PER_ROW; c++) {
      projects.push(PROJECTS[currentProjectIndex % PROJECTS.length]);
      currentProjectIndex++;
    }
    rowsData.push(projects);
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-2 flex flex-col items-center gap-2 overflow-hidden"
    >
      {rowsData.map((rowProjects, rowIndex) => (
        <div
          key={rowIndex}
          className="flex gap-4 w-[125%]"
          ref={(el) => {
            if (el) rowsRef.current[rowIndex] = el;
          }}
        >
          {rowProjects.map((project, colIndex) => (
            <div
              key={colIndex}
              className="flex flex-col flex-1 aspect-[7/5] overflow-hidden"
            >
              {/* Image */}
              <div className="flex-1 min-h-0 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex justify-between py-1">
                <p className="uppercase text-[0.75rem] font-medium tracking-[-0.02rem] leading-none">
                  {project.name}
                </p>
                <p className="uppercase text-[0.75rem] font-medium tracking-[-0.02rem] leading-none">
                  {project.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
