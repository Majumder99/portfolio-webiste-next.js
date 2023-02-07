import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My page description" />
      </Head>
      <main className="bg-white px-10">
        <div className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbysourav</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
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
            <h2
              className="text-5xl py-2 text-teal-600 font-medium
            "
            >
              Sourav Majumder
            </h2>
            <h3 className="text-2xl py-2">Developer and designer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              sunt fugit dolorem fugiat, eos nisi sint debitis recusandae illum
              consequatur!
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              laboriosam commodi unde?
              <span className="text-teal-500">agencies</span> Tempore
              consectetur excepturi{" "}
              <span className="text-teal-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, illum.
              </span>
              veniam. Beatae veritatis debitis vero!
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              eos, rerum error voluptate accusamus non.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
