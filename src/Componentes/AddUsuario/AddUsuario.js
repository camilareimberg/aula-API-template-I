import React, { useState } from "react";
import axios from "axios";

function AddUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const criarUsuario = (name, email) => {
    const headers = {
      headers: {
        Authorization: "camila-reimberg-barbosac"
      }
    };
    const body = {
      name,
      email
    };
    //quando tem um post, chama primeiro o body e depois o header, se firzer ao contrário pode dar erro
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        headers
      )
      .then((resposta) => {
        alert("Usuario adicionado com sucesso");
        //para depois que adicionar limpar o campo do input
        setNome("");
        setEmail("");
        props.pegarTodosOsUsuarios();
      })
      .catch((erro) => {});
  };

  return (
    <>
      <p>Adicionar novo usuario</p>
      <input
        placeholder={"nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder={"email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={() => criarUsuario(nome, email)}>Enviar</button>
    </>
  );
}

export default AddUsuario;
