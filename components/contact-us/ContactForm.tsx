"use client";

import {
  Form,
  FormControl,
  FormDescription,
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
      number: "+52 ",
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
    <div className="w-full h-[546px] bg-white py-10">
      <div className="container w-[1320px] h-full px-0">
        <div className="w-full h-full flex">
          <div className="w-[880px] h-full px-[15px]">
            <p className="w-full h-12 mb-4 text-lg text-[#727272] flex items-center oxygen">
              Mándenos mensaje sobre cualquier cosa relacionada con nuestra
              empresa o servicios. <br />
              Haremos todo lo posible para contactarle lo antes posible.
            </p>
            <div className="w-full h-[402px]">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full h-full flex flex-col"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full flex-grow flex items-center py-2">
                        <FormControl>
                          <div className="w-full h-full flex">
                            <p className="w-[185px] h-full flex items-center text-lg text-[#727272] oxygen">
                              Nombre
                              <span className="text-sm text-[#ff4141]">
                                &nbsp;*
                              </span>
                            </p>
                            <Input
                              {...field}
                              className="w-[665px] h-full border-[#3d3d3d36]"
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                      <FormItem className="w-full flex-grow flex items-center py-2">
                        <FormControl>
                          <div className="w-full h-full flex">
                            <p className="w-[185px] h-full flex items-center text-lg text-[#727272] oxygen">
                              Número de teléfono
                            </p>
                            <Input
                              {...field}
                              className="w-[665px] h-full border-[#3d3d3d36]"
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full flex-grow flex items-center py-2">
                        <FormControl>
                          <div className="w-full h-full flex">
                            <p className="w-[185px] h-full flex items-center text-lg text-[#727272] oxygen">
                              Correo electrónico
                              <span className="text-sm text-[#ff4141]">
                                &nbsp;*
                              </span>
                            </p>
                            <Input
                              {...field}
                              className="w-[665px] h-full border-[#3d3d3d36]"
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem className="w-full flex-grow flex items-center py-2">
                        <FormControl>
                          <div className="w-full h-full flex">
                            <p className="w-[185px] h-full flex items-center text-lg text-[#727272] oxygen">
                              Empresa
                            </p>
                            <Input
                              {...field}
                              className="w-[665px] h-full border-[#3d3d3d36]"
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="matter"
                    render={({ field }) => (
                      <FormItem className="w-full flex-grow flex items-center py-2">
                        <FormControl>
                          <div className="w-full h-full flex">
                            <p className="w-[185px] h-full flex items-center text-lg text-[#727272] oxygen">
                              Asunto
                              <span className="text-sm text-[#ff4141]">
                                &nbsp;*
                              </span>
                            </p>
                            <Input
                              {...field}
                              className="w-[665px] h-full border-[#3d3d3d36]"
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="w-full h-[78px] flex items-center py-2">
                        <FormControl>
                          <div className="w-full h-full flex">
                            {/* <p className="w-[185px] h-full flex items-center text-lg text-[#727272] oxygen">
                              Pregunta
                              <span className="text-sm text-[#ff4141]">
                                &nbsp;*
                              </span>
                            </p> */}
                            {/* <Textarea
                              {...field}
                              className="w-[665px] min-h-full border-[#3d3d3d36]"
                            /> */}
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* <div className="w-full h-[54px] py-2 pl-[185px]">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={form.formState.isSubmitting}
                      className="w-[77px] h-full bg-[#B99253] text-lg text-[#494848] oxygen hover:bg-[#bf9e69]"
                    >
                      Enviar
                    </Button>
                  </div> */}
                </form>
              </Form>
            </div>
          </div>
          {/* <div className="w-[440px] h-full px-[15px]"></div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
