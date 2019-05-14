import React, { Fragment, Component } from "react";

// Components
import Menu from "../../components/Menu";
import WelcomeModal from "../../components/WelcomeModal";

// Redux
import { connect } from "react-redux";

class Layout extends Component {
  render() {
    const { children, modal } = this.props;

    return (
      <Fragment>
        <Menu />
        {modal ? <WelcomeModal /> : null}
        <div className="container">
          <div className="wrapper">{children}</div>
        </div>
      </Fragment>
    );
  }
}

export default connect(state => ({
  modal: state.modal
}))(Layout);
