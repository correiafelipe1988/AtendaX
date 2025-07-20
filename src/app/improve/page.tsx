import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ImproveContentForm } from "@/components/improve-content-form";
import { Lightbulb } from "lucide-react";

export default function ImprovePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 p-3 rounded-lg mb-4">
              <Lightbulb className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline">AI Content Improver</h1>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
              Refine your landing page content for better engagement and conversion. 
              Enter your current text and keywords, and let our AI provide expert suggestions.
            </p>
          </div>
          <ImproveContentForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
