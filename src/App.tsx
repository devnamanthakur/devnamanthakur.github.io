import "./App.css";
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
      <div className=" bg-linear-to-r from-slate-950 to-indigo-950 min-h-screen">
        <div className="flex justify-center ">
          <h1 className=" font-bold text-4xl text-gray-100 text-shadow-lg italic m-14">
            Welcome to my Portfolio
          </h1>
        </div>
        <h2 className="text-gray-100 text-xl border-b-2 inline-block drop-shadow-lg decoration-amber-400 ml-10 pb-2 ">
          ABOUT ME
        </h2>
        <p className="text-gray-100 ml-10 pb-4">
          Hi,I'm Naman! I am a passionate software developer who is currently
          studying at Vidyalankar Institute of technology(wadala). I am really
          interested in coding and specially in how software interacts with the
          computer hardware where coding comes into play and solving problems in
          different ways.The projects I have made aims to represent my coding
          capability and to showcase my skills in problem solving and
          creativity.
        </p>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pt-4 pl-4 pb-4 px-10 m-8 scrollbar-track-emerald-400">
          <div
            className="border-2 text-gray-100 border-red-50 w-96 h-96 overflow-y-auto snap-center shrink-0 items-center scrollbar-track-gray-200 transition-all duration-300 hover:scale-105 
        hover:border-indigo-400 scrollbar scrollbar-track-gray-600"
          >
            <SiC className="w-16 h-16 shrink-0 m-2 text-blue-500 hover:text-gray-100" />
            <p className="text-gray-100 m-2 text-md">
              C is a foundational procedural programming language that strikes
              an optimal balance between low-level hardware accessibility and
              high-level syntactic efficiency. Renowned for its performance and
              portability, it serves as the architectural backbone for operating
              systems, embedded systems, and high-performance applications. Its
              minimalist design and granular memory management capabilities
              provide developers with unparalleled control over system
              resources, making it an essential tool for engineering robust,
              resource-efficient software solutions. Mastery of C demonstrates a
              deep understanding of computer architecture and remains a critical
              asset in any technical repertoire.
            </p>
          </div>
          <div
            className="border-2 text-gray-100 border-red-50 w-96 h-96 snap-center shrink-0 overflow-y-auto hover:scale-105 transition-all duration-300
        hover:border-indigo-600"
          >
            <SiCplusplus className="w-16 h-16 shrink-0 m-2 text-blue-500 hover:text-gray-100" />
            <p className=" text-gray-100 ml-3 text-md text-balance">
              C++ is a high-performance, multi-paradigm language that extends
              the foundations of C with the power of Object-Oriented Programming
              (OOP). It is engineered for systems where resource efficiency and
              execution speed are paramount, such as game engines, financial
              trading systems, and real-time simulations. By offering features
              like classes, templates, and Standard Template Library (STL)
              integration, C++ enables the development of complex, scalable
              software without sacrificing low-level hardware control. It
              remains a cornerstone of modern software engineering, bridging the
              gap between abstract architectural design and high-efficiency
              computation.
            </p>
          </div>
          <div
            className="border-2 text-gray-100 border-red-50 w-96 h-96 snap-center shrink-0 overflow-y-auto hover:scale-105 hover:border-red-400
        transition-all duration-300"
          >
            <DiJava className="text-red-500 w-20 h-20 shrink-0 hover:text-gray-100 " />
            <p className=" text-gray-100 ml-3 text-md text-balance">
              Java is a premier, object-oriented programming language designed
              around the "Write Once, Run Anywhere" (WORA) philosophy. By
              utilizing the Java Virtual Machine (JVM), it ensures seamless
              cross-platform compatibility, making it a staple for
              enterprise-level applications, Android development, and
              large-scale distributed systems. Java emphasizes code readability
              and reliability through its robust memory management and automatic
              garbage collection. Its extensive ecosystem of libraries and
              strong focus on security make it an industry standard for building
              scalable, high-performance software that powers everything from
              banking backends to global web services.
            </p>
          </div>
          <div
            className="border-2 text-gray-100 border-red-50 w-96 h-96 snap-center shrink-0 transition-all duration-300 hover:border-yellow-200 
        hover:scale-105 overflow-y-auto"
          >
            <SiJavascript className="text-yellow-300 w-16 h-16 shrink-0 m-2 hover:text-gray-100 " />
            <p className=" text-gray-100 ml-3 text-md text-balance">
              JavaScript is the dynamic engine of the modern web, serving as the
              essential language for creating interactive and responsive user
              experiences. Originally built for client-side scripting, it has
              evolved into a versatile, full-stack powerhouse capable of driving
              complex front-end interfaces and scalable back-end environments
              via Node.js. Its asynchronous nature and event-driven architecture
              allow for seamless data handling and real-time updates without
              compromising performance. As a cornerstone of web technology,
              JavaScripts vast ecosystem of frameworks and libraries makes it
              indispensable for building the highly engaging, feature-rich
              applications that define todays digital landscape.
            </p>
          </div>
          <div
            className="border-2 text-gray-100 border-red-50 w-96 h-96 snap-center shrink-0 overflow-y-auto hover:border-blue-400 hover:scale-105
        transition-all duration-300"
          >
            <SiTypescript className="text-blue-400 w-16 h-16 m-2 shrink-0 hover:text-gray-100 " />
            <p className=" text-gray-100 ml-3 text-md text-balance">
              TypeScript is a sophisticated superset of JavaScript that
              integrates static typing into the development workflow,
              significantly enhancing code maintainability and scalability. By
              catching potential errors during development rather than at
              runtime, it enables the creation of more predictable and robust
              applications. TypeScript seamlessly compiles into clean
              JavaScript, allowing developers to utilize modern language
              features while maintaining full compatibility with the existing
              web ecosystem. It is the preferred choice for large-scale
              enterprise projects, offering superior tooling, advanced
              autocompletion, and a self-documenting structure that streamlines
              collaboration within complex codebases.
            </p>
          </div>
          <div
            className="border-2 text-gray-100 border-red-50 w-96 h-96 snap-center shrink-0 overflow-y-auto hover:border-blue-300 hover:scale-105
        transition-all duration-300"
          >
            <SiPython className="text-blue-500 w-16 h-16 m-2 shrink-0 hover:text-gray-100" />
            <p className=" text-gray-100 ml-3 text-md text-balance">
              Python is a high-level, interpreted language celebrated for its
              exceptional readability and "batteries-included" philosophy. By
              prioritizing a clean, intuitive syntax, it allows developers to
              solve complex problems with fewer lines of code, significantly
              accelerating the development lifecycle. Its immense versatility
              spans various domains—from data science and artificial
              intelligence to web development and automation. Supported by a
              vast ecosystem of specialized libraries and a global community,
              Python serves as a powerful bridge between rapid prototyping and
              production-grade software engineering.
            </p>
          </div>
          <div
            className="border-2 text-gray-100 border-red-50 w-96 h-96 snap-center shrink-0 hover:border-blue-200 hover:scale-105 
        transition-all duration-300 overflow-y-auto"
          >
            <SiPostgresql className="text-blue-500 w-16 h-16 shrink-0 m-2 hover:text-gray-100" />
            <p className=" text-gray-100 ml-3 text-md text-balance">
              PostgreSQL is an advanced, enterprise-grade open-source relational
              database known for its proven architecture, reliability, and data
              integrity. It goes beyond standard SQL by offering support for
              both relational and non-relational data types, including JSONB for
              high-performance document storage. Renowned for its extensibility
              and compliance with ACID standards, PostgreSQL is the preferred
              choice for developers handling complex data workloads and
              high-concurrency environments. Its sophisticated indexing
              techniques and robust feature set make it a powerful foundation
              for building scalable, data-driven applications that require
              precision and long-term stability.
            </p>
          </div>
          <div
            className="border-2 text-gray-100 border-red-50 w-96 h-96 snap-center overflow-y-auto shrink-0 hover:border-blue-500 hover:scale-105 
        transition-all duration-300"
          >
            <SiReact className="text-blue-700 w-16 h-16 shrink-0 m-2" />
            <p className=" text-gray-100 ml-3 text-md text-balance">
              React is a powerful JavaScript library designed for building
              dynamic and highly performant user interfaces through a
              component-based architecture. Developed by Meta, it revolutionizes
              frontend development by using a Virtual DOM to optimize rendering
              and ensure seamless state management. By promoting the creation of
              reusable UI components, React enables developers to build complex,
              scalable web applications with a focus on code modularity and
              maintainability. Its declarative approach and expansive ecosystem
              of hooks and libraries make it the industry standard for
              delivering fast, interactive, and modern digital experiences.
            </p>
          </div>
          <div
            className="border-2 text-gray-100 border-red-50 w-96 h-96 snap-center shrink-0 overflow-y-auto hover:border-red-400 hover:scale-105 
        transition-all duration-300"
          >
            <SiGit className="text-red-600 w-15 h-16 shrink-0 m-2 hover:text-gray-100" />
            <p className=" text-gray-100 ml-3 text-md text-balance">
              Git is a distributed version control system designed to handle
              everything from small to very large projects with speed and
              efficiency. It serves as the definitive tool for modern software
              development by allowing multiple developers to collaborate
              seamlessly through a branching and merging workflow. By
              maintaining a complete history of every change, Git provides a
              safety net that ensures data integrity and enables effortless
              rollbacks to previous states. Its decentralized nature means every
              developer has a full local copy of the repository, facilitating
              rapid development and offline capability. Mastering Git is
              fundamental for any professional, as it optimizes workflow
              transparency, team coordination, and code reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
