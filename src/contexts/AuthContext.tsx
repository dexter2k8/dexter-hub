import { createContext } from "react";

interface IAuthContext {
  loginUser: (data: object) => void;
}

export const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: { children: React.ReactNode }) {
  async function loginUser(data: object) {
    console.log(data);
  }
  return <AuthContext.Provider value={{ loginUser }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
