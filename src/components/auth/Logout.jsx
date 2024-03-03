import { useNavigate } from "react-router-dom";
import { LogoutIcon } from "../../constants/image";

export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className="icon-btn">
      Logout <img src={LogoutIcon} alt="Logout" />
    </button>
  );
}
