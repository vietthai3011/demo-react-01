import React, { useState } from "react";
import SideBar from "./SideBar";
import "./admin.scss";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router";

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>

            <div className="admin-content">
                <header className="admin-header">sdaadas</header>

                <FaBars onClick={() => setCollapsed(!collapsed)} />

                <main className="admin-main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Admin;
