import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ContactForm } from '@/components/contact-form';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CheckCircle, Zap, Users, MessageSquare, TrendingUp, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: 'Real-Time Engagement',
      description: 'Connect with your customers instantly with our low-latency chat and video solutions.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Team Collaboration',
      description: 'Powerful tools for your support team to collaborate and resolve issues faster.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: 'Analytics & Insights',
      description: 'Gain valuable insights into customer satisfaction and team performance.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime to ensure your data is safe.',
    },
  ];

  const testimonials = [
    {
      quote: "AtendaX transformed our customer support. We've seen a 40% increase in customer satisfaction!",
      name: 'Sarah Johnson',
      title: 'CEO, Tech Innovators',
      avatar: 'https://placehold.co/100x100.png',
      hint: 'woman portrait',
    },
    {
      quote: 'The platform is intuitive and powerful. Our team was up and running in a single day.',
      name: 'Michael Chen',
      title: 'Support Lead, Creative Solutions',
      avatar: 'https://placehold.co/100x100.png',
      hint: 'man portrait',
    },
    {
      quote: "I can't imagine going back. The analytics features alone are worth their weight in gold.",
      name: 'Emily Rodriguez',
      title: 'COO, Fast-Track Logistics',
      avatar: 'https://placehold.co/100x100.png',
      hint: 'woman professional',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-secondary/30">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-4">
              Revolutionize Your Customer Service
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
              AtendaX provides a seamless, integrated platform to manage all your customer interactions, boosting
              satisfaction and efficiency.
            </p>
            <Button size="lg" asChild>
              <Link href="#contact">Request a Demo</Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Why AtendaX?</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                Everything you need to deliver world-class customer support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-primary"
                >
                  <CardHeader className="items-center gap-4">
                    {feature.icon}
                    <CardTitle className="font-headline">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section id="video" className="py-20 md:py-24 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">See AtendaX in Action</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                Watch a quick overview of how our platform can help your business thrive.
              </p>
            </div>
            <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Loved by Teams Worldwide</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                Don't just take our word for it. Here's what our customers have to say.
              </p>
            </div>
            <Carousel opts={{ align: 'start', loop: true }} className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col justify-between h-full shadow-lg">
                        <CardContent className="p-6">
                          <MessageSquare className="w-8 h-8 text-primary mb-4" />
                          <p className="text-foreground mb-4">"{testimonial.quote}"</p>
                        </CardContent>
                        <CardHeader className="flex-row items-center gap-4 pt-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                            data-ai-hint={testimonial.hint}
                          />
                          <div>
                            <CardTitle className="text-base font-semibold">{testimonial.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </CardHeader>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-[-50px]" />
              <CarouselNext className="right-[-50px]" />
            </Carousel>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-24 bg-secondary/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Get Started?</h2>
                <p className="text-muted-foreground mt-4 mb-8">
                  Fill out the form to schedule a personalized demo with one of our experts. Let's explore how AtendaX
                  can elevate your customer service.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Personalized Demo</h3>
                      <p className="text-muted-foreground">See the features that matter most to you.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Expert Consultation</h3>
                      <p className="text-muted-foreground">Get your questions answered by our product specialists.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">No-Obligation Quote</h3>
                      <p className="text-muted-foreground">Receive transparent pricing tailored to your needs.</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="p-8 shadow-xl">
                <ContactForm />
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
