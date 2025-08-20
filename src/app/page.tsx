import { About } from "@/components/cards/about";
import { Experience } from "@/components/cards/experience";
import { Contact } from "@/components/cards/contact";
import { SectionNav } from "@/components/ui/section-nav";
import { ArrowDown, FileText } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:min-h-screen py-12 sm:py-12 lg:py-0 max-w-6xl mx-auto gap-6 lg:gap-16 lg:relative">
        <div id="left-side" className="w-full lg:w-[38%] px-4 lg:h-screen lg:flex lg:flex-col lg:justify-center">
          <div className="space-y-4 lg:space-y-6">
            <About />
            <Contact />
          </div>
        </div>

        <div
          id="right-side"
          className="w-full lg:w-[55%] px-4 lg:overflow-y-auto hide-scrollbar lg:absolute lg:right-0 lg:top-0 lg:h-screen"
        >
          <div className="mb-8 lg:mb-16 mt-6 lg:mt-24">
            <div className="flex items-center gap-3 mb-6 lg:mb-8">
              <div className="w-4 lg:w-6 h-px bg-muted-foreground"></div>
              <span className="text-xs lg:text-sm text-muted-foreground uppercase tracking-wider">Introduction</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 lg:mb-6">
              Full Stack Software Engineer, based in Austin.
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I have more than 5 years of experience building scalable web applications, 
              specifically in React, Angular, TypeScript, JavaScript, Node.js, and Ruby on Rails.
            </p>
          </div>

          <div className="mb-12 lg:mb-19" id="experience">
            <h1 className="mb-0 lg:mb-1 text-xl sm:text-2xl lg:text-3xl font-bold">Experience</h1>
            <a
              href="/Tomas_Gonzalez_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2 text-sm mb-6 lg:mb-10"
              title="View Resume"
            >
              <FileText size={18} />
              <span>View Full Resume</span>
            </a>
            <Experience
              date="2024 – PRESENT"
              title="MetroStar - myUSCIS.gov"
              role="Full Stack Engineer"
              description="Led React and Ruby on Rails development across 10+ repositories, delivering scalable, automated and high-performance solutions for over 10M active users. Maintained 90%+ test coverage with Cypress and Jest through rigorous best practices, including linting, code reviews, and pair programming."
              badges={[
                "React",
                "TypeScript",
                "JavaScript",
                "Ruby",
                "Cypress",
                "Jest",
                "Github",
              ]}
              link="https://my.uscis.gov/"
            />
            <Experience
              date="2023 – 2024 (Part-Time)"
              title="Texas Advanced Computing Center"
              role="Web Developer"
              description="Contributed to open source by maintaining two NPM packages built with PostCSS, HTML, JavaScript, React, and WCAG-compliant frameworks. Used Docker to test and manage three repositories, developed 10+ Python/Django web pages, and collaborated with a five-member team to build new infrastructure for streamlined testing and production."
              badges={["React", "TypeScript", "JavaScript", "Python", "Django"]}
              link="https://tacc.utexas.edu/"
            />
            <Experience
              date="2022 – 2023"
              title="IPro - Reveal"
              role="UI Developer"
              description="Led migration of an eDiscovery platform to Angular 14 with TypeScript, HTML, and SCSS. Improved usability with unit and e2e tests (80% coverage) and collaborated across teams to define requirements and demo features — contributing to the company’s successful acquisition."
              badges={[
                "Angular",
                "TypeScript",
                "JavaScript",
                "SCSS",
                "Cypress",
                "Jest",
                "Gitlab",
              ]}
              link="https://www.revealdata.com/"
            />
            <Experience
              date="2021 – 2022"
              title="Infosys"
              role="Software Engineer"
              description="Trained in Java, Spring Boot, JavaScript, and Angular, with expertise in HTML, CSS, and JavaScript. Applied OOP and MVC principles to client projects, using Bitbucket and Jira for CI/CD best practices and rigorous testing."
              badges={[
                "Java",
                "Angular",
                "TypeScript",
                "JavaScript",
                "Cypress",
                "Jest",
                "Gitlab",
              ]}
              link="https://www.infosys.com/"
            />
          </div>

          <div className="mb-8 lg:mb-14" id="projects">
            <h1 className="mb-6 lg:mb-10 text-xl sm:text-2xl lg:text-3xl font-bold">Projects</h1>
            <Experience
              date="2025-PRESENT"
              title="Soundcheck"
              role="Lead Frontend Engineer"
              description="Facilitated software engineering workshops at Pepperdine, University of Wisconsin–Madison, and University of Las Vegas, training 100+ students in HTML, CSS, JavaScript, accessibility, Git, and backend basics with Node, Express, and MongoDB. Assessed advanced learners on OOP fundamentals through projects leveraging SQL and React."
              badges={["React", "TypeScript", "JavaScript", "HTML", "CSS"]}
              link="https://soundchecklive.io/"
            />
            <Experience
              date="2022 - 2024 (Part-Time)"
              title="ThriveDX - IronCircle"
              role="Software Engineering Teaching Assistant"
              description="Facilitated software engineering workshops at Pepperdine, University of Wisconsin–Madison, and University of Las Vegas, training 100+ students in HTML, CSS, JavaScript, accessibility, Git, and backend basics with Node, Express, and MongoDB. Assessed advanced learners on OOP fundamentals through projects leveraging SQL and React."
              badges={["React", "TypeScript", "JavaScript", "HTML", "CSS"]}
              link="https://thrivedx.com/"
            />
          </div>
        </div>
      </div>
      
      <SectionNav />
    </>
  );
}

