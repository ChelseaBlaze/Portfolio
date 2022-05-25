import mainpic from "../assets/main.svg";
import mobilepic from "../assets/mainimgmobile.svg"

const Home = () => {

    return (
    <main className = "bg-black w-full h-screen ">
        <section className="self-center w-full h-4/5 ">
            <img className="hidden md:block md:w-11/12 lg:w-5/6 pl-16 lg:pl-40 pt-32 lg:pt-10 max-w-screen-xl " src={mainpic} alt="" />
            <img className="w-5/6 self-center mx-6 pt-24 md:hidden" src={mobilepic} alt="" />
        </section>
        
    </main>
      )
  };
  
  export default Home;