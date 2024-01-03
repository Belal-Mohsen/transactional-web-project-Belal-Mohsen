import React, { useState, useEffect } from "react";
import Notification from "./Notification";
import { FaFacebook } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';
import { auth, provider, facebookProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithRedirect, getRedirectResult } from "firebase/auth";

const LogIn = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [notification, setNotification] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        console.log('Login successful:', userCredential);
        dispatch(loginSuccess(userCredential.user)); // Dispatch action with user data
        navigate('/');
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        setNotification("Login failed. Please try again.");
        dispatch(loginFailure());
      });
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then(async (result) => {
        if (result) {
          // The signed-in user info.
          const user = result.user;
          dispatch(loginSuccess(user)); // Dispatch action with user data

<<<<<<< Updated upstream
          try {
            const response = await fetch('/user/register', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: user.email,
                uid: user.uid,
                fullName: user.displayName,
                photoURL: user.photoURL,
                providerId: user.providerData[0].providerId
              })
            });
            const data = await response.json();
            console.log(data.message);
          } catch (error) {
            console.error('Error in saving new user:', error);
          }

          navigate('/'); // Redirect to home page or dashboard after successful login
        }
      })
      .catch((error) => {
        console.error('Sign-in error:', error);
        dispatch(loginFailure()); // Dispatch failure action
        setNotification("Login failed. Please try again.");

      });
  }, [dispatch, navigate]);

  const googleSignIn = () => {
    try {
      signInWithRedirect(auth, provider);
    } catch (error) {
      console.error('Google sign-in error:', error);
      setNotification('Google sign-in failed. Please try again.');
      dispatch(loginFailure());
    }
  };

  const facebookSignIn = () => {
    try {
      signInWithRedirect(auth, facebookProvider);
    } catch (error) {
      console.error('Facebook sign-in error:', error);
      setNotification('Facebook sign-in failed. Please try again.');
      dispatch(loginFailure());
    }
  };

=======
const googleSignIn = async () => {
  try {
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.error('Google sign-in error:', error);
    setNotification('Google sign-in failed. Please try again.');
    dispatch(loginFailure());
  }
};

const facebookSignIn = async () => {
  try {
    await signInWithRedirect(auth, facebookProvider);
  } catch (error) {
    console.error('Facebook sign-in error:', error);
    setNotification('Facebook sign-in failed. Please try again.');
    dispatch(loginFailure());
  }
};
>>>>>>> Stashed changes


  return (
    <div className="flex flex-col items-center w-full px-4 md:px-20 py-10">
      <div className="w-full max-w-md bg-[#f7f6f2] rounded border shadow-md p-6">
        <h2 className="text-2xl font-medium text-[#767676] mb-4 text-center">
          LOG IN
        </h2>
        <form className="space-y-4" onSubmit={loginUser}>
          <input
            type="text"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
          <div className="flex items-center gap-2 text-[#767676]">
            <input type="checkbox" />
            <span>
              Remember Me{" "}
            </span>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-[#c0876a] text-white rounded py-2 mt-4"
            >
              LOG IN
            </button>
          </div>
          <div className="flex justify-between">
            <p className="text-[#c0876a] text-[13px]">
              <a href="http://localhost:3000/signup" className="underline">Don’t have an account?</a>
            </p>
            <p className="text-[#c0876a] text-[13px]">
              <a href="/forgotpassword" className="underline">Forgot password?</a>
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-[#c0876a] text-[13px]">OR</p>
          </div>
          <div>
            <button
              type="submit"
              className=" flex justify-center w-full bg-[#ffffff] text-[#767676] rounded border py-2 mt-4"
              value="Sign In"
              onClick={googleSignIn}
            >
              <img
                className="relative mr-4"
                alt="Google Logo"
                src="./images/Google.svg" />
              LOG IN WITH GOOGLE
            </button>
          </div>
          <div>
            <button
              type="submit"
              className=" flex justify-center w-full bg-[#ffffff] text-[#767676] rounded border py-2 mt-4"
              value="Sign In"
              onClick={facebookSignIn}
            >
              <FaFacebook size={30} color="blue" style={{ marginRight: "15px", marginLeft: "20px" }} />
              LOG IN WITH FACEBOOK
            </button>
          </div>
        </form>
      </div>
      <Notification message={notification} onClose={() => setNotification('')} />
    </div>
  );
};

export default LogIn;