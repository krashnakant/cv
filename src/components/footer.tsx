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
      {/* Prominent CTA Section */}
      <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-b border-primary/20">
        <div className="container mx-auto max-w-2xl px-4 py-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-3 text-foreground">
            Interested in Working Together?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            I&apos;m currently open to new opportunities. Let&apos;s discuss how I can help your team succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="h-12 px-8 bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cta-shine"
              asChild
            >
              <a href={`mailto:${RESUME_DATA.contact.email}`}>
                <MailIcon className="h-5 w-5 mr-2" />
                Start a Conversation
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 font-semibold hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              onClick={handleDownloadCV}
            >
              <DownloadIcon className="h-5 w-5 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-2xl px-4 py-8">
        {/* Main Footer Content */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-serif">Get In Touch</h3>
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
            <h3 className="text-lg font-semibold font-serif">Connect</h3>
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
            <h3 className="text-lg font-semibold font-serif">Core Expertise</h3>
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