import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function CopyRight() {
  const year = new Date().getFullYear();

  return (
    <div className="copyright-container">
      <div className="footer-logo item">
        <Link to="#home" className="footer-info">
          Travelling Tales
        </Link>
      </div>
      <div className="item">copyright &copy; {year}.</div>
      <div className="item">All rights are reserved</div>
    </div>
  );
}
