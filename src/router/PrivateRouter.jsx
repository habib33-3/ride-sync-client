import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import Skeleton from "react-loading-skeleton";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { loading, user } = useAuth();

  if (loading) {
    return <Skeleton count={5} />;
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
