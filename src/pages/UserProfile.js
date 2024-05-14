import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  return (
  <>
   <header>
    <NavBar/>
   </header>
   <main>
    <h1>User Profile</h1>
   </main>
 </>
  );
};

export default UserProfile