import "./App.scss";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";

const App = () => {
    return (
        <div className="container">
            <div className="header-container">
                <Header />
            </div>
            <div className="main-container">
                <div className="sidenav-container"></div>
                <div className="app-container">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default App;
