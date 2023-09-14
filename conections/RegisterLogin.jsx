import axios from "axios";
import handleN

const SING_UP_APIURL =
  "https://kahoutserver-production.up.railway.app/api/sign_up";
const validate = (userName, password) => {
  axios
    .post(SING_UP_APIURL, {
      username: userName,
      password: password,
    })
    .then((response) => {
      [
        response.data.message === "User registered"
          ? handleNavigation("success")
          : handleNavigation("error"),
      ];
    })
    .catch((error) => {
      console.error(error);
    });
};
export default validate;
