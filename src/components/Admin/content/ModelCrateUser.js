import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModelCreateUser = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} size="lg" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">
                                Email
                            </label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input type="password" className="form-control" id="password" />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="=username" className="form-label">
                                Username
                            </label>
                            <input type="text" className="form-control" id="=username" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">
                                Role
                            </label>
                            <select id="inputState" className="form-select">
                                <option defaultValue value={"user"}>
                                    User
                                </option>
                                <option value={"admin"}>Admin</option>
                            </select>
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="inputState" className="form-label">
                                Image
                            </label>
                            <input type="file" className="form-control" id="inputState" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModelCreateUser;
