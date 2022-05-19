      import Projectex from "../assets/project.png"
      import Islademo from "../assets/islatranquila.svg"
      import Happeningdemo from "../assets/happening.svg"
      import Floridamandemo from "../assets/floridaman.svg"
      import Islainfo from "../assets/islainfo.svg"
      import Happeninginfo from "../assets/happeninginfo.svg"
      import Floridamaninfo from "../assets/floridamaninfo.svg"

      
      const Projects = () => {
      
          return (
            <main className = " bg-black w-full min-h-screen ">

              <section className=" flex flex-col-reverse md:flex-row w-full h-4/5 justify-between align-center self-center pt-12 ">
                <section className=" flex self-center justify-center items-center w-11/12 md:w-2/4 text-black -mt-5 md:-mt-0">
                  <img src= {Floridamaninfo} alt="A web game called a Florida Man, built in phaser.js Texts reads: " className="w-full lg:w-11/12" />
                </section>
                <section className=" flex self-center justify-center items-center w-full md:w-2/4 md:mr-6 ">
                    <a href="https://chelseablaze.github.io/florida-game/" target="_blank" className="w-11/12">
                    <img src={Floridamandemo} />
                    </a>
                </section>
              </section>

              <section className=" flex flex-col md:flex-row w-full h-4/5 justify-between align-center self-center pt-24">
                <section className=" flex self-center justify-center items-center w-full md:w-2/5 z-1 ">
                    <a href="https://benciantar-happening.netlify.app/" target="_blank" className="w-1/2">
                    <img src={Happeningdemo} />
                    </a>
                </section>
                <section className=" flex self-center  items-center w-11/12 md:w-3/5 text-black -mt-5 md:-mt-0">
                  <img src= {Happeninginfo} alt="An e-commerce website called Happening, that sells experiences as gifts. Texts reads: " className=" w-full md:w-5/6" />
                </section>
              </section>

              <section className=" flex flex-col-reverse md:flex-row w-full h-4/5 justify-between align-center self-center pt-24">
                <section className=" flex self-center justify-center items-center w-11/12 md:w-2/4 text-black -mt-5 md:-mt-0 ">
                  <img src= {Islainfo} alt="A web site for a fictitious island called Isla Tranquila. Texts reads: " className="w-full lg:w-11/12" />
                </section>
                <section className=" flex self-center justify-center items-center w-full md:w-2/4 md:mr-6 ">
                  <a href="https://isla-tranquila.netlify.app/" target="_blank" className="w-11/12">
                    <img src={Islademo} />
                    </a>
                </section>
              </section>

             

        </main>
            )
        };
        
        export default Projects;