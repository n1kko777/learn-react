import React, { Fragment, Component } from "react";

// Components
import Menu from "./components/Menu";
import WelcomeModal from "./components/WelcomeModal";
import Blog from "./components/Blog";

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
      ],
      blogPosts: []
    };
  }
  render() {
    const { menuItems, blogPosts } = this.state;

    return (
      <Fragment>
        <Menu menuItems={menuItems} />
        <WelcomeModal />
        <div className="container">
          <div className="wrapper">
            <Blog blogPosts={blogPosts} />
          </div>
        </div>
      </Fragment>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          blogPosts: data
        });
      });
  }
}

export default App;
