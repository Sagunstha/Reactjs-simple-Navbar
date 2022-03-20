import React from "react";
import { Link } from "react-router-dom";
import './App.css'

function Home() {
    return(
        <Link to="/signup" className="signup_home">
        SignUp
      </Link>
    )
}
export default Home;