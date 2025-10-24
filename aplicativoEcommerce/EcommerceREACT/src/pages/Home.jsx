import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkSession() {
      try {
        const response = await fetch("http://localhost:8000/api/user", {
          credentials: "include",
        });

        if (!response.ok) throw new Error("Sessão expirada");

        const data = await response.json();
        setUser(data);
      } catch (error) {
        navigate("/login"); // redireciona se não estiver logado
      }
    }

    checkSession();
  }, []);

  if (!user) return <p>Carregando...</p>;

  return <div>Bem-vindo, {user.name}!</div>;
}
