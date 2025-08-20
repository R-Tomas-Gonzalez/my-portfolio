"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SectionNav } from "@/components/ui/section-nav";

export function Navigation() {
  return (
    <Card className="w-full bg-card/20 backdrop-blur-md border border-white/10 shadow-lg hover:bg-card/30 hover:border-white/20 hover:shadow-xl hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent transition-all duration-300">
      <CardContent className="pt-6">
        <h3 className="text-sm font-medium text-foreground mb-3">Navigation</h3>
        <SectionNav />
      </CardContent>
    </Card>
  );
}