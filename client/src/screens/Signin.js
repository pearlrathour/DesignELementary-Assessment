import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useUserStore } from '../store.js';

export default function Signin() {
    let navigate = useNavigate();
    const {setUser} = useUserStore();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const response = await fetch('http://localhost:4000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          email: e.target.elements.email.value,
          password: e.target.elements.password.value })
      });
      const j = await response.json();
      if (j.success) {
        setUser(j.id, j.username, j.email);
        navigate("/home");
      }
      else {
        alert(j.message);
      }
    }
  return (
    <section className="bg-slate-100 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-10 text-4xl font-bold text-sky-800 tracking-tight">
          {/* <img className="w-10 h-10 mr-2" src={logo} alt="" /> */}
          Reminder App
        </div>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-white">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center font-semibold text-gray-900 md:text-2xl dark:text-gray-900">
              Sign In
            </h1>
            <form className="space-y-4 md:space-y-6" action="/user/signin" method="post" onSubmit={handleSubmit}>
              <div>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-md block w-full p-2.5 dark:bg-transparent dark:border-gray-300 dark:placeholder-gray-500 focus:placeholder-gray-400 focus:border-none" placeholder="Email address" required/>
              </div>
              <div>
                <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-zinc-100 text-gray-900 sm:text-base rounded-md block w-full p-2.5 dark:bg-transparent dark:border-gray-300 dark:placeholder-gray-500 focus:placeholder-gray-400" required/>
              </div>
              <button type="submit" className="w-full text-white  bg-sky-700 hover:bg-sky-800 font-medium rounded-md text-sm px-5 py-2.5 text-center">
                Log in
              </button>
              <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                New to Reminder App?
                <Link to="/" className="font-medium text-sky-700 hover:underline cursor-pointer ml-2">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};