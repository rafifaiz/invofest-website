import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

export default function Logout() {
  const navigate = useNavigate();
  const logout = useAuthStore((s) => s.logout);

  React.useEffect(() => {
    logout();
    navigate("/", { replace: true });
  }, [logout, navigate]);

  return null;
}

