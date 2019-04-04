import React, { Fragment, Component } from "react";

// Components
import Login from "./components/Login";
import Menu from "./components/Menu";

// Styles
import "bulma/css/bulma.css";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "My works", href: "/works" },
        { name: "Contact", href: "/contacts" }
      ]
    };
  }
  render() {
    return (
      <Fragment>
        <Menu menuItems={this.state.menuItems} />
        <div className="container">
          <div className="wrapper">
          <div className="columns is-desktop is-vcentered">
            <Login />
          </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
