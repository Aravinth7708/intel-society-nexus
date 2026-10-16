import { createFileRoute } from "@tanstack/react-router";
import { AuthCard } from "@/components/auth-card";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign Up — SCIS" },
      { name: "description", content: "Create your SCIS account and join the cyber community." },
      { property: "og:title", content: "Sign Up — SCIS" },
      { property: "og:description", content: "Create your SCIS account." },
    ],
  }),
  component: () => <AuthCard mode="signup" />,
});
