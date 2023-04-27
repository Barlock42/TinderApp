import React from "react";
import { useState } from "react";
import AuthModal from "../components/AuthModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
    setShowModal(true);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="home">
          <h1>Welcome to our Tinder app! </h1>{" "}
          <h1>
            We're glad you're here. We hope you'll find someone special to
            connect with. Our app is designed to make it easy for you to
            discover new people who share your interests and values. Just swipe
            right to like someone, and swipe left to pass. You never know who
            you might find!
          </h1>
          <button className="primary-button" onClick={handleClick}>
            {authToken ? "Sign out" : "Sign up"}
          </button> 

          {showModal && (<AuthModal setShowModal={setShowModal}/>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
