import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { postCreateNewUser } from "../../../service/apiService";

const ModelCreateUser = (props) => {
    const { show, setShow, fetchListUser } = props;

    const handleClose = () => {
        setShow(false);

        setEmail("");
        setPassword("");
        setPreview("");
        setUsername("");
        setImage("");
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [preview, setPreview] = useState("");

    const showInput = () => {
        document.getElementById("upload-image").click();
    };

    const handleUpload = (e) => {
        if (e.target.files && e.target.files[0] && e.target.files[0].type.includes("image")) {
            setPreview(URL.createObjectURL(e.target.files[0]));
            setImage(e.target.files[0]);
        }
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmit = async () => {
        // call api
        const isValidateEmail = validateEmail(email);

        if (!isValidateEmail) {
            toast.error("Email is not valid");
            return;
        }

        if (!password) {
            toast.error("Password is not valid");
            return;
        }

        let resData = await postCreateNewUser(email, password, username, role, image);

        console.log(resData);

        if (resData && resData.EC === 0) {
            toast.success(resData.EM);
            handleClose();
            await fetchListUser();
        }

        if (resData.EC === 1) {
            toast.error(resData.EM);
        }
    };

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className="Model-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="=username" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="=username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">
                                Role
                            </label>
                            <select
                                id="inputState"
                                className="form-select"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option defaultValue value={"USER"}>
                                    USER
                                </option>
                                <option value={"ADMIN"}>ADMIN</option>
                            </select>
                        </div>

                        <div className="col-md-12">
                            <label className="form-label label-upload" htmlFor="upload-image">
                                <FcPlus /> Upload file image
                            </label>
                            <input
                                type="file"
                                hidden
                                id="upload-image"
                                onChange={(event) => handleUpload(event)}
                            />
                        </div>

                        <div className="col-md-12 img-preview" onClick={() => showInput()}>
                            {preview ? <img src={preview} /> : <span>Preview image</span>}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModelCreateUser;
