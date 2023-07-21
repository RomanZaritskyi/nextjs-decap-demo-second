import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";

import { attributes, react as HomeContent } from "../content/home.md";

export default function Home() {
  console.log(attributes);
  return (
    <>
      <div className='main-wrapper'>
        <main className='main'>
          {/* <HomeContent /> */}
          <Header />
          <Banner />
        </main>
      </div>
    </>
  );
}
