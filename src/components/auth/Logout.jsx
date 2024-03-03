import { useNavigate } from "react-router-dom";
import { LogoutIcon } from "../../constants/image";
import { useAuth } from "../../hooks";

export default function Logout() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuth({});
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className="icon-btn">
      <span className="mx-2 px-3 py-1">Logout</span>{" "}
      <img src={LogoutIcon} alt="Logout" />
    </button>
  );
}
