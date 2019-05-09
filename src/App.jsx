import React, { Fragment, Component } from "react";

// Router
import { Router, Route, IndexRoute, browserHistory } from "react-router";

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
      <Fragment>
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={MainPage} />
            <Router path="users" component={Users}>
              <Router path=":userId" component={User} />
            </Router>
            <Router path="posts" component={Posts}>
              <Router path=":postId" component={Post} />
            </Router>
            <Router path="comments" component={Comments}>
              <Router path=":commentId" component={Comment} />
            </Router>
            <Route path="*" component={PageNotFound} />
          </Route>
        </Router>
      </Fragment>
    );
  }
}

export default App;
