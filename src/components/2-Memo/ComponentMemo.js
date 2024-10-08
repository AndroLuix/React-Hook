import React, { useMemo, useState } from "react";
import UseFetch from '../CostumHook/useFetch'


const url = "https://api.github.com/users";

/**
 * Trova il Valore Maggiore
 * @param {[Object]} array
 * @returns {Number}
 */
const trovaMaggiore = (array) => {
  return array.reduce((total, item) => {
    if (item.id > total) {
      total = item.id;
      console.log(total);
    }
    return total;
  }, 0);
};
const Index = () => {
  const { data } = UseFetch(url);
  /**
   * @type {[Number, Function]}
   */
  const [contatore, setContatore] = useState(0);

  /**
   * Tiene Traccia del valore returnato da trovaMaggiore
   * Fino a quando data non Varia, restituisce sempre quel valore
   * invece di eseguire nuovamente la funzione
   */
  useMemo(() => trovaMaggiore(data), [data]);
  return (
    <>
      <div style={{ width: "fit-content", margin: "auto" }} className="mt-5">
        <button
          className="btn btn-info"
          onClick={() => setContatore(contatore + 1)}
        >
          Aggiungi
        </button>
        <h4>{contatore}</h4>
      </div>
      <div style={{ width: "fit-content", margin: "auto" }}>
        {data.map((el) => {
          return <Elenco key={el.id} {...el} />;
        })}
      </div>
    </>
  );
};

/**
 * Il Componente è inserito all'interno di Memo, che controlla i valori all'interno del props
 * Se essi non variano il componente viene memorizzato e non subisce un nuovo Render
 */
const Elenco = React.memo(({ avatar_url: image, login: name, id }) => {
  return (
    <article className="card bg-white my-3 shadow-sm">
      <img
        src={image}
        alt={name}
        className="img my-3"
        style={{ width: "30%", borderRadius: "50%", margin: "auto" }}
      />
      <h5>id: {id}</h5>
      <h4>{name} </h4>
    </article>
  );
});

export default Index;
