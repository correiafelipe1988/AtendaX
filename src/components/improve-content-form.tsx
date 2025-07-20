"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { improveLandingPageContent, ImproveLandingPageContentOutput } from "@/ai/flows/improve-landing-page-content";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Sparkles, Bot, Terminal } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(5, "Title should be at least 5 characters."),
  heading: z.string().min(10, "Heading should be at least 10 characters."),
  bodyCopy: z.string().min(50, "Body copy should be at least 50 characters."),
  keywords: z.string().min(3, "Please provide at least one keyword."),
});

export function ImproveContentForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ImproveLandingPageContentOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "AtendaX - Customer Service Platform",
      heading: "Elevate Your Customer Support",
      bodyCopy: "Our platform helps businesses manage customer interactions efficiently. With our tools, you can provide better support and increase satisfaction. Sign up now to see how we can help you.",
      keywords: "customer service, support, chat, engagement, CRM",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const refinedContent = await improveLandingPageContent(values);
      setResult(refinedContent);
    } catch (e: any) {
      setError("An error occurred while improving the content. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Your Content</CardTitle>
          <CardDescription>Enter the content you want to improve.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Page Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., AtendaX - The Future of Support" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="heading"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Main Heading</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Revolutionize Your Customer Interactions" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bodyCopy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Body Copy</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe your product or service..." className="min-h-[150px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., support, CRM, chat" {...field} />
                    </FormControl>
                    <FormDescription>
                      Comma-separated keywords relevant to your content.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} size="lg">
                {isLoading ? (
                  <>
                    <Bot className="mr-2 h-4 w-4 animate-spin" />
                    Improving...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Improve Content
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && !result && !error && (
        <div className="mt-8 flex justify-center items-center flex-col gap-4 text-muted-foreground">
          <Bot className="h-10 w-10 animate-pulse" />
          <p>AI is thinking...</p>
        </div>
      )}

      {error && (
        <Alert variant="destructive" className="mt-8">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
      )}

      {result && (
        <div className="mt-8 space-y-6">
          <h2 className="text-3xl font-bold text-center mb-6 font-headline">AI Suggestions</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Refined Title</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{result.refinedTitle}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Refined Heading</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold font-headline">{result.refinedHeading}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Refined Body Copy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground whitespace-pre-wrap">{result.refinedBodyCopy}</p>
            </CardContent>
          </Card>

          <Card className="bg-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-primary">Reasoning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary/90 whitespace-pre-wrap">{result.reasoning}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
