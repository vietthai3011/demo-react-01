import React, { useState } from "react";

import style from "./display-info.module.scss";

// class DisplayInfo extends React.Component {
//     constructor(props) {
//         console.log("constructor");

//         super(props);
//         this.state = {
//             isShow: true,
//         };
//     }

//     renderListUser(listUser, deleteUser) {
//         return listUser.map((user) => {
//             return (
//                 <div key={user.id} className={+user.age > 18 ? style.blue : style.red}>
//                     <p>My name is {user.name}</p>
//                     <p>My age is {user.age}</p>
//                     <button onClick={() => deleteUser(user.id)}>X</button>
//                     <hr />
//                 </div>
//             );
//         });
//     }
//     render() {
//         console.log("render");
//         const { listUser, deleteUser } = this.props;

//         return (
//             <div className={style["display-info-container"]}>
//                 <h1>DisplayInfo</h1>
//                 <img src={logo} className={style.logo} alt="logo" />
//                 <button onClick={() => this.handleShowHide()}>
//                     {this.state.isShow ? "Hide" : "Show"} list user
//                 </button>

//                 {this.state.isShow && this.renderListUser(listUser, deleteUser)}
//             </div>
//         );
//     }
// }

const DisplayInfo = (props) => {
    const { listUser, deleteUser } = props;

    // Tên biến state, hàm update state, giá trị mặc định
    const [isShow, setIsShow] = useState(true);

    const handleShowHide = () => {
        setIsShow(!isShow);
    };

    function renderListUser(listUser, deleteUser) {
        return listUser.map((user) => {
            return (
                <div key={user.id} className={+user.age > 18 ? style.blue : style.red}>
                    <p>My name is {user.name}</p>
                    <p>My age is {user.age}</p>
                    <button onClick={() => deleteUser(user.id)}>X</button>
                    <hr />
                </div>
            );
        });
    }

    return (
        <div className={style["display-info-container"]}>
            <h1>DisplayInfo</h1>

            {/* <img src={logo} className={style.logo} alt="logo" /> */}

            <button onClick={() => handleShowHide()}>{isShow ? "Hide" : "Show"} list user</button>

            {isShow && renderListUser(listUser, deleteUser)}
        </div>
    );
};

export default DisplayInfo;
