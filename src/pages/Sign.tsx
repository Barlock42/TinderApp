import React from "react";

const Sign = () => {
  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="home">
      <h1> Swipe Right®</h1>
      <button className="primary-button" onClick={handleClick }>
        {authToken ? "SignOut" : "SignUp"}
      </button>
    </div>
  );
};

export default Sign;
