/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import { useState } from "react";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>My Portfolio</title>
          <meta name="description" content="My page description" />
        </Head>
        <main className="bg-white px-10 md:px-20 lg:px-40">
          <div className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl font-burtons dark:text-red-500">
                developedbysourav
              </h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    className="cursor-pointer text-2xl"
                    onClick={() => setDarkMode(!darkMode)}
                  />
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium">
                Sourav Majumder
              </h2>
              <h3 className="text-2xl py-2">Developer and designer</h3>
              <p className="text-md py-5 leading-8 text-gray-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                sunt fugit dolorem fugiat, eos nisi sint debitis recusandae
                illum consequatur!
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
              <Image src={deved} alt="none" layout="fill" objectFit="cover" />
            </div>
          </div>

          <div>
            <div>
              <h3 className="text-3xl py-1">Services I offer</h3>
              <p className="text-md py-2 leading-8 text-gray-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur laboriosam commodi unde?
                <span className="text-teal-500">agencies</span> Tempore
                consectetur excepturi{" "}
                <span className="text-teal-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloremque, illum.
                </span>
                veniam. Beatae veritatis debitis vero!
              </p>
              <p className="text-md py-2 leading-8 text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique eos, rerum error voluptate accusamus non.
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex flex-col items-center flex-1">
                <Image src={code} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Code your dream project
                </h3>
                <p className="py-2">
                  Do you have an idea for your next great website? Let make it a
                  reality.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Indesign</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex flex-col items-center flex-1">
                <Image src={code} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Code your dream project
                </h3>
                <p className="py-2">
                  Do you have an idea for your next great website? Let make it a
                  reality.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Indesign</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex flex-col items-center flex-1">
                <Image src={code} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Code your dream project
                </h3>
                <p className="py-2">
                  Do you have an idea for your next great website? Let make it a
                  reality.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Indesign</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h3 className="text-3xl py-1">Porfolio</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Since the beginning of my journey as a freelance designer and
                developer, Ive done remote work for
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I offer from a wide range of services, including brand design,
                programming and teaching.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web3}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web4}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web5}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web6}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
