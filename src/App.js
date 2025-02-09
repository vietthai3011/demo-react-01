import "./App.scss";
import Header from "./components/Header/Header";
import { Link } from "react-router";

const App = () => {
    return (
        <div className="container">
            <Header />
            <div>
                Test link
                <div>
                    <button>
                        <Link to="/users">Go to user page</Link>
                    </button>
                    <button>
                        <Link to="/admins">Go to admin page</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
