import React, { useState } from "react";
import SideBar from "./SideBar";
import "./admin.scss";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>

            <div className="admin-content">
                <header className="admin-header">
                    <FaBars onClick={() => setCollapsed(!collapsed)} />
                </header>

                <main className="admin-main">
                    <Outlet />
                </main>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};

export default Admin;
