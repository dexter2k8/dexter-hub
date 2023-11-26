import * as yup from "yup";

//esquema de validação
const schema = yup.object({
  title: yup.string().required("Nome é obrigatório"),
  status: yup.string(),
});

export default schema;
