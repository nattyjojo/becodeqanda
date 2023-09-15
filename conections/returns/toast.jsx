import { useNavigate } from "react-router-dom";
  const navigate = useNavigate();
  import toast, { Toaster } from "react-hot-toast";
  const handleNavigation = async (condition) => {
    if (condition === "success") {
      const success = () => toast.success("Registration Successful");
      success();
      setTimeout(() => {
        // Navigate to a different route
        navigate("/login");
      }, 1000);
    } else {
      condition === "error";
      const error = toast.error("User  Name Already Exist");
      error();
      setTimeout(() => {
        // Navigate to a different route
        navigate("/register");
      }, 1000);
    }
  };
