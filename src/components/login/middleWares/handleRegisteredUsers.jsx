import axios from "axios";

const validateToken = async (token, setUserIsValid, navigate) => {
  const Login_In_APIURL =
    "https://kahoutserver-production.up.railway.app/api/login";
  if (token !== undefined) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const get = await axios.get(Login_In_APIURL, {
        headers: headers,
      });
      await get.response;
      const status = get.status;

      setUserIsValid(status);
    } catch (err) {
      navigate("/login");
    }
  } else {
    return false;
  }
};

export default validateToken;
