import React, { useEffect } from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {
//     state = {
//         listUser: [
//             { id: 1, name: "Viet Thai", age: "22" },
//             { id: 2, name: "Ngo", age: "30" },
//             { id: 3, name: "Thanh", age: "45" },
//         ],
//     };

//     addUser = (user) => {
//         this.setState({
//             listUser: [user, ...this.state.listUser],
//         });
//     };

//     deleteUser = (id) => {
//         this.setState({
//             listUser: [...this.state.listUser.filter((user) => user.id !== id)],
//         });
//     };
//     render() {
//         return (
//             <>
//                 <UserInfo addUser={this.addUser} />
//                 <DisplayInfo listUser={this.state.listUser} deleteUser={this.deleteUser} />
//             </>
//         );
//     }
// }

const MyComponent = (props) => {
    const [listUser, setListUser] = React.useState([
        { id: 1, name: "Viet Thai", age: "22" },
        { id: 2, name: "Ngo", age: "30" },
        { id: 3, name: "Thanh", age: "45" },
    ]);

    const addUser = (user) => {
        setListUser([user, ...listUser]);
    };

    useEffect(() => {
        if (listUser.length === 0) alert("List user is empty");

        setTimeout(() => {
            document.title = "Hello";
        }, 3000);
        console.log("useEffect");
    }, [listUser]);

    const deleteUser = (id) => {
        setListUser([...listUser.filter((user) => user.id !== id)]);
    };
    return (
        <>
            <UserInfo addUser={addUser} />
            <DisplayInfo listUser={listUser} deleteUser={deleteUser} />
        </>
    );
};

export default MyComponent;
