import React, { Component } from "react";

import "../css/User.css";

class User extends Component {
  getStatus = status => {
    if ((status = "online")) return "online";
    if ((status = "offline")) return "offline";
    if ((status = "busy")) return "busy";
  };

  render() {
    const { name, avatar, status } = this.props.user;
    return (
      <div className="user">
        <img src={avatar} alt={name} className="user-avatar" />
        <div className="user-details">
          <p className="user-details-name">{name}</p>
          <p className="user-details-status">{status}</p>
        </div>
      </div>
    );
  }
}

export default User;
