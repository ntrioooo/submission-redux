import Image1 from "../assets/images/image-1.png";
import LoginInput from "../components/LoginInput";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncSetAuthUser } from "../states/authUser/action";

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 w-1/2">
        <img
          src={Image1}
          alt="Background"
          className="object-cover w-full h-screen min-h-screen"
        />
      </div>

      <div className="flex-shrink-0 w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-4">Sign in to your account</h1>
        <LoginInput login={onLogin} />
        <p className="text-sm font-light text-gray-700 dark:text-gray-400 mt-3">
          Don’t have an account yet?{" "}
          <Link
            to="/register"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
