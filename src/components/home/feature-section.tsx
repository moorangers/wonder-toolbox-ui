import { Zap, Globe, Users, Shield } from 'lucide-react';

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '../ui/card';

export function FeatureSection() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description:
        'Built for speed with cutting-edge technology that delivers results in milliseconds.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description:
        'Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Scale',
      description:
        'Reach customers worldwide with our globally distributed infrastructure.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Collaboration',
      description:
        'Work seamlessly with your team using our advanced collaboration tools.',
    },
  ];

  return (
    <section id="features" className="bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed, built with the latest technology and
            designed for growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
