const Home = () => {
  const authToken = true;

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="overlay">
      <div className="home">
        <h1>
          Welcome to our Tinder app! We're glad you're here. We hope you'll find
          someone special to connect with. Our app is designed to make it easy
          for you to discover new people who share your interests and values.
          Just swipe right to like someone, and swipe left to pass. You never
          know who you might find!
        </h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Sign out" : "Sign up"}
        </button>
      </div>
    </div>
  );
};

export default Home;
