import Home from "./pages/Home";
import toast, { Toaster } from "react-hot-toast";
function App() {
  return <><Toaster
    position="bottom-right"
    toastOptions={{
      duration: 4000,
      style: {
        background: "#ffffff",
        color: "#111111",
        border: "1px solid #111111",
        borderRadius: "0px",
        padding: "14px 18px",
        fontSize: "14px",
        fontWeight: "500",
        boxShadow: "6px 6px 0px #111111",
        maxWidth: "380px",
      },
      success: {
        iconTheme: {
          primary: "#111111",
          secondary: "#ffffff",
        },
      },
      error: {
        iconTheme: {
          primary: "#111111",
          secondary: "#ffffff",
        },
      },
    }}
  /><Home></Home></>
}

export default App;
