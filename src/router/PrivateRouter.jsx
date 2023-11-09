import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const PrivateRouter = ({ children }) => {
  const { loading, user } = useAuth();

  if (loading) {
    return <Loading/>;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      to="/login"
      state={location.pathname}
    />
  );
};

PrivateRouter.propTypes = {
  children: PropTypes.node,
};

export default PrivateRouter;
