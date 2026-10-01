import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props)
        console.log(props);

    }
    render = () => {
        return <div className="user-card">
            <h1>Name: {this.props.name}</h1>
            <h2>Location: {this.props.location}</h2>
            <h3>Postion: Technical Project Manager</h3>
        </div>
    }
}
export default UserClass;
