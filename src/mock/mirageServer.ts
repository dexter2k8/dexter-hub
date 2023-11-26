import { createServer, Response as MResponse } from "miragejs";
import { IDataUser, ITechsProps } from "../interfaces";

const userData: IDataUser = {
  courseModule: "Primeiro módulo (Introdução ao Frontend)",
  email: "user@mail.com",
  password: "123456",
  id: "1",
  name: "User",
  techs: [],
};

export function makeServer({ environment = "development" }) {
  const server = createServer({
    environment,

    seeds(server) {
      server.db.loadData({
        profile: [userData],
      });
    },

    routes() {
      this.namespace = "api"; // Define o namespace da API

      this.delete("/users/techs/:id", (schema, request) => {
        const id = request.params.id;
        const data: IDataUser = schema.db.profile[0];
        const newData = {
          ...data,
          techs: data.techs.filter((tech) => String(tech.id) !== id),
        };
        return schema.db.profile.update(newData.id, newData);
      });

      this.post("/users/techs", (schema, request) => {
        const attrs: ITechsProps = JSON.parse(request.requestBody);
        const data = schema.db.profile[0];
        const newID = data.techs.length > 0 ? data.techs[data.techs.length - 1].id + 1 : 0;
        const newData = {
          ...data,
          techs: [...data.techs, { ...attrs, id: newID }],
        };
        return schema.db.profile.update(newData.id, newData);
      });

      this.get("/profile", (schema, request) => {
        const token = request.requestHeaders.authorization?.replace("Bearer ", "");

        // Simula a verificação do token
        if (!token) {
          return new MResponse(403, { message: "Token não fornecido" });
        }
        // Verifica se o token é válido (simplificado para fins de exemplo)
        const isValidToken = token === "seu_token_jwt";
        if (!isValidToken) {
          return new MResponse(403, { message: "Token inválido" });
        }
        const lastId = schema.db.profile?.length - 1;
        return schema.db.profile[lastId];
      });

      this.post("/sessions", (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);
        const profile: IDataUser = schema.db?.profile.findBy({ email: email });
        // Simples verificação de usuário/senha com o miragejs
        if (email === profile?.email && password === profile?.password) {
          return { user: profile, token: "seu_token_jwt" };
        } else {
          return new MResponse(401, {
            message: "Credenciais inválidas. login: user@mail.com, password: 123456",
          });
        }
      });

      this.post("/users", (schema, request) => {
        const attrs: IDataUser = JSON.parse(request.requestBody);
        const newUser = {
          ...attrs,
          id: "2",
          techs: [],
        };
        return schema.db.profile.insert(newUser);
      });

      this.passthrough(); // Ignora as requisições que não iniciam com /api
    },
  });
  return server;
}
