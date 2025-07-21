'use client';

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
import { WhatsAppButton } from '@/components/whatsapp-button';
import { CheckCircle, Bot, Sparkles, MessageSquare, Share2, Blocks } from 'lucide-react';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';

export default function Home() {
  const features = [
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: 'Chatbots Inteligentes',
      description: 'Automatize o atendimento e qualifique leads 24/7 com chatbots que aprendem constantemente.',
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: 'Atendimento com IA',
      description: 'Capacite seus agentes com sugestões de respostas, resumos e análises de sentimento em tempo real.',
    },
    {
      icon: <Share2 className="h-8 w-8 text-primary" />,
      title: 'Atendimento Multicanal',
      description: 'Suporte a WhatsApp, Instagram, Facebook, Telegram e chat web, tudo em um só painel.',
    },
    {
      icon: <Blocks className="h-8 w-8 text-primary" />,
      title: 'Integrações e API',
      description: 'Integre com qualquer sistema via API REST, webhooks e ferramentas como N8N, SMS e telefonia.',
    },
  ];

  const testimonials = [
    {
      quote: "O AtendaX transformou nosso suporte ao cliente. Vimos um aumento de 40% na satisfação do cliente!",
      name: 'Joana Silva',
      title: 'CEO, Inovadores Tech',
      avatar: 'https://i.postimg.cc/rsQ2WF2J/mulher-1.png',
      hint: 'woman portrait',
    },
    {
      quote: 'A plataforma é intuitiva e poderosa. Nossa equipe estava pronta e operando em um único dia.',
      name: 'Carlos Pereira',
      title: 'Líder de Suporte, Soluções Criativas',
      avatar: 'https://i.postimg.cc/ZYjGwRXP/homem.png',
      hint: 'man portrait',
    },
    {
      quote: "Não consigo imaginar voltar atrás. Os recursos de análise por si só valem seu peso em ouro.",
      name: 'Fernanda Costa',
      title: 'COO, Logística Acelerada',
      avatar: 'https://i.postimg.cc/rp63DttT/mulher2.png',
      hint: 'woman professional',
    },
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: 'R$ 127,00',
      period: '/mês',
      features: [
        'IA Integrada',
        '1 Canal de Atendimento',
        '5 Atendentes',
        'Criação de ChatBot',
        'Agendamento de Mensagem',
        'Criação de Setores',
        'Avaliação de Atendimento',
        'Espiar Conversa',
        'Chat Interno',
        'Respostas Rápidas',
        'Criação de Tags (Etiquetas)',
        'CRM - Crie funis de vendas e etc.',
        'Nota Interna',
      ],
      cta: 'Assinar Plano',
      borderColor: 'border-gray-300',
    },
    {
      name: 'Premium',
      price: 'R$ 197,00',
      period: '/mês',
      features: [
        'IA Integrada',
        '3 Canais de Atendimento',
        '10 Atendentes',
        'Criação de ChatBot',
        'Agendamento de Mensagem',
        'Criação de Setores',
        'Avaliação de Atendimento',
        'Espiar Conversa',
        'Chat Interno',
        'Respostas Rápidas',
        'Criação de Tags (Etiquetas)',
        'CRM - Crie funis de vendas e etc.',
        'Nota Interna',
      ],
      cta: 'Assinar Plano',
      popular: true,
      borderColor: 'border-primary',
    },
    {
      name: 'Business',
      price: 'R$ 397,00',
      period: '/mês',
      features: [
        'IA Integrada',
        '10 Canais de Atendimento',
        '30 Atendentes',
        'Criação de ChatBot',
        'Agendamento de Mensagem',
        'Criação de Setores',
        'Avaliação de Atendimento',
        'Espiar Conversa',
        'Chat Interno',
        'Respostas Rápidas',
        'Criação de Tags (Etiquetas)',
        'CRM - Crie funis de vendas e etc.',
        'Nota Interna',
      ],
      cta: 'Assinar Plano',
      borderColor: 'border-gray-300',
    },
  ];

  const systemImages = [
    'https://i.postimg.cc/52xNMxh3/image.png',
    'https://i.postimg.cc/xTQzpNPp/image.png',
    'https://i.postimg.cc/pXZMz3Tc/image.png',
    'https://i.postimg.cc/5tVMd163/image.png'
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Seção Hero */}
        <section className="py-20 md:py-32 bg-secondary/30">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-4">
                Revolucione o seu Atendimento ao Cliente
              </h1>
              <p className="max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground mb-8">
                O AtendaX oferece uma plataforma integrada e transparente para gerenciar todas as suas interações com clientes, aumentando a satisfação e a eficiência.
              </p>
              <Button size="lg" asChild>
                <Link href="#contact">Solicite uma Demonstração</Link>
              </Button>
            </div>
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-auto max-w-full">
              <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-800">
                <Carousel
                  opts={{ align: 'start', loop: true }}
                  plugins={[
                    Autoplay({
                      delay: 2000,
                    }),
                  ]}
                  className="w-full h-auto"
                >
                  <CarouselContent>
                    {systemImages.map((src, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={src}
                          alt={`Demonstração do sistema ${index + 1}`}
                          className="rounded-lg w-full h-auto object-contain"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Recursos */}
        <section id="features" className="py-20 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Por que o AtendaX?</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                A plataforma definitiva para equipes que buscam atendimento inteligente, ágil e multicanal com tecnologia de ponta.
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

        {/* Seção de Vídeo */}
        <section id="video" className="py-20 md:py-24 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Veja o AtendaX em Ação</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                Assista a uma rápida visão geral de como nossa plataforma pode ajudar sua empresa a prosperar.
              </p>
            </div>
            <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                style={{border: "none"}}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Seção de Integrações Nativas */}
        <section id="integrations" className="py-20 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold mb-2">Integrações Nativas</p>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Chatbots, Ferramentas de <br />
                Automação e <span className="text-primary">APIs</span>
              </h2>
              <p className="max-w-4xl mx-auto text-muted-foreground text-lg">
                Integre-se facilmente com aplicativos externos usando nossas APIs e Webhooks, ou aproveite nossas integrações nativas com Typebot, Dify.ai, Chat GPT, LM Studio, Wavoip e vários outros canais de atendimento através do Hub Notificame.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="#contact">QUERO ASSINAR</Link>
                </Button>
              </div>
            </div>
            
            {/* Carousel Contínuo de Integrações */}
            <div className="mt-16 overflow-hidden">
              <div className="flex animate-scroll space-x-12">
                {/* Primeiro conjunto de logos */}
                <div className="flex items-center justify-center min-w-[200px]">
                  <img
                    src="/assets/integrations/integration-1.png"
                    alt="N8N"
                    className="h-24 w-auto object-contain opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[200px]">
                  <img
                    src="/assets/integrations/webhook-new.png"
                    alt="Webhooks"
                    className="h-24 w-auto object-contain opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[200px]">
                  <img
                    src="/assets/integrations/integration-3.png"
                    alt="Dialogflow"
                    className="h-24 w-auto object-contain opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[200px]">
                  <img
                    src="/assets/integrations/integration-4.png"
                    alt="Wavoip"
                    className="h-24 w-auto object-contain opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[200px]">
                  <img
                    src="/assets/integrations/integration-5.png"
                    alt="Dify"
                    className="h-24 w-auto object-contain opacity-100 transition-opacity"
                  />
                </div>
                
                {/* Duplicação para animação contínua */}
                <div className="flex items-center justify-center min-w-[200px]">
                  <img
                    src="/assets/integrations/integration-1.png"
                    alt="N8N"
                    className="h-24 w-auto object-contain opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[200px]">
                  <img
                    src="/assets/integrations/webhook-new.png"
                    alt="Webhooks"
                    className="h-24 w-auto object-contain opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[200px]">
                  <img
                    src="/assets/integrations/integration-3.png"
                    alt="Dialogflow"
                    className="h-24 w-auto object-contain opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[200px]">
                  <img
                    src="/assets/integrations/integration-4.png"
                    alt="Wavoip"
                    className="h-24 w-auto object-contain opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[200px]">
                  <img
                    src="/assets/integrations/integration-5.png"
                    alt="Dify"
                    className="h-24 w-auto object-contain opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Múltiplos Canais */}
        <section id="multiple-channels" className="py-20 md:py-24 bg-secondary/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Conteúdo à esquerda */}
              <div>
                <p className="text-primary font-semibold mb-2">Concentre todas as suas mensagens</p>
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
                  Múltiplos Canais, <br />
                  de <span className="bg-primary text-primary-foreground px-1 py-0.5 rounded">atendimento</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  API WhatsApp Oficial (WABA), APIs WhatsApp não oficiais (bailyes, webjs, meow, evolution), Hub 
                  Notificame (Facebook Messenger, Instagram, Webchat, Email), Telegram.
                </p>
                
                {/* Grade de funcionalidades */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Todos chats em uma única tela</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Múltiplos Atendentes</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Sistema de Tickets</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Agendamentos de mensagem</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Setorização de atendimento (filas)</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Integração com Chatbots</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Imagem à direita */}
              <div className="flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/cJYYRWRq/image.png"
                  alt="Múltiplos canais de atendimento"
                  className="w-full max-w-lg h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Agentes de IA */}
        <section id="ai-agents" className="py-20 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Conteúdo à esquerda */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
                  Plugue <span className="bg-primary text-primary-foreground px-2 py-1 rounded">agentes de I.A</span> com facilidade
                </h2>
                <p className="text-lg text-muted-foreground">
                  Conexão direta com Chat GPT, Gemini, Claude, Grok, Deepseek, 
                  Ollama, Qwen e LM Studio para soluções open source no seu 
                  próprio servidor.
                </p>
              </div>
              
              {/* Imagem dos Agentes de IA à direita */}
              <div className="flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/Y9mKSGkK/image-removebg-preview-1.png"
                  alt="Agentes de IA conectados"
                  className="w-full max-w-2xl h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Depoimentos */}
        <section id="testimonials" className="py-20 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Amado por Equipes em Todo o Mundo</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                Não acredite apenas em nossa palavra. Veja o que nossos clientes têm a dizer.
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
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="rounded-full w-12 h-12 object-cover"
                            data-ai-hint={testimonial.hint}
                            loading="lazy"
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

        {/* Seção de Preços */}
        <section id="pricing" className="py-20 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Planos Flexíveis para o seu Negócio</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                Escolha o plano ideal para sua equipe e comece a transformar seu atendimento hoje mesmo.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 ${plan.borderColor}`}
                >
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-1 font-semibold text-sm">
                      Mais Popular
                    </div>
                  )}
                  <CardHeader className="items-center text-center pt-8">
                    <CardTitle className="text-2xl font-headline">{plan.name}</CardTitle>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold tracking-tighter">{plan.price}</span>
                      <span className="text-lg text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between p-8">
                    <ul className="space-y-4 mb-8 text-left">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="lg"
                      className="w-full"
                      variant="default"
                      asChild
                    >
                      <Link href="#contact">{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Contato */}
        <section id="contact" className="py-20 md:py-24 bg-secondary/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Pronto para Começar?</h2>
                <p className="text-muted-foreground mt-4 mb-8">
                  Preencha o formulário para agendar uma demonstração personalizada com um de nossos especialistas. Vamos explorar como o AtendaX
                  pode elevar o seu atendimento ao cliente.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Demonstração Personalizada</h3>
                      <p className="text-muted-foreground">Veja os recursos que mais importam para você.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Consulta com Especialista</h3>
                      <p className="text-muted-foreground">Tire suas dúvidas com nossos especialistas de produto.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Orçamento sem Compromisso</h3>
                      <p className="text-muted-foreground">Receba preços transparentes adaptados às suas necessidades.</p>
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
      <WhatsAppButton />
    </div>
  );
}
