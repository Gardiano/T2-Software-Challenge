import React, { Component } from "react";
import "./main.css";
import "./medias.css";

import Form from "../../form/form";

export default class Main extends Component {
  render() {
    return (
      <div>
        <section className="main-box">
          <div className="main-content"></div>
        </section>

        <main className="texto-box">
          <div className="texto-content">
            <div className="texto">
              <h1> Neovision </h1>
              Neovision é um aplicativo mobile para reconhecimento por imagem de produtos e suas
              características, através de inteligência artificial.
              <br></br>
              <br></br>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos.

              <div className="funcionalidades">
                <p>
                  {" "}
                  <i class="fas fa-check"></i> Funcionalidade 1{" "}
                </p>
                <p>
                  {" "}
                  <i class="fas fa-check"></i> Funcionalidade 2{" "}
                </p>
                <p>
                  {" "}
                  <i class="fas fa-check"></i> Funcionalidade 3{" "}
                </p>
              </div>
            </div>
          </div>
        </main>
        <Form />
      </div>
    );
  }
}
