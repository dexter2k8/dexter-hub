import Global from "./styles/global";
import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <>
      <Global />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
      <ToastContainer
        toastStyle={{ backgroundColor: "#343b41" }}
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
