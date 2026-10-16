import { createFileRoute } from "@tanstack/react-router";
import { AuthCard } from "@/components/auth-card";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign In — SCIS" },
      { name: "description", content: "Sign in to your SCIS member account." },
      { property: "og:title", content: "Sign In — SCIS" },
      { property: "og:description", content: "Sign in to your SCIS account." },
    ],
  }),
  component: () => <AuthCard mode="signin" />,
});
