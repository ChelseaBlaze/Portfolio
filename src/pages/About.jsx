import  Phone  from "../assets/iphone.svg"
import Closing from "../assets/closing.mp4"
import Hello from "../assets/hello.png"


const About = () => {

    return (
      <main className = " bg-black w-full min-h-screen ">
        <section className=" about_container flex w-full h-4/5 justify-center align-center self-center flex-wrap lg:flex-nowrap pt-4 lg:pt-8 ">
          <section className="about flex flex-col w-full  lg:w-2/4 justify-start items-center mx-61 text-black text-xl bg-main2 rounded-3xl mx-3 " >
            <h1 className="text-4xl pt-6 text-center font-semibold">About Me</h1>
            <img className=" w-72 md:w-44 md:absolute md:top-52 md:left-12 lg:top-56 lg:left-24 pt-5 md:pt-0" src={Hello} />
            <div className ="md:flex-col pt-6 px-4 md:px-4 pb-7 w-full space-y-7 md:space-y-0 font-body">
              <div className="md:flex items-center w-full md:space-x-5 space-y-7 md:space-y-0 ">
                <p className=" bg-white md:bg-main1 rounded-3xl p-3 md:p-4 md:pt-60 ">Hi! My name is Chelsea and I am currently wrapping up my studies in frontend development at Hyper Island in Stockholm. 
                </p>
                <p className="bg-main1 md:bg-white rounded-3xl p-3 md:p-8">Research and design are strong skills that I have developed through my experience with video production, marine science, and content creation over the years. <br/>
                My time at Hyper Island has allowed me to work on projects with a UX/UI focus and I am happiest when I get the chance to combine those areas with coding.</p>
              </div>
              <div className=" md:flex items-center w-full md:pt-4 md:space-x-5 space-y-7 md:space-y-0">
                <p className=" bg-white rounded-3xl p-3 md:p-6 md:w-1/2">I am a social, positive, and curious person who tends to go the extra mile for the people in my life and for the work that I do. I thrive on new experiences and rarely say no when interesting opportunities come my way. </p>
                <p className="bg-main1 rounded-3xl p-3 md:w-1/2 ">The film on this page was one of them. I promise I am much friendlier IRL! </p>
              </div>

              
              
            </div>
            
          </section>
          <section className="vidbox w-full md:w-9/12 lg:w-2/5 flex justify-center items-center mx-2 mt-5 lg:mt-0 ">
              <div className="flex justify-center items-center w-full h-2/4 relative">
                <img className="object-cover absolute z-10 " src={Phone} alt="iPhone svg" />
                <video className=" w-10/12 lg:w-10/12 align-center self-center bottom-0 z-11  " autoPlay muted >
                <source src = {Closing} type="video/mp4" />
                </video>
              </div>
          </section>
        </section>
  </main>
      )
  };
  
  export default About;