import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSquarePen,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar({ isAuth }) {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      {isAuth ? (
        <>
          <Link to="/createpost">
            <FontAwesomeIcon icon={faSquarePen} />
            記事投稿
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={faRightFromBracket} />
            ログアウト
          </Link>
        </>
      ) : (
        <Link to="/login">
          <FontAwesomeIcon icon={faRightToBracket} />
          ログイン
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
