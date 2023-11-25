import * as yup from "yup";

//esquema de validação
const schema = yup.object({
  email: yup.string().required("Email é obrigatório").email("Deve ser um email válido"),
  password: yup.string().required("Senha é obrigatória"),
});

export default schema;
