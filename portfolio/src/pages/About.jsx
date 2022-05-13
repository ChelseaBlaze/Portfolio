import { Footer } from "../components";
import  Phone  from "../assets/iphone.svg"
import Closing from "../assets/closing.mp4"
import Blob from "../assets/blob.svg"

const About = () => {

    return (
      <main className = " bg-black w-full min-h-screen ">
        <section className=" about_container flex w-full h-4/5 justify-between align-center self-center pt-12">
          <section className=" w-2/4 relative ml-16 text-black items-center ">
            <img className=" w-10/12 object-cover absolute " src = { Blob } alt = 'text bubble' />
            <div className="absolute w-3/4 z-2 pt-20 pl-20 text-lg">
            <h1 className="text-4xl text-center">About Me</h1>
            <br/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
          </section>
          <section className=" w-2/4 relative pt-20 mr-16 ">
              <img className="object-cover absolute z-10 pr-5" src={Phone} alt="iPhone svg" />
              <video className=" w-3/4 absolute z-11 ml-20 mt-8 " autoPlay muted >
                <source src = {Closing} type="video/mp4" />
              </video>
          </section>
        </section>
      <Footer />
  </main>
      )
  };
  
  export default About;