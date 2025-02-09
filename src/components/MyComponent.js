import React from "react";

class MyComponent extends React.Component {
    // jsx
    state = {
        name: "Viet Thai",
        address: "HaiDuong",
        age: "22",
    };

    handleOnClick(event) {
        console.log("My name is " + this.state.name);
    }

    handleOnMouseOver(event) {
        console.log(event.pageX);
    }
    render() {
        return (
            <>
                My name is {this.state.name} and i am from {this.state.address}
                <button onClick={(event) => this.handleOnClick(event)}>Click me!</button>
                <button onMouseOver={(event) => this.handleOnMouseOver(event)}>Hover Me</button>
            </>
        );
    }
}

export default MyComponent;
