import { DiJava } from "react-icons/di";
import {
  SiPython,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiTypescript,
  SiReact,
  SiPostgresql,
  SiGit,
} from "react-icons/si";

function App() {
  return (
    <div className="min-w-4xl">
      <div className="min-h-screen bg-linear-to-r from-slate-950 to-indigo-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex justify-center">
            <h1 className="m-14 text-4xl font-bold text-gray-100 italic text-shadow-lg">
              Welcome to my Portfolio
            </h1>
          </div>
          <div className="mr-24 flex flex-col items-center">
            <h2 className="ml-8 pb-2 text-xl font-semibold text-gray-100 drop-shadow-lg">
              ABOUT ME
            </h2>
            <p className="ml-28 flex max-w-4xl items-center justify-center pb-4 text-gray-100">
              Hi,I'm Naman! I am a passionate software developer who is
              currently studying at Vidyalankar Institute of technology(wadala).
              I am really interested in coding and specially in how software
              interacts with the computer hardware where coding comes into play
              and solving problems in different ways.The projects I have made
              aims to represent my coding capability and to showcase my skills
              in problem solving and creativity.
            </p>
          </div>
          <h2 className="mr-16 flex justify-center text-xl font-semibold text-gray-100">
            Skills
          </h2>
          <div className="flex justify-center">
            <div className="m-8 mt-4 grid grid-cols-3 grid-rows-3 gap-5 px-10 pt-4 pb-4 pl-4">
              <div className="col-start-1 row-start-1 flex h-30 w-68 items-center justify-center rounded-xl border-2 border-red-50 text-gray-100 transition-all duration-300 hover:scale-105 hover:border-indigo-400">
                <SiC className="m-2 h-12 w-12 text-blue-500 hover:text-gray-100" />
                <p className="text-md m-2 text-gray-100"></p>
              </div>
              <div className="col-start-2 row-start-1 flex h-30 w-68 items-center justify-center rounded-xl border-2 border-red-50 text-gray-100 transition-all duration-300 hover:scale-105 hover:border-indigo-600">
                <SiCplusplus className="m-2 h-16 w-16 shrink-0 text-blue-500 hover:text-gray-100" />
                <p className="text-md ml-3 text-balance text-gray-100"></p>
              </div>
              <div className="col-start-3 row-start-1 flex h-30 w-68 items-center justify-center rounded-xl border-2 border-red-50 text-gray-100 transition-all duration-300 hover:scale-105 hover:border-red-400">
                <DiJava className="h-20 w-20 shrink-0 text-red-500 hover:text-gray-100" />
                <p className="text-md ml-3 text-balance text-gray-100"></p>
              </div>
              <div className="col-start-1 row-start-2 flex h-30 w-68 items-center justify-center rounded-xl border-2 border-red-50 text-gray-100 transition-all duration-300 hover:scale-105 hover:border-yellow-200">
                <SiJavascript className="m-2 h-16 w-16 shrink-0 text-yellow-300 hover:text-gray-100" />
                <p className="text-md ml-3 text-balance text-gray-100"></p>
              </div>
              <div className="col-start-2 row-start-2 flex h-30 w-68 items-center justify-center rounded-xl border-2 border-red-50 text-gray-100 transition-all duration-300 hover:scale-105 hover:border-blue-400">
                <SiTypescript className="m-2 h-16 w-16 shrink-0 text-blue-400 hover:text-gray-100" />
                <p className="text-md ml-3 text-balance text-gray-100"></p>
              </div>
              <div className="col-start-3 row-start-2 flex h-30 w-68 snap-center items-center justify-center rounded-xl border-2 border-red-50 text-gray-100 transition-all duration-300 hover:scale-105 hover:border-blue-300">
                <SiPython className="m-2 h-16 w-16 shrink-0 text-blue-500 hover:text-gray-100" />
                <p className="text-md ml-3 text-balance text-gray-100"></p>
              </div>
              <div className="col-start-1 row-start-3 flex h-30 w-68 items-center justify-center rounded-xl border-2 border-red-50 text-gray-100 transition-all duration-300 hover:scale-105 hover:border-blue-200">
                <SiPostgresql className="m-2 h-16 w-16 shrink-0 text-blue-500 hover:text-gray-100" />
                <p className="text-md ml-3 text-balance text-gray-100"></p>
              </div>
              <div className="col-start-2 row-start-3 flex h-30 w-68 items-center justify-center rounded-xl border-2 border-red-50 text-gray-100 transition-all duration-300 hover:scale-105 hover:border-blue-500">
                <SiReact className="m-2 h-16 w-16 shrink-0 text-blue-700 hover:text-gray-100" />
                <p className="text-md ml-3 text-balance text-gray-100"></p>
              </div>
              <div className="o col-start-3 row-start-3 flex h-30 w-68 items-center justify-center rounded-xl border-2 border-red-50 text-gray-100 transition-all duration-300 hover:scale-105 hover:border-red-400">
                <SiGit className="m-2 h-16 w-15 shrink-0 text-red-600 hover:text-gray-100" />
                <p className="text-md ml-3 text-balance text-gray-100"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
