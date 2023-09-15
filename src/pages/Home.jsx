import mainpic from "../assets/main.png";
import mobilepic from "../assets/mobilepic.png"

const Home = () => {

    return (
    <main className = "bg-black w-full min-h-screen flex lg:m-0 ">
        <section className=" self-center w-screen">
            <img className="hidden md:block md:w-11/12 lg:flex lg:w-5/6 pl-16 lg:pl-40 lg:m-0    " src={mainpic} alt="" />
            <img className="w-5/6 self-center mx-6  md:hidden" src={mobilepic} alt="" />
        </section>
        
    </main>
      )
  };
  
  export default Home;