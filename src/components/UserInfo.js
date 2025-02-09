import React, { useState } from "react";

const UserInfo = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const { addUser } = props;

    const handleSubmit = (event) => {
        // Ngăn chặn reload
        event.preventDefault();
    };

    const handleOnChangeName = (event) => {
        setName(event.target.value);
    };

    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    };

    const handleOnClick = () => {
        addUser({ name, age, id: Math.floor(Math.random() * 1000) + "-random" });
    };

    return (
        <>
            My name is {name} and i am age {age}
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Your name: </label>
                <input type="text" value={name} onChange={(event) => handleOnChangeName(event)} />

                <label>Your age: </label>
                <input type="text" value={age} onChange={(event) => handleOnChangeAge(event)} />
                <button onClick={(event) => handleOnClick(event)}>Click me!</button>
            </form>
        </>
    );
};

export default UserInfo;
