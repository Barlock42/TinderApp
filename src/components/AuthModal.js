import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthModal = ({ setShowModal }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  let navigate = useNavigate();

  console.log(email, password);

  const handleClick = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        ⓧ
      </div>
      <p>
        By clicking Log In, you agree to our terms. Learn how we process your
        data in our Privacy Policy and Cookie Policy.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="secondary-button" type="submit" />
      </form>

      <hr />
      <h2>GET THE APP</h2>
    </div>
  );
};
export default AuthModal;
