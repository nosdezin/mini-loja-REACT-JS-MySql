import { useState, useEffect } from "react";
import Axios from "axios";
import styles from "./Home.module.css";
import ProdutoCard from "./ProdutoCard";

export default function Home() {
  const [itens, setItens] = useState([]);

  // useEffect(() => {
  //     fetch("http://localhost:5000/itens")
  //     .then((reps) => reps.json())
  //     .then((resp) => {
  //       setItens(resp)
  //     })
  //     .catch((err) => console.log(err));
  //   }, [])

  useEffect(() => {
    Axios.get("http://localhost:3001/getProdutos").then((resp) => {
      // console.log(resp);
      setItens(resp.data);
    });
  }, []);

  return (
    <div className={styles.Home_container}>
      <h1>Sejá bem-vindo</h1>

      <main>
        <div>
          {itens.map((val) => (
            <ProdutoCard
              nome={val.nome}
              valor={val.preço}
              img={val.img}
              key={val.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
