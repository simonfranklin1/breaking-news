import * as z from 'zod';

export const signinSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(8, { message: "A senha deve ter no mínimo 8 caracteres" }),
});

export const signupSchema = z.object({
  name: z.string().min(3, { message: "O nome deve ter no mínimo 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(8, { message: "A senha deve ter no mínimo 8 caracteres" }),
  avatar: z.string().min(3, { message: "Insira a URL da sua foto de perfil" }),
  background: z.string().min(3, { message: "Insira a URL da sua foto de fundo" })
})

export const postSchema = z.object({
  title: z.string().min(3, { message: "Insira o título da notícia" }),
  text: z.string().min(3, { message: "Insira o texto da notícia" }),
  banner: z.string().min(3, { message: "Insira a URL da foto da notícia" })
})