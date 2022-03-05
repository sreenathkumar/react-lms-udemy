import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import database from "../firebase";
import { getDoc, doc } from "firebase/firestore";

function Header(props) {
  const [userExists, setUserExists] = useState("");
  const [cart, setCart] = useState([]);
  const [userID, setUserID] = useState("");

  // //Checking User logged in or not
  // useEffect(() => {
  //   onAuthStateChanged(auth, (u) => {
  //     if (u) {
  //       setUserExists(true);
  //       setUserID(u.uid);
  //     } else {
  //       setUserExists(false);
  //     }
  //   });
  //   return userExists;
  // }, [userExists]);

  // // Getting cart data from database
  // useEffect(() => {
  //   // const receiverData = [];
  //   const getCart = async () => {
  //     const docRef = doc(database, "user-cart", userID);
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       setCart(docSnap.data().item);
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log("No such document!");
  //     }
  //   };
  //   return getCart();
  // }, [userID]);

  if (props.userExists) {
    return (
      <>
        <div id="nav-div">
          <div className="nav-content">
            <div className="three-divs">
              <div className="img-div">
                <Link to="/" className="one">
                  <img
                    src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
                    alt="udemy logo"
                    width="110px"
                    height="31.89px"
                  />
                </Link>
              </div>

              <div className="cate-dropdown ">
                <button className="btn lg-btn cat-btn">
                  <i className="fas fa-th" style={{ color: "#a1a7b3" }}></i>{" "}
                  Categories
                </button>
                <div className="dropdown-content">
                  <ul>
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="three-divs">
              <input
                type="text"
                className="input-area"
                placeholder="Search for Courses"
              />
              <i className="fas fa-search input-logo"></i>
            </div>

            <div className="three-divs">
              <button className="btn lg-btn">Udemy for Business</button>
              <button className="btn lg-btn">Tech Online</button>
              <div id="cart-btn" className="cart-btn" onClick={props.showcart}>
                <button className="btn btn-round">
                  <i
                    className="fas fa-shopping-cart"
                    style={{ color: "gray" }}
                  ></i>
                </button>
                <div className="cart-nmbr">{props.cartItemNumber}</div>
              </div>
              <Link to="/wishlist">
                <button className="btn-wishlist">
                  <i className="far fa-heart" style={{ color: "gray" }}></i>
                </button>
              </Link>

              <Link to="/account" className="user-profile">
                <img
                  className="user-avatar"
                  src="../images/icon.png"
                  alt="user-avatar"
                />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div id="nav-div">
          <div className="nav-content">
            <div className="three-divs">
              <div className="img-div">
                <Link to="/" className="one">
                  <img
                    src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
                    alt="udemy logo"
                    width="110px"
                    height="31.89px"
                  />
                </Link>
              </div>

              <div className="cate-dropdown ">
                <button className="btn lg-btn cat-btn">
                  <i className="fas fa-th" style={{ color: "#a1a7b3" }}></i>{" "}
                  Categories
                </button>
                <div className="dropdown-content">
                  <ul>
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="three-divs">
              <input
                type="text"
                className="input-area"
                placeholder="Search for Courses"
              />
              <i className="fas fa-search input-logo"></i>
            </div>

            <div className="three-divs">
              <button className="btn lg-btn">Udemy for Business</button>
              <button className="btn lg-btn">Tech Online</button>
              <div id="cart-btn" className="cart-btn" onClick={props.showcart}>
                <button className="btn btn-round">
                  <i
                    className="fas fa-shopping-cart"
                    style={{ color: "gray" }}
                  ></i>
                </button>
                <div className="cart-nmbr">{props.cartItemNumber}</div>
              </div>
              <Link to="/login">
                <button className="btn lg-btn lg-btn-o">Log In</button>
              </Link>
              <Link to="/signup">
                <button className="btn  signin-btn">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
