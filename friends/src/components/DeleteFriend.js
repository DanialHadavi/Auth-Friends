import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class DeleteFriend extends React.Component {
  constructor() {
    super();
    this.state = { id: "", deletedFriend: "" };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .delete(`/api/friends/${this.state.id}`)
      .then((res) => {
        console.log(res);
        alert(`Deleted friend with id of: ${this.state.id}`);
      })
      .catch((err) => console.log(err));
  };

  login = (event) => {
    this.setState({ id: event.target.value });
    console.log(this.state.id);
  };

  render() {
    return (
      <div className="DeleteFriend">
        <h2>Delete Friend 🙁</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.login} placeholder="Enter an id" />
          <button className="deleteBtn">Delete Friend</button>
        </form>
      </div>
    );
  }
}

export default DeleteFriend;
