import React, { useState } from "react";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/Dashboard";

const AppShell = () => {
  const [view, setView] = useState<"signup" | "login" | "dashboard">("signup");

  const handleSignupSuccess = () => {
    console.log("Signup successful");
    setView("login");
  };

  const handleLoginSuccess = () => {
    console.log("Login successful");
    setView("dashboard");
  };

  return (
    <main className="app-shell">
      {view === "signup" && <SignupPage onSuccess={handleSignupSuccess} />}
      {view === "login" && <LoginPage onSuccess={handleLoginSuccess} />}
      {view === "dashboard" && <DashboardPage />}
    </main>
  );
};

export default AppShell;