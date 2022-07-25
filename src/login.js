import React, { useState } from "react";
import { auth } from "./firebase";
import "./login.css";

export default function Login(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [Click, setClick] = useState(true);
  const [user, setUser] = useState("");

  function handleClickreg() {
    setClick(!Click);
  }

  const register = async (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      console.log(auth);
      if (auth) {
        {
          sessionStorage.setItem("user",user);
          props.displayLogin();
          alert("Welcome to Ecommerce Hub !!!..");
          props.ProfileChange();
        }
      }
    });
  };
  const login = async (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      if (auth) {
        {
          sessionStorage.setItem("user",user);
          props.displayLogin();
          alert("You have successfully Logged in !!!..");
        }
      }
    })
    .catch((error) => {
        alert(error.message+"Authentication failed");
    });
  };
  return (
    <>
      <div className="logincontainer">
        <div className="login">
          <div className={Click ? "logbox" : "logbox reg1"} id="win">
            <div className="logwin">
              <div className="close" onClick={props.displayLogin}>
                +
              </div>
              <img src="../image/profile.png" alt="profile img" />
              <form className="logform" action="">
                <input
                  type="text"
                  name="userFid"
                  id="fname"
                  placeholder="User Name"
                  value = {user}
                  onChange={(e) => setUser(e.target.value)}
                  required
                />
                <br />
                <input
                  type="text"
                  name="userid"
                  id="userid"
                  placeholder="Email Id"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  type="password"
                  name="pass"
                  id="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                {/* <input
                  className="check"
                  type="checkbox"
                  name="check"
                  id="usercheck"
                />{" "} */}
                {/* <span className="checkspan"> Remember me</span>
                <br /> */}
                <button className="subbtn" type="submit" onClick={login}>
                  LOG IN
                </button>
                <br />
                {/* <span className="fp">
                  <a href="">forgot password ?</a>
                </span> */}
                <button type="button" className="reg" onClick={register}>
                  Sign Up
                </button>
              </form>
            </div>
            <div className="regwin">
              <div className="close" onClick={props.displayLogin}>
                +
              </div>
              <img src="../image/profile.png" alt="profile img" />
              <form className="logform" action="">
                {/* <input
                  type="text"
                  name="userFid"
                  id="fname"
                  placeholder="First Name"
                  required
                /> */}
                <br />
                {/* <input
                  type="text"
                  name="userLid"
                  id="lname"
                  placeholder="Last Name"
                  required
                /> */}
                <br />
                <input
                  type="email"
                  name="userid"
                  id="user_id"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                {/* <input
                  type="password"
                  name="pass"
                  id="confpass"
                  placeholder="Confirm Password"
                  required
                /> */}
                <br />
                <button className="subbtn" onclick={register}>
                  REGISTER
                </button>
                <br />
                <button type="button" className="reg" onClick={handleClickreg}>
                  <i className="fa-solid fa-arrow-left"></i> Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export const login = (props) => {
//   const {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     handleLogin,
//     handleSignUp,
//     hasAccount,
//     setHasAccount,
//     emailError,
//     passwordError,
//   } = props;

//   return <div>login</div>;
// };

// import React from "react";
// import "./login.css";
// export default function Login() {
//   return (
//     <>
//       <div className="login">
//         <div className="logbox" id="win">
//           <div className="logwin">
//             <div className="close">+</div>
//             <img src="../image/profile.png" alt="profile img" />
//             <form className="logform" action="">
//               <input
//                 type="text"
//                 name="userid"
//                 id="userid"
//                 placeholder="User Id"
//                 required
//               />
//               <br />
//               <input
//                 type="password"
//                 name="pass"
//                 id="password"
//                 placeholder="Password"
//                 required
//               />
//               <br />
//               <input
//                 className="check"
//                 type="checkbox"
//                 name="check"
//                 id="usercheck"
//               />{" "}
//               <span className="checkspan"> Remember me</span>
//               <br />
//               <button className="subbtn" type="submit">
//                 LOG IN
//               </button>
//               <br />
//               <span className="fp">
//                 <a href="">forgot password ?</a>
//               </span>
//               <button type="button" className="reg" onclick="openRegister()">
//                 Register <i className="fa-solid fa-arrow-right"></i>
//               </button>
//             </form>
//           </div>
//           <div className="regwin">
//             <div className="close">+</div>
//             <img src="profile.png" alt="profile img" />
//             <form className="logform" action="">
//               <input
//                 type="text"
//                 name="userFid"
//                 id="fname"
//                 placeholder="First Name"
//                 required
//               />
//               <br />
//               <input
//                 type="text"
//                 name="userLid"
//                 id="lname"
//                 placeholder="Last Name"
//                 required
//               />
//               <br />
//               <input
//                 type="email"
//                 name="userid"
//                 id="user_id"
//                 placeholder="Email"
//                 required
//               />
//               <br />
//               <input
//                 type="password"
//                 name="pass"
//                 id="pass"
//                 placeholder="Password"
//                 required
//               />
//               <br />
//               <input
//                 type="password"
//                 name="pass"
//                 id="confpass"
//                 placeholder="Confirm Password"
//                 required
//               />
//               <br />
//               <button className="subbtn" type="submit">
//                 REGISTER
//               </button>
//               <br />
//               <button type="button" className="reg" onclick="openLogin()">
//                 <i className="fa-solid fa-arrow-left"></i> Log In
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }