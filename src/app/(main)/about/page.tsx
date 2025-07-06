import { Label } from '@radix-ui/react-label';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'About | WonderToolbox',
  description: 'Learn more about WonderToolbox and its purpose',
};

export default function AboutPage() {
  return (
    <main className="container mx-auto py-8 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">About</h1>
            <p className="text-muted-foreground text-lg mb-6">
              Subheading for description or instructions
            </p>
            <div className="space-y-4 text-foreground">
              <p>
                Body text for your whole article or post. We'll put in some
                lorem ipsum to show how a filled-out page might look.
              </p>
              <p>
                aspernatur alias autem soluta animi vel voluptatem cum aliquid
                voluptas porro earum necessitatibus voluptatibus repellat ut a
                qui maiores quaerat adipisci laboriosam sed dignissimos rerum
                ipsam omnis et est sunt laborum autem nihil fugit eum qui
                consectetur illo facilis laudantium vero autem excepturi placeat
                id ut explicabo explicabo temporibus labore
              </p>
              <p>
                aspernatur alias autem soluta animi vel voluptatem cum aliquid
                voluptas porro earum necessitatibus voluptatibus repellat ut a
                qui maiores quaerat adipisci laboriosam sed dignissimos rerum
                ipsam omnis et est sunt laborum autem nihil fugit eum qui
                consectetur illo facilis laudantium vero autem excepturi placeat
                id ut explicabo explicabo temporibus labore
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:sticky lg:top-8">
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-2xl">Contact me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="Jane" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      placeholder="Smitherton"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="janesmitherton@email.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Your message</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your question or message"
                    className="mt-1 min-h-32"
                  />
                </div>
                <Button className="w-full">Submit</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
