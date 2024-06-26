import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("UserClass Constructor: ", props);
  }
  render() {
    const { name, location } = this.props;

    return (
      <div className="user-card">
        <h2>Name : {this.props.name}</h2>
        <h2>Location : {this.props.location}</h2>
      </div>
    );
  }
}

export default UserClass;
