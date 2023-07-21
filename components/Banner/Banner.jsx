import Button from "../common/Button/Button";
import BGLogo from "../../public/img/main_logo.png";
import Image from "next/image";

function Banner() {
  return (
    <section className='banner'>
      <div className='banner-slider'></div>
      <div className='top-layer'>
        <div className='top-layer-bg-logo'>
          <Image src={BGLogo} alt='backgroung logo' />
        </div>
        <h1 className='top-layer-title'>ВПРОВАДЖУЄМО НОВІ РІШЕННЯ ПЕРЕМОГИ</h1>
        <p className='top-layer-description'>ПРИСКОРЮЄМО РОБОТУ СИСТЕМИ МІНОБОРОНИ</p>
        <div className='top-layer-button'>
          <Button text={"Звернутись"} />
        </div>
      </div>
    </section>
  );
}

export default Banner;
