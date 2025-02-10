import React from "react";
import videoHomepage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
    console.log(videoHomepage);

    return (
        <div className="home-page row mt-5">
            <section className="home-page__content col-6 ">
                <p className="home-page__category">FORMS, QUIZZES, AND SURVEY</p>
                <h1 className="home-page__title">Get up to 3.5x more data about them</h1>
                <p className="home-page__description">
                    When your forms break the norm, more people fill them out. Think branded
                    designs, video content, and relevant follow-up questions.
                </p>
                <button className="home-page__content-button btn btn-info fs-5 fw-semibold p-2 px-4">
                    Sign up
                </button>
            </section>

            <div className="col-6">
                <video width="530" autoPlay muted loop>
                    <source src={videoHomepage} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default HomePage;
