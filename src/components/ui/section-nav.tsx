"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionNavProps {
  className?: string;
}

const sections = [
  { id: "intro", label: "Intro" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export function SectionNav({ className }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const rightSide = document.getElementById("right-side");
      if (!rightSide) return;

      // Check sections in the scrollable right side
      const introSection = rightSide.querySelector("h1");
      const experienceSection = rightSide.querySelectorAll("h1")[1];
      const projectsSection = rightSide.querySelectorAll("h1")[2];
      
      if (!introSection) return;

      const scrollTop = rightSide.scrollTop;
      const rightSideRect = rightSide.getBoundingClientRect();
      
      let experienceOffset = Infinity;
      if (experienceSection) {
        const experienceRect = experienceSection.getBoundingClientRect();
        experienceOffset = experienceRect.top - rightSideRect.top + scrollTop;
      }
      
      let projectsOffset = Infinity;
      if (projectsSection) {
        const projectsRect = projectsSection.getBoundingClientRect();
        projectsOffset = projectsRect.top - rightSideRect.top + scrollTop;
      }

      // Determine active section based on scroll position
      if (scrollTop >= projectsOffset - 100) {
        setActiveSection("projects");
      } else if (scrollTop >= experienceOffset - 100) {
        setActiveSection("experience");
      } else {
        setActiveSection("intro");
      }
    };

    const rightSide = document.getElementById("right-side");
    if (rightSide) {
      rightSide.addEventListener("scroll", handleScroll);
    }
    
    // Initial check
    handleScroll();

    return () => {
      if (rightSide) {
        rightSide.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const rightSide = document.getElementById("right-side");
    
    if (rightSide) {
      const sections = rightSide.querySelectorAll("h1");
      let targetSection: Element | null = null;
      
      if (sectionId === "intro" && sections[0]) {
        targetSection = sections[0];
      } else if (sectionId === "experience" && sections[1]) {
        targetSection = sections[1];
      } else if (sectionId === "projects" && sections[2]) {
        targetSection = sections[2];
      }
      
      if (targetSection) {
        const rightSideRect = rightSide.getBoundingClientRect();
        const targetRect = targetSection.getBoundingClientRect();
        const scrollTop = rightSide.scrollTop;
        const targetOffset = targetRect.top - rightSideRect.top + scrollTop - 20;
        
        rightSide.scrollTo({ top: targetOffset, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={cn(
      "fixed z-50 transition-all duration-200", 
      "hidden lg:flex lg:right-4 lg:top-1/2 lg:-translate-y-1/2 lg:flex-col lg:space-y-4",
      className
    )}>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group flex items-center justify-end relative"
        >
          <span
            className={cn(
              "text-xs font-medium transition-all duration-200 bg-background/90 backdrop-blur-sm px-2 py-1 rounded border whitespace-nowrap",
              "hidden lg:block lg:mr-3",
              "lg:opacity-100 opacity-0 group-hover:opacity-100",
              activeSection === section.id
                ? "text-accent-foreground"
                : "text-muted-foreground"
            )}
          >
            {section.label}
          </span>
          <div
            className={cn(
              "w-3 h-3 rounded-full border-2 transition-all duration-200 flex-shrink-0",
              activeSection === section.id
                ? "bg-accent-foreground border-accent-foreground scale-125"
                : "border-muted-foreground/50 hover:border-foreground hover:scale-110"
            )}
          />
        </button>
      ))}
    </nav>
  );
}