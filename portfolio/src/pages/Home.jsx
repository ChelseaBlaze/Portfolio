import mainpic from "../assets/main.png";
import { Footer } from "../components";

const Home = () => {

    return (
    <main className = " bg-black w-full min-h-screen ">
        <section className=" w-full h-4/5 ">
            <img className="w-5/6 pl-10 lg:pl-40 pt-10" src={mainpic} alt="" />
        </section>
        <Footer />
    </main>
      )
  };
  
  export default Home;