import React from "react";

class MyComponent extends React.Component {
    // jsx
    state = {
        name: "Viet Thai",
        address: "HaiDuong",
        age: "22",
    };
    render() {
        return (
            <div>
                My name is {this.state.name} and i am from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;
