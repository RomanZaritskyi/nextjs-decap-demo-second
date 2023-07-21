"use client";
import Link from "next/link";
import React from "react";

const SmoothScrollLink = ({ children, ...props }) => {
  const handleScroll = (e) => {
    e.preventDefault();

    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    const topOfelement = elem?.getBoundingClientRect().top;

    // later need to find better solution
    const navBar = document.querySelector(".about-navbar");

    let gotoElem;
    if (navBar) {
      gotoElem = topOfelement + scrollY - navBar.offsetHeight;
    } else {
      gotoElem = topOfelement + scrollY;
    }

    window.scrollTo({
      top: gotoElem,
      behavior: "smooth",
    });
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};
export default SmoothScrollLink;