// <div className="flex justify-between items-end relative">
//   <div className="flex justify-between items-end">
//     <div className="space-y-6">
//       <About />
//       <Contact />
//     </div>
//   </div>

// </div>
// <div className="min-h-screen py-20">
//   <h1 className="mb-10">Experience</h1>
//   {/*
//   <Experience
//     date="2024 – PRESENT"
//     title="MetroStar - myUSCIS.gov"
//     role="Full Stack Engineer"
//     description="Led React and Ruby on Rails development across 10+ repositories, delivering scalable, high-performance solutions for over 10M active users. Maintained 90%+ test coverage with Cypress and Jest through rigorous best practices, including linting, code reviews, and pair programming."
//     badges={["React", "TypeScript", "JavaScript", "Ruby"]}
//     link="#"
//   />
//   <Experience
//     date="2024 – PRESENT"
//     title="MetroStar - myUSCIS.gov"
//     role="Full Stack Engineer"
//     description="Led React and Ruby on Rails development across 10+ repositories, delivering scalable, high-performance solutions for over 10M active users. Maintained 90%+ test coverage with Cypress and Jest through rigorous best practices, including linting, code reviews, and pair programming."
//     badges={["React", "TypeScript", "JavaScript", "Ruby"]}
//     link="#"
//   />
//   <Experience
//     date="2024 – PRESENT"
//     title="MetroStar - myUSCIS.gov"
//     role="Full Stack Engineer"
//     description="Led React and Ruby on Rails development across 10+ repositories, delivering scalable, high-performance solutions for over 10M active users. Maintained 90%+ test coverage with Cypress and Jest through rigorous best practices, including linting, code reviews, and pair programming."
//     badges={["React", "TypeScript", "JavaScript", "Ruby"]}
//     link="#"
//   />
//   <Experience
//     date="2024 – PRESENT"
//     title="MetroStar - myUSCIS.gov"
//     role="Full Stack Engineer"
//     description="Led React and Ruby on Rails development across 10+ repositories, delivering scalable, high-performance solutions for over 10M active users. Maintained 90%+ test coverage with Cypress and Jest through rigorous best practices, including linting, code reviews, and pair programming."
//     badges={["React", "TypeScript", "JavaScript", "Ruby"]}
//     link="#"
//   /> */}
// </div>
