import {
	Navigate,
	Outlet,
	useLocation,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from "../redux/types";



const PrivateRoute: React.FC = () => {
    const location = useLocation();

    const isAuthenticated = useSelector((state: RootState) => state.users.loggedInUser);
  
    if (!isAuthenticated) {
		return <Navigate to="/" state={{ from: location.pathname }} replace />;
	}

	return <Outlet />;
};
  
export default PrivateRoute;
