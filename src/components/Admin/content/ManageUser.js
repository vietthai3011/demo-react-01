import ModelCreateUser from "./ModelCrateUser";
import "./ManageUser.scss";

const ManageUser = (props) => {
    return (
        <div className="manage-user">
            <div className="manage-user__title">
                <h1 className="title"> Manage User</h1>
            </div>

            <div className="user-content">
                <div>
                    <button>Add new users</button>
                </div>
                <div>table user</div>

                <ModelCreateUser />
            </div>
        </div>
    );
};

export default ManageUser;
