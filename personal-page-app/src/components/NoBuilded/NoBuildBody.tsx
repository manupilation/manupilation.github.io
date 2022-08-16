import React from "react";
import { Link } from "react-router-dom";

function NoBuildBody() {
  return (
    <main>
      <h1>Ops! Parece que essa página ainda não existe 😔.</h1>
      <div>
        <img src="" alt="" />
      </div>
      <p>Mas calma, acho que o Manu vai fazer ela em breve! 🥺</p>
      <p>Imagem por <a href="https://unsplash.com/es/@hojipago">@hojipago</a></p>
      <Link to="/">Voltar</Link>
    </main>
  )
}

export default NoBuildBody;
