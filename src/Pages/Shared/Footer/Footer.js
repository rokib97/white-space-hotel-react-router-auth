import React from "react";
import "./Footer.css";

const Footer = () => {
  const getYear = () => {
    const date = new Date();
    const fullYear = date.getFullYear();
    return fullYear;
  };
  return (
    <div className="footer-color text-center mt-5 mb-0">
      <p className="text-center footer">
        Copyright &copy; {getYear()}
        <span>
          <br /> Made with ❤️ by Rokib 🔥
        </span>
      </p>
    </div>
  );
};

export default Footer;
