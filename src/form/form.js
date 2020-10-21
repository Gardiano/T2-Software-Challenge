import React, { Component } from "react";
import "./form.css";
import "./medias.css";

import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNome = this.handleNome.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleNome(e) {
    this.setState({ nome: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  async handleSubmit(e) {
    const url =
      "https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register";
    const data = { name: this.state.nome, email: this.state.email };
    const options = {
      headers: { Authorization: "joaopaulong@hotmail.com" },
    };

    if (this.state.nome.length > 3 && this.state.email.length > 3) {
      axios
        .post(url, data, options)
        .then((r) => {
          console.log(r);
          alert("Cadastro realizado com sucesso!");
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      alert("Nome ou Email inválidos (Mínimo 4 Caracteres)");
    }

    e.preventDefault();
  }

  render() {
    return (
      <div>
        <section className="form-box">
          <div className="texto-form">
            {" "}
            <h1> Quer conhecer mais sobre o Neovision? </h1>{" "}
          </div>

          <form className="form-content" onSubmit={this.handleSubmit}>
            <input
              value={this.state.nome}
              type="text"
              placeholder="  Nome"
              onChange={(e) => this.setState({ nome: e.target.value })}
            />

            <input
              value={this.state.email}
              type="email"
              placeholder="  E-mail"
              onChange={this.handleEmail}
            />
            <button type="submit"> ENVIAR </button>
          </form>
        </section>
      </div>
    );
  }
}
