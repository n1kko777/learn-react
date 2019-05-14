import React, { Component } from "react";

// Router
import { Route, Switch } from "react-router-dom";

// Layout
import Layout from "./layouts/Layout";

// Pages
import MainPage from "./pages/Main";
import Users from "./pages/Users";
import User from "./pages/Users/User";
import Posts from "./pages/Posts";
import Post from "./pages/Posts/Post";
import Comments from "./pages/Comments";
import Comment from "./pages/Comments/Comment";
import PageNotFound from "./pages/PageNotFound";

// Styles
import "bulma/css/bulma.css";
import "./style.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:userId" component={User} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/posts/:postId" component={Post} />
          <Route exact path="/comments" component={Comments} />
          <Route path="/comments/:commentId" component={Comment} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
