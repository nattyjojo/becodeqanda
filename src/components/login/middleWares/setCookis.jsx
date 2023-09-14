import Cookies from "js-cookie";

const setCookies = (token) => {
  const authToken = token;
  return Cookies.set("authToken", authToken, {
    sameSite: "none",
    secure: true,
  });
};

export default setCookies;

// const authToken = Cookies.get("authToken");
// if (authToken) {
//   // The cookie exists
// } else {
//   // The cookie does not exist
// }
