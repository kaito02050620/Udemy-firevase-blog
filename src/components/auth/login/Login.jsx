import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

function Login({ setIsAuth }) {
  const navigate = useNavigate();

  //googleログイン処理
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <p className="login_text">ログインしてみよう！</p>
      <div className="login_button">
        <button onClick={loginInWithGoogle}>
          <FcGoogle />
          <p>Googleでログイン</p>
        </button>
      </div>
    </div>
  );
}

export default Login;
