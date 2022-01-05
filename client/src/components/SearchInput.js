import { useState, useEffect } from "react";
import ProdutoCard from "./ProdutoCard.js";
import styles from "./SearchInput.module.css";
import Axios from 'axios'

export default function SearchInput() {
  const [itens, setItens] = useState([]);
  const [NI, setNI] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/itens")
  //     .then((reps) => reps.json())
  //     .then((resp) => {
  //       setItens(resp);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/getProdutos")
    .then((resp) => {
        // console.log(resp);
        setItens(resp.data)
    })
},[])

  function BChap() {
    function chapeuF(obj) {
      return obj.tipo === "chapeu";
    }

    const NovosItens = itens.filter(chapeuF);
    setNI(NovosItens);
  }

  function BBlusa() {
    function BlusaF(obj) {
      return obj.tipo === "Blusa";
    }

    const NovosItens = itens.filter(BlusaF);
    setNI(NovosItens);
  }

  function BCamisa() {
    function CamisaF(obj) {
      return obj.tipo === "Camisa";
    }

    const NovosItens = itens.filter(CamisaF);
    setNI(NovosItens);
  }

  function BClear() {
    const NovosItens = [];
    setNI(NovosItens);
  }

  return (
    <div className={styles.pesquisa_container}>
      <div className={styles.button_container}>
        <button type="button" onClick={BChap}>
          Chapeu
        </button>
        <button type="button" onClick={BBlusa}>
          Moletom
        </button>
        <button type="button" onClick={BCamisa}>
          Camisa
        </button>
        {/* <button type="button">Tenis</button> */}
        <button type="button" onClick={BClear}>
          Limpar
        </button>
      </div>

      <div className={styles.itens}>
        {NI.map((item) => (
          <ProdutoCard
            nome={item.nome}
            valor={item.preço}
            img={item.img}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
