import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-background/95 px-4 pb-11 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-8" />
        <h3 className="mb-4 text-lg font-semibold text-center md:text-left">Let's Connect</h3>
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
            <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
            <a
                href="https://github.com/raulrls"
                target="_blank"
                rel="noopener noreferrer"
            >
            <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full">
            <a
              href="https://www.linkedin.com/in/raul-isaac-rm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
          <a
              href="mailto:raul.rosales@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Mail className="h-5 w-5" />
            </a>
          </Button>
            </div>
          <p>
          <i>"A software artist transmutes the unseen into the undeniable"</i>
          </p>
          <div className="flex gap-4 font-semibold">
            <a href="https://github.com/raulrls/personal_portfolio" className="hover:text-primary">
              Check out the code on Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;