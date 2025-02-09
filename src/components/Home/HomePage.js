import React from "react";
import videoHomepage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
    console.log(videoHomepage);

    return (
        <div className="home-page">
            <video width="500" height="500" autoPlay muted loop>
                <source src={videoHomepage} type="video/mp4" />
            </video>
        </div>
    );
};

export default HomePage;
