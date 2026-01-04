import { http } from "./http";

export type SubscriptionStatus =
  | "ACTIVE"
  | "PAUSED"
  | "CANCELED"
  | "EXPIRED";

export interface Subscription {
  id: string;
  contractId: string;
  status: SubscriptionStatus;
  plan: string;
  nextBillingAt: string | null;
  lastBilledAt: string | null;
}

export async function getSubscriptions(): Promise<Subscription[]> {
  return http.get<Subscription[]>("/subscriptions");
}
