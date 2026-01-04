import { useEffect, useState } from "react";
import { getAuditLogs, type AuditLog } from "../api/audit.api";

function Audit() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAuditLogs()
      .then(setLogs)
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Audit log</h1>

      <table>
        <thead>
          <tr>
            <th>Actor</th>
            <th>Target</th>
            <th>Action</th>
            <th>When</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.actorUserId}</td>
              <td>{log.targetUserId ?? "-"}</td>
              <td>{log.action}</td>
              <td>{log.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Audit;
