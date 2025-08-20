"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { SquareArrowUpRightIcon } from "lucide-react";

interface ExperienceProps {
  date: string;
  title: string;
  role: string;
  description: string;
  badges: string[];
  link?: string;
}

export function Experience({ 
  date, 
  title, 
  role, 
  description, 
  badges, 
  link 
}: ExperienceProps) {
  return (
    <Card className="w-full p-6 mb-10 bg-card/20 backdrop-blur-md border border-white/10 shadow-lg hover:bg-card/30 hover:border-white/20 hover:shadow-xl hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent transition-all duration-300">
      <div className="flex flex-col lg:flex-row lg:items-start">
        <p className="text-xs mb-3 lg:mb-0 lg:whitespace-nowrap lg:pr-6 text-muted-foreground">{date}</p>
        <div className="flex-1">
          <CardHeader className="p-0 lg:pr-0">
            <CardTitle className="flex items-baseline gap-2 mb-1 -mt-1">
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-2 hover:text-primary transition-colors">
                  <h2 className="text-primary-foreground">
                    {title}
                  </h2>
                  <SquareArrowUpRightIcon size={16} className="mb-0.5" />
                </a>
              ) : (
                <h2 className="text-primary-foreground">
                  {title}
                </h2>
              )}
            </CardTitle>
            <CardDescription className="text-md mb-3">
              {role}
            </CardDescription>
            <CardDescription className="flex flex-wrap gap-2 mb-4">
              {badges.map((badge, index) => (
                <Badge key={index} variant="outline">{badge}</Badge>
              ))}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 lg:pr-0">
            <p className="text-sm leading-relaxed">
              {description}
            </p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
