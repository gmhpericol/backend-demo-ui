import Login from "./pages/Login";
import Subscriptions from "./pages/Subscriptions";
import Audit from "./pages/Audit";
import { getUserFromToken } from "./auth/jwt";

function App() {
  const token = localStorage.getItem("token");
  const user = getUserFromToken();

  if (!token || !user) {
    return <Login />;
  }

  return (
    <div>
      <div>
        Logged in as <strong>{user.role}</strong>
      </div>

      <Subscriptions />
      {user.role === "MANAGER" && <Audit />}

    </div>
  );
}

export default App;
