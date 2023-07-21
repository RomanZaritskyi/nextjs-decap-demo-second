import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";

export default function Home() {
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
