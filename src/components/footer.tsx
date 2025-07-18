"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { MailIcon, MapPinIcon, CalendarIcon, DownloadIcon } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleDownloadCV = () => {
    window.print();
  };

  return (
    <footer className="mt-16 border-t bg-muted/30 print:hidden">
      <div className="container mx-auto max-w-2xl px-4 py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Main Footer Content */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {RESUME_DATA.contact.email && (
                <a
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MailIcon className="h-4 w-4" />
                  {RESUME_DATA.contact.email}
                </a>
              )}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPinIcon className="h-4 w-4" />
                {RESUME_DATA.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarIcon className="h-4 w-4" />
                Last Updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="sm"
                  className="h-8"
                  asChild
                >
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Key Skills Summary */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Core Expertise</h3>
            <div className="flex flex-wrap gap-1">
              {RESUME_DATA.skills.slice(0, 8).map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {RESUME_DATA.skills.length > 8 && (
                <Badge variant="outline" className="text-xs">
                  +{RESUME_DATA.skills.length - 8} more
                </Badge>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Actions</h3>
            <div className="flex flex-wrap gap-2">
              <Button onClick={handleDownloadCV} className="flex items-center gap-2">
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </Button>
              {RESUME_DATA.personalWebsiteUrl && (
                <Button variant="outline" asChild>
                  <a 
                    href={RESUME_DATA.personalWebsiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visit Portfolio
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
            <div className="text-center sm:text-left">
              © {currentYear} {RESUME_DATA.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span>Built with Next.js & Tailwind CSS</span>
              <span>•</span>
              <span>Responsive & Print-Ready</span>
            </div>
          </div>
          
          {/* Professional Note */}
          <div className="mt-4 text-center text-xs text-muted-foreground">
            <p>
              This resume is always up-to-date. For the latest version, visit{" "}
              <a 
                href={typeof window !== 'undefined' ? window.location.href : '#'} 
                className="underline hover:text-foreground transition-colors"
              >
                this page
              </a>
            </p>
            <p className="mt-2 flex items-center justify-center gap-1">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">♥</span>
              <span>for showcasing professional experience</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}