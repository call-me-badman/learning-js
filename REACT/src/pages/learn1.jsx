import { Link } from "react-router-dom";

const Learn1 = () => {
    return (
        <div className="learn-page">
            <h1>Learning Page</h1>
            <p>Welcome to the learning section. Expand your knowledge here!</p>
            <Link to="/" className="learn-link">
                Back to Home
            </Link>
        </div>
    );
};

export default Learn1;
