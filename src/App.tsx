import Login from "./pages/Login";
import Subscriptions from "./pages/Subscriptions";

function App() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Login />;
  }

  return <Subscriptions />;
}

export default App;
