import { createContext, useCallback, useEffect, useState } from "react";

export const useGlobalContext = createContext();

let logoutTimer;
export default function GlobalContext({ children }) {
  const [selected, setSelected] = useState("react");
  const [user, setUser] = useState();
  const [userProfile, setUserProfile]=useState()

  const [token, setToken] = useState();
  const [tokenExpiredTime, setTokenExpiredTime] = useState();
  const Login = useCallback((user, token, expiredToken) => {
    setUser(user);
    setToken(token);
    const tokenExpiredDated =
      expiredToken instanceof Date? expiredToken : new Date(new Date().getTime() + 1000 * 60*60*24);
    setTokenExpiredTime(tokenExpiredDated);
    localStorage.setItem(
      "user",
      JSON.stringify({
        User: user,
        token,
        expiration: tokenExpiredDated.toISOString(),
      })
    );
  }, []);
  const Logout = useCallback(async () => {
    setUser("");
    setToken("");
    setTokenExpiredTime("");
    localStorage.removeItem("user", "");
  }, []);
  const changeSelectOption = (ev) => {
    setSelected(ev.target.value);
  };
  useEffect(() => {
    const userStored = localStorage?.getItem("user");
    let parse;
    if (userStored) {
      parse = JSON.parse(userStored);
      Login(parse.User, parse.token, parse.expiration);
    } else {
      return;
    }
  }, [Login]);

  useEffect(() => {
    if (token && tokenExpiredTime) {
      const remainTime = tokenExpiredTime?.getTime() - new Date().getTime();
      logoutTimer = setTimeout(Logout, remainTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, tokenExpiredTime, Logout]);
  return (
    <useGlobalContext.Provider
      value={{ changeSelectOption, selected, user, token, Login, Logout,userProfile, setUserProfile }}
    >
      {children}
    </useGlobalContext.Provider>
  );
}
