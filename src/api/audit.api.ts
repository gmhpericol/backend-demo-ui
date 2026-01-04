import { http } from "./http";

export interface AuditLog {
  id: string;
  actorUserId: string;
  targetUserId: string | null;
  action: string;
  createdAt: string;
}

export async function getAuditLogs(): Promise<AuditLog[]> {
  return http.get("/audit");
}
