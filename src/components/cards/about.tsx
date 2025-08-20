"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

export function About() {
  return (
    <Card data-section="about" className="w-full bg-card/20 backdrop-blur-md border border-white/10 shadow-lg hover:bg-card/30 hover:border-white/20 hover:shadow-xl hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent transition-all duration-300">
      <CardHeader>
        <CardTitle>
          <h1>Tomas Gonzalez</h1>
          <div className="w-12 h-1 bg-accent-foreground mt-2 rounded-full"></div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Collaborating with the sharpest tech talent to bridge the gap between
          complex technology and effortless online experiences.
        </p>
      </CardContent>
      <CardFooter className="flex-row gap-6">
        <a
          href="https://www.linkedin.com/in/rtomasgonzalez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-accent-foreground">
            <LinkedinLogoIcon size={28} />
          </button>
        </a>
        <a
          href="https://github.com/R-Tomas-Gonzalez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-accent-foreground">
            <GithubLogoIcon size={28} />
          </button>
        </a>
        <a
          href="https://www.instagram.com/r.tomasgonzalez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-accent-foreground">
            <InstagramLogoIcon size={28} />
          </button>
        </a>
      </CardFooter>
    </Card>
  );
}
