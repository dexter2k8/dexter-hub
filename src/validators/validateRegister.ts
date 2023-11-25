import * as yup from "yup";

//esquema de validação
const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email é obrigatório").email("Deve ser um email válido"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/[A-z]/, "Deve conter ao menos uma letra")
    .matches(/(\W)|_/, "Deve conter um símbolo")
    .min(8, "No mínimo 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha é obrigatória")
    .oneOf([yup.ref("password")], "Confirmação de senha deve ser igual a senha"),
});

export default schema;
