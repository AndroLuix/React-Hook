import React, { useState } from "react";
import useFetch from "./useFetch";
import CodeBlock from '../Tools/CodeBlock';
import { CODEFETCH } from "./useFetchCode";
import { CODECOMPONENTS } from "./codeComponents";

const url = "https://jsonplaceholder.typicode.com/users";
const postUrl = "https://jsonplaceholder.typicode.com/posts";

const FetchComponents = () => {
  const [showCode, setShowCode] = useState(true);
  const [list, setList] = useState(false); // true: mostra GET, false: mostra POST

  return (
    <div>
      <h1>Utilizzare useFetch per richieste Get e Post</h1>
      {/* Bottone per alternare tra GET e POST */}
      <div className="d-flex flex-row justify-content-center gap-5">

        {showCode ?  null : (
          <button
            className="btn btn-info text-white fs-4"
            onClick={() => setList(!list)}
          >
            {list ? "Mostra POST" : "Mostra GET"}
          </button>
        ) }


        <button
          className="btn btn-dark fs-4"
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? "Nascondi Codice" : "Mostra Codice"}
        </button>
      </div>

      <div className={showCode ? "bg-secondary mt-3 rounded text-white py-3" : ""}>
        {showCode ? (
          <CodeText />
        ) : (
          <>
            {list ? <Get /> : <Post />}
          </>
        )}
      </div>
    </div>
  );
};

const CodeText = () => {
  return (
    <div>
      <h3>UseFetch.js</h3>
      <CodeBlock code={CODEFETCH} />

      <h3>FetchComponents.js</h3>
      <CodeBlock code={CODECOMPONENTS} />
    </div>
  );
};

const Get = () => {
  const { data, isLoading } = useFetch(url);

  return isLoading ? (
    <h3>Loading....</h3>
  ) : (
    <div>
      <h2>Richiesta GET</h2>
      {data.map((el) => {
        const { id, name, phone } = el;
        return (
          <div key={id} className="users bg-white p-4 shadow rounded">
            <h3>{name}</h3>
            <h5>{phone}</h5>
          </div>
        );
      })}
    </div>
  );
};

const Post = () => {
  const { data, isLoading } = useFetch(postUrl);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <div className="bg-secondary text-white m-3 shadow">
      <h2>Richiesta POST</h2>
      {data.map((el) => {
        const { id, title, body } = el;
        return (
          <div key={id} className="my-2">
            <h3>{title}</h3>
            <p>{body}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default FetchComponents;
