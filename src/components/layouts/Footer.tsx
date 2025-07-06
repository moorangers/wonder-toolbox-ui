import { Github, Linkedin, Copyright, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="text-sm text-muted-foreground py-6 border-t bg-background">
      <div className="container mx-auto px-6 py-1">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-0">
          {/* Copyright */}
          <div className="flex items-center gap-1">
            <span>Copyright</span>
            <Copyright size={16} strokeWidth={2} />
            <span>{new Date().getFullYear()} WonderToolbox.site</span>
          </div>

          {/* Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Linkedin"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Vercel button */}
          <a
            href="https://vercel.com/?utm_source=wondertoolbox.site&utm_medium=footer&utm_campaign=powered-by"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-black text-white text-xs px-3 py-2 rounded-md hover:opacity-90 transition-all"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 1155 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
            >
              <path d="M577.5 0L1155 1000H0L577.5 0Z" fill="white" />
            </svg>
            <span className="font-medium">
              Deployed with ❤️ by <strong>Vercel</strong>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
