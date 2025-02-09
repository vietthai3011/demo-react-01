import React, { useState } from "react";
import SideBar from "./SideBar";
import "./admin.scss";
import { FaHeart, FaBars } from "react-icons/fa";

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>

            <div className="admin-content">
                <FaBars onClick={() => setCollapsed(!collapsed)} />
            </div>
        </div>
    );
};

export default Admin;
