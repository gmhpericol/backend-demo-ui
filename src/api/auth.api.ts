import { http } from "./http";

interface LoginResponse {
  token: string;
}

export async function login(email: string, password: string): Promise<string> {
  const res = await http.post<LoginResponse>("/auth/login", {
    email,
    password,
  });

  return res.token;
}
