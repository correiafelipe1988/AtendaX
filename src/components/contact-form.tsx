"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }),
  whatsapp: z.string().min(10, {
    message: "Por favor, insira um número de WhatsApp válido.",
  }).regex(/^[\d\s\(\)\-\+]+$/, {
    message: "Formato de telefone inválido.",
  }),
  company: z.string().min(2, {
    message: "O nome da empresa deve ter pelo menos 2 caracteres.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
});

// Configuração Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("🚀 Iniciando submissão do formulário:", values);
    
    try {
      // Inicializar Firebase no cliente
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      
      console.log("📝 Tentando salvar no Firestore...");
      const docRef = await addDoc(collection(db, "contactMessages"), {
        ...values,
        receivedAt: new Date(),
        timestamp: Date.now()
      });
      console.log("✅ Document written with ID: ", docRef.id);
      
      toast({
        title: "Mensagem Enviada!",
        description: "Obrigado por entrar em contato. Retornaremos em breve.",
      });

      form.reset();
    } catch (e) {
      console.error("❌ Error adding document: ", e);
      toast({
        title: "Erro ao Enviar",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="João da Silva" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Endereço de E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="joao.silva@exemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>WhatsApp</FormLabel>
              <FormControl>
                <Input placeholder="(11) 99999-9999" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da Empresa</FormLabel>
              <FormControl>
                <Input placeholder="Acme Ltda." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sua Mensagem</FormLabel>
              <FormControl>
                <Textarea placeholder="Como podemos ajudá-lo?" {...field} className="min-h-[120px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full md:w-auto">
          Enviar Mensagem
        </Button>
      </form>
    </Form>
  );
}
