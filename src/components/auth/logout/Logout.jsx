import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import "./Logout.css";

function Logout({ setIsAuth }) {
  const navigate = useNavigate();

  //googleログイン処理
  const logoutGoogle = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("isAuth");
        setIsAuth(false);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p className="logout_text">本当にログアウトしますか？</p>
      <div className="logout_button">
        <button onClick={logoutGoogle}>
          <p>ログアウト</p>
        </button>
      </div>
    </div>
  );
}

export default Logout;
