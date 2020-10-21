import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./header.css";
import "./medias.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuMobile: false,
    };
  }

  openMenu = () => {
    if (!this.state.menuMobile) {
      document.addEventListener("click", this.isInPage, false);
    } else {
      document.removeEventListener("click", this.isInPage, false);
    }
    this.setState((prevState) => ({
      menuMobile: !prevState.menuMobile,
    }));
  };

  // adicionando o outclick (node) ao DOM;
  isInPage = (e) => {
    if (this.node) {
      const domNode = ReactDOM.findDOMNode(this.node);
      if (this.node.contains(e.target)) {
        return domNode;
      }
    }
    this.openMenu();
  };

  render() {
    return (
      <div>
        {this.state.menuMobile && (
          <div
            className="menuMobile"
            ref={(node) => {
              this.node = node;
            }}
          >
           <a href="/"> <p> FUNCIONALIDADES </p> </a>
            <a href="/"> <p> CONTATO </p> </a>
            <p className="fbIcon">
              <a href="https://www.facebook.com/t2software" target=" _blank">
                <i className="fbIcon" class="fab fa-facebook-square"></i>
              </a>
            </p>
          </div>
        )}

        <header className="header-box">
          <div className="logo">
            Neovision
            <button className="menuMobile-button" onClick={this.openMenu}>
              <i class="fas fa-bars"></i>
            </button>
          </div>

          <div className="menu">
            <a href="/"> <p> FUNCIONALIDADES </p> </a>
            <a href="/"> <p> CONTATO </p> </a>
            <p className="fbIcon">
              <a href="https://www.facebook.com/t2software" target=" _blank">
                <i className="fbIcon" class="fab fa-facebook-square"></i>
              </a>
            </p>
          </div>
        </header>
      </div>
    );
  }
}
