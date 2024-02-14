import Image1 from "../assets/images/image-1.png";
import RegisterInput from "../components/RegisterInput";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../states/users/action";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }));

    navigate("/");
  };
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-4">Sign up to your account</h1>
        <RegisterInput register={onRegister} />
        <p className="text-sm font-light text-gray-700 dark:text-gray-400 mt-3">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login
          </Link>
        </p>
      </div>
      <div className="flex-shrink-0 w-1/2">
        <img
          src={Image1}
          alt="Background"
          className="object-cover w-full h-screen min-h-screen"
        />
      </div>
    </div>
  );
}

export default RegisterPage;
