# Backend Demo UI

This project is a **minimal UI client** built to showcase the behavior, domain flows, and architectural decisions of a backend REST API.

The UI is intentionally simple and unopinionated. Its purpose is **not** to be a full product, but to act as a clear, realistic API consumer for demonstration and interview scenarios.

---

## 🎯 Purpose

This UI exists to demonstrate:

- JWT authentication flow
- Role-Based Access Control (RBAC) visibility
- Subscription lifecycle consumption
- Audit log access (MANAGER-only)
- Proper handling of token expiration
- Clean separation between frontend and backend responsibilities

The backend remains the **single source of truth**.  
The UI does not reimplement business logic.

---

## 🧠 Design Philosophy

- **API-first**: the backend is consumed as a black box
- **No overengineering**: no global state libraries, no complex abstractions
- **Thin UI**: frontend reflects backend state, it does not infer it
- **Explicit boundaries**: authentication, authorization, and validation are enforced server-side

---

## 🧩 Features Demonstrated

- Login using JWT
- Automatic logout on token expiration
- Role visibility in UI (USER / ADMIN / MANAGER)
- Conditional UI rendering based on role
- Subscription listing from the backend API
- Audit log access restricted to MANAGER role
- Manual logout

---

## 🛠 Tech Stack

- React
- TypeScript
- Vite
- Fetch API (custom HTTP client)

---

## 🌐 Deployment

The UI is deployed as a **static site** and consumes a separately deployed backend API.

Environment variable required at build time:
VITE_API_BASE_URL=https://https://backend-demo-ui.onrender.com/

---

## 🔐 Security Notes

- JWT is stored in `localStorage` (acceptable for demo purposes)
- Token validity is enforced by the backend
- Expired or invalid tokens trigger automatic logout
- UI authorization is **only visual**; backend RBAC is authoritative

---

## 📌 What This UI Is NOT

- Not a production-ready frontend
- Not a design showcase
- Not a full CRUD application
- Not a replacement for backend validation

---

## 🔗 Related Project

This UI is designed to work with the corresponding backend project:
https://backend-auth-rbac.onrender.com
https://github.com/gmhpericol/backend-auth-rbac

👉 **Backend REST API**  
(User, Contract, Subscription, RBAC, Audit, Billing-ready architecture)

---

## 🧪 Demo Flow (Suggested)

1. Login with different roles (USER / ADMIN / MANAGER)
2. Observe role-based UI changes
3. View subscriptions
4. (MANAGER) Access audit log
5. Wait for token expiration → automatic logout

---

## 🧑‍💻 Author Notes

This project was built as a **technical showcase**, focusing on correctness, clarity, and architectural reasoning rather than feature completeness.

