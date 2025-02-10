const TableUser = (props) => {
    const { listUser, handleClickUpdateUser } = props;


    const renderListUser = () => {
        if (listUser.length === 0) {
            return (
                <tr>
                    <td colSpan="4">Not found data</td>
                </tr>
            );
        }
        return listUser.map((user, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{user.id}</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                        <button className="btn btn-secondary">View</button>
                        <button className="btn btn-warning mx-3" onClick={() => handleClickUpdateUser(user)}>Update</button>
                        <button className="btn btn-danger">view</button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>{renderListUser()}</tbody>
            </table>
        </>
    );
};

export default TableUser;
