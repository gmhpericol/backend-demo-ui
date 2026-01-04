const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";

async function request<T>(
  method: HttpMethod,
  url: string,
  body?: unknown
): Promise<T> {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE_URL}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const contentType = res.headers.get("content-type");
  
  let data: any = null;

if (contentType?.includes("application/json")) {
  data = await res.json();
} else {
  data = await res.text();
}

if (!res.ok) {
  const message =
    typeof data === "string"
      ? data
      : data?.message || data?.error || "Request failed";

  // 🔑 token invalid / expirat → logout
  if (
    res.status === 401 &&
    (message.toLowerCase().includes("token") ||
      message.toLowerCase().includes("unauthorized"))
  ) {
    localStorage.removeItem("token");
    window.location.href = "/";
    return Promise.reject(new Error("Session expired"));
  }

  throw new Error(message);
}


return data;
}

export const http = {
  get: <T>(url: string) => request<T>("GET", url),
  post: <T>(url: string, body?: unknown) => request<T>("POST", url, body),
  patch: <T>(url: string, body?: unknown) => request<T>("PATCH", url, body),
  delete: <T>(url: string) => request<T>("DELETE", url),
};
