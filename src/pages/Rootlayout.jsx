import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import styles from "./Rootlayout.module.css";
import LoadingSpinner from "../assets/LoadingSpinner.svg";

const Rootlayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <nav className={`container ${styles.nav}`}>
        <Link to="/">
          <h1>Movie Search</h1>
        </Link>
      </nav>
      {navigation.state === "loading" ? (
        <img src={LoadingSpinner} alt="Loading.." className="loadingSpinner" />
      ) : (
        <Outlet></Outlet>
      )}
    </>
  );
};

export default Rootlayout;
