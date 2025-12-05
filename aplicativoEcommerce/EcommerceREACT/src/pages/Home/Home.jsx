import { useEffect, useState } from "react";
import "./home.css"
import exemplo1 from "./../../assets/exemplo1.png"
import HomeProducts from "../../components/Home-products/home-products";
import { getUser } from "../../api/users";

export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      try {

        const data = await getUser(token);

        setUser(data);

      } catch (error) {

        console.error("Usuário não autenticado");

      } finally {

        setLoading(false);
      }
    }

    checkSession();
  }, []);

  if (loading) return <p className="carregando">Carregando...</p>;

  return (
    <>
      <div className="div-pai">
        <div className="div-esquerda">
          <h1>Descubra novos Estilos!</h1>
          <p>Encontre novas formas de expressar sua personalidade <br /> através da moda. Inspire-se e renove seu visual.</p>
          <button className="button-compre">Compre Agora</button></div>
        <div><img src={exemplo1} alt="imagem de um homem com camiseta bege" className="imgHomem" /></div>
      </div>
      <div><h2>Produtos em Destaque</h2></div>
      <HomeProducts />
    </>
  );
}
