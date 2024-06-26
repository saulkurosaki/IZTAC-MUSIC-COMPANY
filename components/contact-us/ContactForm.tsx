"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { contactFormSchema } from "@/lib/validator";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      number: "+52",
      email: "",
      company: "",
      matter: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    emailjs
      .send(
        "service_dof7msg",
        "template_j6oyaus",
        {
          name: values.name,
          number: values.number,
          email: values.email,
          company: values.company,
          matter: values.matter,
          description: values.description,
        },
        "x-yZSvF_JQZavQDdp"
      )
      .then(
        () => {
          form.reset();
          router.push("/contact-us/thank-you");
        },
        (error) => {
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full max-md:h-[92px] md:flex-grow flex items-center py-2">
              <FormControl>
                <div className="w-full h-full flex max-md:flex-col">
                  <FormLabel className="w-[185px] md:h-full max-md:h-[38px] items-center text-lg text-[#727272] oxygen mr-4">
                    Nombre
                    <span className="text-sm text-[#ff4141]">&nbsp;*</span>
                  </FormLabel>
                  <Input
                    {...field}
                    className="xl:w-[665px] md:w-[440px] max-md:w-full md:h-full max-md:h-[38px] border-[#3d3d3d36]"
                  />
                </div>
              </FormControl>
              <FormMessage className="absolute xl:top-[328px] lg:top-[344px] md:top-[348px] max-md:top-[434px] text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem className="w-full max-md:h-[92px] md:flex-grow flex items-center py-2">
              <FormControl>
                <div className="w-full h-full flex max-md:flex-col">
                  <FormLabel className="w-[185px] md:h-full max-md:h-[38px] items-center text-lg text-[#727272] oxygen mr-4">
                    Número de teléfono
                  </FormLabel>
                  <Input
                    {...field}
                    className="xl:w-[665px] max-xl:w-[440px] max-md:w-full md:h-full max-md:h-[38px] border-[#3d3d3d36]"
                  />
                </div>
              </FormControl>
              <FormMessage className="absolute xl:top-[382px] lg:top-[398px] md:top-[403px] max-md:top-[526px] text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full max-md:h-[92px] md:flex-grow flex items-center py-2">
              <FormControl>
                <div className="w-full h-full flex max-md:flex-col">
                  <FormLabel className="w-[185px] md:h-full max-md:h-[38px] items-center text-lg text-[#727272] oxygen mr-4">
                    Correo electrónico
                    <span className="text-sm text-[#ff4141]">&nbsp;*</span>
                  </FormLabel>
                  <Input
                    {...field}
                    className="xl:w-[665px] max-xl:w-[440px] max-md:w-full md:h-full max-md:h-[38px] border-[#3d3d3d36]"
                  />
                </div>
              </FormControl>
              <FormMessage className="absolute xl:top-[435px] lg:top-[448px] md:top-[452px] max-md:top-[618px] text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="w-full max-md:h-[92px] md:flex-grow flex items-center py-2">
              <FormControl>
                <div className="w-full h-full flex max-md:flex-col">
                  <FormLabel className="w-[185px] md:h-full max-md:h-[38px] items-center text-lg text-[#727272] oxygen mr-4">
                    Empresa
                  </FormLabel>
                  <Input
                    {...field}
                    className="xl:w-[665px] max-xl:w-[440px] max-md:w-full md:h-full max-md:h-[38px] border-[#3d3d3d36]"
                  />
                </div>
              </FormControl>
              <FormMessage className="absolute xl:top-[490px] lg:top-[506px] md:top-[511px] max-md:top-[710px] text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="matter"
          render={({ field }) => (
            <FormItem className="w-full max-md:h-[92px] md:flex-grow flex items-center py-2">
              <FormControl>
                <div className="w-full h-full flex max-md:flex-col">
                  <FormLabel className="w-[185px] md:h-full max-md:h-[38px] items-center text-lg text-[#727272] oxygen mr-4">
                    Asunto
                    <span className="text-sm text-[#ff4141]">&nbsp;*</span>
                  </FormLabel>
                  <Input
                    {...field}
                    className="xl:w-[665px] max-xl:w-[440px] max-md:w-full md:h-full max-md:h-[38px] border-[#3d3d3d36]"
                  />
                </div>
              </FormControl>
              <FormMessage className="absolute xl:top-[544px] lg:top-[560px] md:top-[565px] max-md:top-[802px] text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full md:h-[78px] max-md:h-[116px] flex items-center py-2">
              <FormControl>
                <div className="w-full h-full flex max-md:flex-col">
                  <FormLabel className="w-[185px] md:h-full max-md:h-[38px] text-lg text-[#727272] oxygen mr-4">
                    Pregunta
                    <span className="text-sm text-[#ff4141]">&nbsp;*</span>
                  </FormLabel>
                  <Textarea
                    {...field}
                    className="xl:w-[665px] max-xl:w-[440px] max-md:w-full md:min-h-full max-md:min-h-[62px] border-[#3d3d3d36]"
                  />
                </div>
              </FormControl>
              <FormMessage className="absolute xl:top-[623px] lg:top-[638px] md:top-[643px] max-md:top-[916px] text-xs" />
            </FormItem>
          )}
        />

        <div className="w-full h-[54px] py-2 xl:pl-[198px] lg:pl-[192px] md:pl-[202px]">
          <Button
            type="submit"
            size="lg"
            disabled={form.formState.isSubmitting}
            className="w-[77px] h-full bg-[#B99253] text-lg text-[#494848] oxygen hover:bg-[#bf9e69]"
          >
            Enviar
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
