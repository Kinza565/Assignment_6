import React from "react";
import Navbar from "../navbar/page";


const Contact:React.FC =() =>{
  return (
    <>
      <Navbar />

      <main className="contact">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out via email :<strong>kinzashad3@gmail.com</strong>
        </p>
      </main>
    </>
  );
}
export default Contact;