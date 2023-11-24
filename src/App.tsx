import Global from "./styles/global";
import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Global />
      <RoutesMain />
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
