import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo ">
        OurBlog
      </Link>
      <nav>
        {username && (
          <>
            <button>
              {" "}
              <Link to="/create" className="bg-green-300">
                Create new post
              </Link>
            </button>

            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <button
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
                backgroundColor: "#555",
                border: "0",
                borderRadius: "5px",
                padding: "7px 15px",
                marginRight: "10px",
              }}
            >
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Login
              </Link>
            </button>
            <button
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
                backgroundColor: "#555",
                border: "0",
                borderRadius: "5px",
                padding: "7px 15px",
              }}
            >
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Register
              </Link>
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
