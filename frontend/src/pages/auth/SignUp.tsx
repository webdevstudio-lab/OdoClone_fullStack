import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Logo from "@/components/logo/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Spinner } from "@/components/ui/spinner";

const SignUp = () => {
  const { register, isSigningUp } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const fromSchema = z.object({
    name: z.string().min(1, { message: "Le nom est obligatoire" }),
    email: z
      .string()
      .email({ message: "Veuillez entrer une adresse email valide" }),
    password: z
      .string()
      .min(6, { message: "Le mot de passe doit avoir au moins 6 caractères" }),
    confirmpassword: z
      .string()
      .min(6, { message: "Le mot de passe doit avoir au moins 6 caractères" }),
  });

  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof fromSchema>) => {
    if (isSigningUp) return;
    register(data);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-muted p-6">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader className="flex flex-col items-center justify-center gap-3">
            <Logo />
            <CardTitle className="text-2xl font-bold text-blue-950">
              Creation de votre compte
            </CardTitle>
            <CardDescription className="text-xs text-center">
              Bienvenue Dans votre espace de travail , veuillez saisir vos
              identifiants pour la creation de votre compte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Entrez votre nom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Entrez votre addresse email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mot de passe</FormLabel>
                      <FormControl>
                        <InputGroup>
                          <InputGroupInput
                            placeholder="mot de passe"
                            type={showPassword ? "text" : "password"}
                            {...field}
                          />
                          <InputGroupAddon align="inline-end">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <InputGroupButton
                                  className="rounded-full cursor-pointer"
                                  size="icon-xs"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                  ) : (
                                    <Eye className="w-5 h-5" />
                                  )}
                                </InputGroupButton>
                              </TooltipTrigger>
                              <TooltipContent>
                                Afficher le mot de passe
                              </TooltipContent>
                            </Tooltip>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>

                <FormField
                  control={form.control}
                  name="confirmpassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmer le mot de passe</FormLabel>
                      <FormControl>
                        <InputGroup>
                          <InputGroupInput
                            placeholder="mot de passe"
                            type={showPassword ? "text" : "password"}
                            {...field}
                          />
                          <InputGroupAddon align="inline-end">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <InputGroupButton
                                  className="rounded-full cursor-pointer"
                                  size="icon-xs"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                  ) : (
                                    <Eye className="w-5 h-5" />
                                  )}
                                </InputGroupButton>
                              </TooltipTrigger>
                              <TooltipContent>
                                Afficher le mot de passe
                              </TooltipContent>
                            </Tooltip>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>

                <Button
                  className="mt-5 cursor-pointer"
                  type="submit"
                  disabled={isSigningUp}
                >
                  {isSigningUp ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : (
                    <>
                      <span>S'inscrire</span>
                      <ArrowRight className=" w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <div className="mt-6 text-sm text-center font-medium">
          <p className=" ">
            Vous avez déja un compte ?{" "}
            <button
              className="text-primary hover:underline text-base cursor-pointer dark:text-[#f1f7feb5]"
              onClick={() => (window.location.href = "/connexion")}
            >
              Se connecter
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
