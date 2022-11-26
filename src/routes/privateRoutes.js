import { Navigate } from "react-router-dom";
import { Context } from "../context/Context";

const PrivateRoute = ({ children }) => {
  const { user, loader } = Context();
  if (loader) {
    return (
      <section className="flex items-center justify-center my-20">
        <div className="spinner">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-slate-500"></div>
        </div>
      </section>
    );
  } else {
    return user ? children : <Navigate to="/login" />;
  }
};

export default PrivateRoute;
