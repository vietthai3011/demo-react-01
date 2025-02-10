import ModelCreateUser from "./ModelCrateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import { getAllUser } from "../../../service/apiService";
import ModelUpdateUser from "./ModelUpdateUser";

const ManageUser = (props) => {
    const [listUser, setListUser] = useState([]);

    const [showModelCreateUser, setShowModelCreateUser] = useState(false);
    const [showModelUpdateUser, setShowModelUpdateUser] = useState(false);

    const [dataUpdate, setDataUpdate] = useState({});

    const handleClickUpdateUser = (user) => {
        setShowModelUpdateUser(true);
        setDataUpdate(user);
    }

    async function fetchListUser() {
        try {
            const resData = await getAllUser();

            if (resData.DT)
                setListUser(resData.DT);

        } catch (error) {
            console.error("Lỗi khi fetch dữ liệu:", error);
        }
    }

    useEffect(() => {
        fetchListUser();
    }, []);

    return (
        <div className="manage-user">
            <div className="manage-user__title">
                <h1 className="title"> Manage User</h1>
            </div>

            <div className="user-content">
                <div>
                    <button
                        className="btn btn-primary my-3 d-flex align-items-center"
                        onClick={() => setShowModelCreateUser(true)}
                    >
                        <FcPlus /> <span className="ms-2">Add new users</span>
                    </button>
                </div>
                <div className="table-user mt-5">
                    <TableUser listUser={listUser} handleClickUpdateUser={handleClickUpdateUser} />
                </div>

                <ModelCreateUser show={showModelCreateUser} setShow={setShowModelCreateUser} fetchListUser={fetchListUser} />
                <ModelUpdateUser show={showModelUpdateUser} setShow={setShowModelUpdateUser} dataUpdate={dataUpdate} />
            </div>
        </div>
    );
};

export default ManageUser;
