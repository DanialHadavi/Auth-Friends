import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import ClipLoader from "react-spinners/ClipLoader";

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = { friends: [], isLoading: false };
  }

  componentDidMount() {
    this.getFriendsList();
  }

  getFriendsList = () => {
    this.setState({ ...this.state, isLoading: true });
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log("Successfully got friends", res);
        this.setState({ friends: res.data });
        this.setState({ ...this.state, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ ...this.state, isLoading: false });
      });
  };

  render() {
    return (
      <div className="FriendsList">
        <h2>👥 Friend List 👥</h2>
        {this.state.isLoading && (
          <div>
            <ClipLoader
              size={150}
              color={"#123abc"}
              loading={this.state.loading}
            />
          </div>
        )}
        <div className="ListOfFriends">
          {this.state.friends.map((friend) => (
            <div className="friends" key={friend.id}>
              <h4>{`ID: ${friend.id}`}</h4>
              <h4>{`${friend.name}, ${friend.age} years old`}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FriendsList;
