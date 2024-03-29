import Head from "next/head";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaServer, FaBook, FaBriefcase } from "react-icons/fa";
import { CgMoon, CgSun } from "react-icons/cg";
import Image from "next/image";
import ProfilePic from "../public/profile-pic.png";
import { useState, useEffect } from "react";

export default function Home() {
  const name_text = "<thiago farias/>";
  const fileUrl = "RESUME.pdf";
  const fileName = "resume.pdf";
  const [text1, setText1] = useState("");

  const [theme, setTheme] = useState("");

  useEffect(() => {
    let localTheme = window.localStorage.getItem("theme");
    setTheme(localTheme);
  }, []);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText1(name_text.slice(0, text1.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [text1]);

  return (
    <div className="border-solid border-x-8 border-transparent bg-clip-border bg-gradient-to-t from-cyan-500 to-indigo-100">
      <Head>
        <title>Thiago Farias</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={
          theme == "light" ? "bg-gray-800 px-10" : " bg-gradient-to-t from-indigo-100 to-cyan-100 bg-teal-50 px-10"
        }
      >
        <section className="min-h-screen">
          <nav className="py-10 mb-2 flex justify-between items-center">
            <h1
              className={
                theme == "light"
                  ? " text-white text-xl font-burtons text-justify"
                  : "text-xl font-burtons text-justify"
              }
            >
              developedbythi
            </h1>

            <ul className="flex justify-center items-center">
              <li>
                <button onClick={switchTheme}>
                  {theme == "light" ? 
                    <CgSun className={"text-white cursor-pointer text-2xl hover:animate-spin hover:text-teal-700"} />
                   : 
                    <CgMoon className={"text-cyan-700 cursor-pointer text-2xl hover:animate-spin hover:text-teal-700"} />
                  }
                </button>
              </li>
              <li>
                <a
                  className={theme == "light" ? "bg-cyan-700 text-white px-4 py-2 rounded ml-8 hover:bg-transparent hover:border-2 hover:border-cyan-700 hover:text-cyan-100 hover:transition-transform" :
                  "bg-cyan-700 text-white px-4 py-2 rounded ml-8 hover:bg-cyan-100 hover:border-2 hover:border-cyan-700 hover:text-cyan-700 hover:transition-transform"
                }
                  href={fileUrl}
                  download={fileName}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex flex-wrap justify-center items-center pl-2 pr-4">
            <div>
              <div className="text-center p-1 h-30">
                <h2 className="hover:scale-105 hover:transition-transform h-auto font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-700 pb-2">
                  {text1}
                </h2>
                <p
                  className={
                    theme == "light"
                      ? "text-md py-5 leading-8 text-white"
                      : "text-md py-5 leading-8 text-gray-800"
                  }
                >
                  Hey there! I am Thiago, based in brazil and working at a
                  company called{" "}
                  <a
                    href="https://www.moskitcrm.com/"
                    className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-700"
                  >
                    Moskit
                  </a>
                  .
                </p>
              </div>
            </div>

            <div>
              <div
                className={
                  theme == "light"
                    ? "text-5xl flex justify-center gap-8 text-white"
                    : "text-5xl flex justify-center gap-8 text-cyan-700"
                }
              >
                <a
                  href="https://www.linkedin.com/in/thiago-farias-b09280163/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin className="hover:scale-105"/>
                </a>
                <a
                  href="https://github.com/thiagosfarias"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub className="hover:scale-105"/>
                </a>
                <a
                  href="https://www.instagram.com/thiagofarias.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram className="hover:scale-105 "/>
                </a>
              </div>

              <div className="border-2 border-cyan-700 hover:scale-105 hover:transition-transform hover:border-4 relative mx-auto rounded-full w-40 h-40 mt-5 mb-5 overflow-hidden">
                <Image
                  alt="image"
                  src={ProfilePic}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>

      
          <div className="flex flex-wrap justify-center gap-10">
            <div className={theme == 'light' ? 
                " border-2 border-cyan-500 hover:border-cyan-700 hover:scale-105 hover:border-4 hover:transition-transform w-96 mt-1 mb-2 text-center shadow-lg pt-5 pb-5 rounded-xl" :
                " bg-gradient from-cyan-100 to-indigo-400 border-2 border-cyan-500 hover:border-cyan-700 hover:scale-105 hover:border-4 hover:transition-transform w-96 mt-6 mb-2 text-center shadow-lg pt-5 pb-5 rounded-xl"
          }>
              <FaServer
                className={
                  theme == "light"
                    ? "pt-2 text-white w-20 h-20 mx-auto"
                    : "text-cyan-700 pt-2 w-20 h-20 bg- mx-auto"
                }
              />
              <h3
                className={
                  theme == "light"
                    ? "text-white text-lg font-medium pt-3 pb-2"
                    : "text-cyan-700 text-lg font-medium pt-3 pb-2"
                }
              >
                background.
              </h3>
              <p
                className={
                  theme == "light"
                    ? "text-white ml-4 mr-4 text-justify text-md"
                    : "text-black ml-3 mr-3 text-justify text-md"
                }
              >
                Highly skilled and motivated Backend Developer with expertise in
                Java and Groovy programming languages, along with extensive
                knowledge of the Spring Framework and Quarkus Framework.
                Proficient in event-driven development with messaging systems
                like ActiveMQ for efficient communication. Acquainted with
                various databases, such as: MySQL, SQL Server, PostgreSQL and
                MariaDB. Experienced in building and maintaining robust Rest
                APIs, SOAP services with HTTP and RPC protocols. Passionate
                about delivering scalable and performant backend solutions.
              </p>
            </div>

            <div className={theme == 'light' ? 
                "border-2 border-cyan-500 hover:border-cyan-700 hover:scale-105 hover:border-4 hover:transition-transform w-96 mt-1 mb-2 text-center shadow-lg pt-5 pb-5 rounded-xl" :
                "bg-gradient from-cyan-100 to-indigo-400 border-2 hover:border-cyan-700 border-cyan-500 hover:scale-105 hover:border-4 hover:transition-transform w-96 mt-6 mb-2 text-center shadow-lg pt-5 pb-5 rounded-xl"
          }>
              <FaBook
                className={
                  theme == "light"
                    ? "pt-2 text-white w-20 h-20 mx-auto"
                    : "text-cyan-700 pt-2 w-20 h-20 bg- mx-auto"
                }
              />
              <h3
                className={
                  theme == "light"
                    ? "text-white text-lg font-medium pt-3 pb-2"
                    : "text-cyan-700 text-lg font-medium pt-3 pb-2"
                }
              >
                education.
              </h3>
              <p
                className={
                  theme == "light"
                    ? "text-white ml-4 mr-4 text-justify text-md"
                    : "text-black ml-3 mr-3 text-justify text-md"
                }
              >
                Studied Information Systems at IFMA - Federal Institute of
                Maranhao, troughtout the course had to cover a wide range of
                topics, including database management, network infrastructure,
                cybersecurity, software development, project management, and
                data analytics. Building a solid foundation in areas such as
                data modeling, data warehousing, system integration, and
                information security. By delving into real-world case studies
                and hands-on projects, i learnt to apply theoretical concepts to
                practical scenarios.
              </p>
            </div>

            <div className={theme == 'light' ? 
                "border-2 border-cyan-500 hover:border-cyan-700 hover:scale-105 hover:border-4 hover:transition-transform w-96 mt-1 mb-2 text-center shadow-lg pt-5 pb-5 rounded-xl" :
                "bg-gradient from-cyan-100 to-indigo-400 border-2 border-cyan-500 hover:border-cyan-700 hover:scale-105 hover:border-4 hover:transition-transform w-96 mt-6 mb-2 text-center shadow-lg pt-5 pb-5 rounded-xl"
          }>
              <FaBriefcase
                className={
                  theme == "light"
                    ? "pt-2 text-white w-20 h-20 mx-auto"
                    : "text-cyan-700 pt-2 w-20 h-20 bg- mx-auto"
                }
              />
              <h3
                className={
                  theme == "light"
                    ? "text-white text-lg font-medium pt-3 pb-2"
                    : "text-cyan-700 text-lg font-medium pt-3 pb-2"
                }
              >
                where i been.
              </h3>
              <p
                className={
                  theme == "light"
                    ? "text-white ml-4 mr-4 text-justify text-md"
                    : "text-black ml-3 mr-3 text-justify text-md"
                }
              >
                <ul className="grid-flow-row">
                  <li className="mb-3">
                    <strong className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-700">Ocidental informatica</strong> - Intern FullStack
                    Developer | Sep 2019 - Feb 2020
                  </li>
                  <li className="mb-3">
                    <strong className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-700">Agrotols</strong> - Junior FullStack Developer | Jan
                    2021 - Jul 2021
                  </li>
                  <li className="mb-3">
                    <strong className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-700">Pulse</strong> - Junior FullStack Developer | Aug
                    2021 - Aug 2022
                  </li>
                  <li className="mb-3">
                    <strong className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-700">Moskit</strong> - Mid Backend Developer | Sep 2022 -
                    moment
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
