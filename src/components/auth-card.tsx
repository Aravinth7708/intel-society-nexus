import { Link } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/student-real.jpg";

export function AuthCard({ mode }: { mode: "signin" | "signup" }) {
  const [done, setDone] = useState(false);
  const up = mode === "signup";
  return (
    <section className="cyber-grid">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <img src={hero} alt="" width={1024} height={1280} className="mx-auto hidden max-h-[520px] w-auto rounded-3xl object-cover shadow-card md:block" />
        <div className="rounded-3xl border bg-card p-8 shadow-card">
          <h1 className="text-3xl font-bold">{up ? "Create your account" : "Welcome back"}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{up ? "Join the SCIS cyber community." : "Sign in to your SCIS account."}</p>
          {done ? <p className="mt-6 rounded-lg bg-primary-soft p-4 text-sm">Accounts are coming soon — we've noted your details.</p> : (
            <form className="mt-6 space-y-3" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
              {up && <input required className="field" placeholder="Full name" />}
              <input required type="email" className="field" placeholder="Email" />
              <input required type="password" className="field" placeholder="Password" />
              <button className="btn-primary w-full">{up ? "Sign Up" : "Sign In"}</button>
            </form>
          )}
          <p className="mt-5 text-center text-sm text-muted-foreground">
            {up ? "Already a member? " : "New here? "}
            <Link to={up ? "/signin" : "/signup"} className="font-semibold text-primary">{up ? "Sign In" : "Sign Up"}</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
