interface JwtPayload {
  userId: string;
  role: "USER" | "ADMIN" | "MANAGER";
}

export function getUserFromToken(): JwtPayload | null {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = token.split(".")[1];
    const decoded = JSON.parse(atob(payload));
    return decoded;
  } catch {
    return null;
  }
}
