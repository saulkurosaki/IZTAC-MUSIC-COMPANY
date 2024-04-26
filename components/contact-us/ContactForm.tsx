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

import { contactFormSchema } from "@/lib/validator";

const ContactForm = () => {
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

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    console.log(values);
    form.reset();
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
              <FormMessage className="absolute xl:top-[328px] lg:top-[344px] text-xs" />
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
              <FormMessage className="absolute xl:top-[382px] lg:top-[398px] text-xs" />
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
              <FormMessage className="absolute xl:top-[435px] lg:top-[448px] text-xs" />
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
              <FormMessage className="absolute xl:top-[490px] lg:top-[506px] text-xs" />
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
              <FormMessage className="absolute xl:top-[544px] lg:top-[560px] text-xs" />
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
              <FormMessage className="absolute xl:top-[623px] lg:top-[638px] text-xs" />
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
