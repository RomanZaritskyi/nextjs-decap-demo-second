"use client";
import Button from "../common/Button/Button";
import Logo from "../common/Logo/Logo";

import ChangeLanguageLink from "./ChangeLanguageLink";

import Link from "next/link";

import { useRouter, usePathname } from "next/navigation";
import { enumRoutes } from "@/types/Routes";
import { useState, useEffect } from "react";

function Header() {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [isOnPositon, setIsOnPosition] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  const pathname = usePathname();

  // const { pathname } = router;

  const homePageReqExp = /^\/$/gm;

  const isHomePage = homePageReqExp.test(pathname);

  const isLocaleRequired = isHomePage || pathname.includes("form");

  const isFormPage = pathname.includes("form");

  function handleToggle() {
    setIsActive((prevState) => !prevState);

    if (!isActive) document.body.classList.add("_lock");
    if (isActive) document.body.classList.remove("_lock");
  }

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      if (isHomePage) {
        const scrollY = window.scrollY;
        const direction = scrollY > lastScrollY ? "down" : "up";
        const mainAcceleratorFunctionsElement = document.getElementById("accelerator");

        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;

        if (mainAcceleratorFunctionsElement) {
          if (scrollY >= mainAcceleratorFunctionsElement.offsetTop) {
            setIsOnPosition(true);
          } else {
            setIsOnPosition(false);
          }
        }
      }
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection, isHomePage]);

  return (
    <header
      className={`header 
          ${scrollDirection === "down" ? "_hide" : "_show"} 
          ${isHomePage && isOnPositon ? "_active" : ""} 
          ${!isHomePage ? "_static" : ""}`}
    >
      <Logo />
      <div className='header-navigation'>
        <div className={`header-navigation__body ${isActive ? "_active" : ""}`}>
          {(isHomePage && (
            <Link
              href={enumRoutes.aboutAccelerator}
              className='header-navigation__link'
              onClick={handleToggle}
            >
              Про акселератор
            </Link>
          )) || (
            <Link href={enumRoutes.home} className='header-navigation__link' onClick={handleToggle}>
              Головна
            </Link>
          )}

          {!isFormPage && (
            <div className='button-wrapper' onClick={handleToggle}>
              <Button text={"Звернутись"} />
            </div>
          )}
        </div>

        {isLocaleRequired && (
          <div className='locale'>
            <ChangeLanguageLink />
          </div>
        )}
        <div className='burger-icon' onClick={handleToggle}>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
