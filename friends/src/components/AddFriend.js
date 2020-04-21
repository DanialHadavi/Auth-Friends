import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
  constructor() {
    super();
    this.state = { friend: { name: "", age: "", email: "" } };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/friends", this.state.friend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  login = (event) => {
    this.setState({
      friend: { ...this.state.friend, [event.target.name]: event.target.value },
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="AddFriend">
        <h2>Add Friend 🙂</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.login} placeholder="Name" name="name" />
          <input onChange={this.login} placeholder="Age" name="age" />
          <input onChange={this.login} placeholder="Email" name="email" />
          <button className="addBtn">Add Friend</button>
        </form>
      </div>
    );
  }
}

export default AddFriend;
