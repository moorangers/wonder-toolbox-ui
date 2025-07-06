'use client';

import './globals.css';
import { HomeIcon, ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-chart-1/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-chart-2/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20 select-none">
            404
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Oops! Page Not Found
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            The page you're looking for seems to have vanished into the digital
            void. Don't worry, even the best explorers sometimes take a wrong
            turn!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            size="lg"
            className="group transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>

          <Button
            onClick={() => (window.location.href = '/')}
            size="lg"
            className="group transition-all duration-300 hover:scale-105"
          >
            <HomeIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
