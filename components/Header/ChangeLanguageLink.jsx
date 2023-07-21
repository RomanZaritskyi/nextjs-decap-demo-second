// import LocaleUa from "../../public/img/locale_ua.png";
import LocaleEn from "../../public/img/locale_en.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { enumRoutes } from "@/types/Routes";

const defineCurrentRoute = (pathname) => {
  switch (pathname) {
    case enumRoutes.home:
      return "/";
    case enumRoutes.form:
      return "form";
    case enumRoutes.thankYou:
      return "thankYou";
    default:
      return "/";
  }
};

function ChangeLanguageLink() {
  // const { pathname } = usePathname();
  // const currentLocaleImg = lang === locales[0] ? LocaleEn : LocaleUa;
  // const currentLocalLang = lang === locales[0] ? "EN" : "UA";
  // const nextlanguage = lang === locales[0] ? locales[1] : locales[0];
  const currentLocalLang = "UA";

  return (
    // <Link href={defineCurrentRoute(pathname)} locale={nextlanguage}>
    //   <div className='locale-ico'>
    //     <Image src={currentLocaleImg} alt='locale icon' />
    //     <div className='locale-text'> {currentLocalLang} </div>
    //   </div>
    // </Link>

    <Link href={"/"}>
      <div className='locale-ico'>
        <Image src={LocaleEn} alt='locale icon' />
        <div className='locale-text'> {currentLocalLang} </div>
      </div>
    </Link>
  );
}

export default ChangeLanguageLink;
