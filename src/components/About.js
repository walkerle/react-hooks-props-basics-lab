import React from "react";
import Links from "./Links";
// import user from "../data/user";

// function bio() {
//   if(user.bio !== "") {
//     return (
//       <p>{user.bio}</p>
//     )
//   }
// }

function About(user) {
  // console.log(user.bio);
  return (
    <div id="about">
      {/* {console.log(user)} */}
      <h2>About Me</h2>
      {/* <p>{user.bio}</p> */}
      {/* {bio()} */}
      {(user.bio && user.bio.length > 1 ? <p>{user.bio}</p> : null)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default About;
