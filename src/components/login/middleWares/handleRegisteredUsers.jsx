import axios from "axios";
import Cookies from "js-cookie";

const validateToken = () => {
  const Login_In_APIURL =
    "https://kahoutserver-production.up.railway.app/api/login";
  const token = Cookies.get("authToken");
  console.log(token);
  if (token) {
    axios
      .get(Login_In_APIURL, {
        token: token,
      })
      .then((response) => {
        console.log(response.data.token);
      })
      .catch((error) => {
        console.error(error);
      });
    return true;
  } else {
    return null;
  }
};

export default validateToken;
