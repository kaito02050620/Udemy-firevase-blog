import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Logout({ setIsAuth }) {
  const navigate = useNavigate();

  //googleログイン処理
  const logoutGoogle = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("isAuth");
        setIsAuth(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p>本当にログアウトしますか？</p>
      <button onClick={logoutGoogle}>ログアウト</button>
    </div>
  );
}

export default Logout;
