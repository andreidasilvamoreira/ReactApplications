import { useEffect, useState } from "react";
import "./home.css"
import exemplo1 from "./../assets/exemplo1.png"
export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      try {
        const response = await fetch("http://localhost:8000/api/user", {
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    checkSession();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <>
      <div className="div-pai">
          <div className="div-esquerda">
            <h1>Descubra novos Estilos!</h1>
            <p>Encontre novas formas de expressar sua personalidade <br/> através da moda. Inspire-se e renove seu visual.</p>
            <button className="button-compre">Compre Agora</button></div>
        <div><img src={exemplo1} alt="imagem de um homem com camiseta bege" className="imgHomem" /></div>
      </div>
      <div><h2>Produtos em Destaque</h2></div>
    </>
  );
}
