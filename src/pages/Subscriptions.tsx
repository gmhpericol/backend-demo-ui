import { useEffect, useState } from "react";
import { getSubscriptions, type Subscription } from "../api/subscriptions.api";
import { getUserFromToken } from "../auth/jwt";

function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const user = getUserFromToken();
  const canManage = user?.role === "ADMIN" || user?.role === "MANAGER";

  useEffect(() => {
    getSubscriptions()
      .then(setSubscriptions)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading subscriptions...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Subscriptions</h1>

      {subscriptions.length === 0 ? (
        <div>No subscriptions found.</div>
      ) : (
        <><table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Contract</th>
                <th>Status</th>
                <th>Plan</th>
                <th>Next Billing</th>
                <th>Last Billed</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((sub) => (
                <tr key={sub.id}>
                  <td>{sub.id}</td>
                  <td>{sub.contractId}</td>
                  <td>{sub.status}</td>
                  <td>{sub.plan}</td>
                  <td>{sub.nextBillingAt ?? "-"}</td>
                  <td>{sub.lastBilledAt ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table><button disabled={!canManage}>
              Create subscription
            </button></>

      )}
    </div>
  );
}

export default Subscriptions;
