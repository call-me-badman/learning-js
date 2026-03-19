import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="main-page">
            <h1>Welcome to the Admins web app</h1>
            <Link to="/learn" className="home-link">
                Go to Learn Page
            </Link>
        </div>
    );
};

export default Home;