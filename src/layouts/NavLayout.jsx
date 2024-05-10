import { Outlet, useNavigation } from "react-router-dom";
import { NavMain } from "../components/Navbar/NavMain";
import "../styles/main.css";
export function NavLayout() {
  const { state } = useNavigation();

  return (
    <div className="main-container">
      <NavMain />
      {state === "loading" ? (
        "loading..."
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </div>
  );
}
