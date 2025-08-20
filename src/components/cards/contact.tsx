"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PhoneIcon, EnvelopeIcon } from "@phosphor-icons/react";

export function Contact() {
  return (
    <Card data-section="contact" className="w-full bg-card/20 backdrop-blur-md border border-white/10 shadow-lg hover:bg-card/30 hover:border-white/20 hover:shadow-xl hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent transition-all duration-300">
      <CardHeader>
        <CardTitle>
          <h2 className="text-primary-foreground">Get In Touch</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <PhoneIcon size={20} className="text-accent-foreground" />
          <a 
            href="tel:2106398262" 
            className="text-foreground hover:text-primary transition-colors"
          >
            210.639.8262
          </a>
        </div>
        <div className="flex items-center gap-3">
          <EnvelopeIcon size={20} className="text-accent-foreground" />
          <a 
            href="mailto:r.tomas.gonzalez01@gmail.com" 
            className="text-foreground hover:text-primary transition-colors"
          >
            r.tomas.gonzalez01@gmail.com
          </a>
        </div>
      </CardContent>
    </Card>
  );
}