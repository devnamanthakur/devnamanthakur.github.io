import { ProjectLink } from "./components/ProjectLink";
import { DiJava } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import {
  SiPython,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiTypescript,
  SiReact,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiGmail,
} from "react-icons/si";

function App() {
  return (
    <div className="min-w-4xl">
      <div className="min-h-screen bg-linear-to-r from-slate-950 to-indigo-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex justify-center">
            <h1 className="m-14 text-6xl font-bold text-gray-100 font-stretch-extra-expanded text-shadow-lg">
              Welcome to my Portfolio
            </h1>
          </div>
          <div className="mr-24 flex flex-col items-center">
            <h2 className="ml-8 pb-2 text-xl font-semibold text-gray-100 font-stretch-extra-expanded drop-shadow-lg">
              ABOUT ME
            </h2>
            <p className="text-md ml-28 flex max-w-4xl items-center justify-center pb-4 font-mono text-sm/8 font-extralight tracking-tight text-gray-100 font-stretch-condensed">
              Hi,I'm Naman! I am a passionate software developer who is
              currently studying at Vidyalankar Institute of technology(wadala).
              I am really interested in coding and specially in how software
              interacts with the computer hardware where coding comes into play
              and solving problems in different ways.The projects I have made
              aims to represent my coding capability and to showcase my skills
              in problem solving and creativity.
            </p>
          </div>
          <h2 className="mr-16 flex justify-center text-2xl font-semibold tracking-wider text-gray-100 font-stretch-extra-expanded">
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
          <div className="mr-24 flex flex-col items-center">
            <h2 className="mr-16 mb-10 ml-26 flex justify-center text-2xl font-semibold text-gray-100 font-stretch-extra-expanded">
              Projects
            </h2>
            <ol className="ml-28 list-outside list-decimal text-gray-100">
              <li className="marker:text-xl marker:font-bold">
                <strong className="text-xl font-semibold">
                  Dictionary Lookup system
                </strong>
                <div className="max-w-4xl pb-4 text-sm/8 font-extralight tracking-tight text-gray-100 font-stretch-condensed">
                  <ProjectLink
                    href="https://github.com/devnamanthakur/Dictionary_lookup_system"
                    label="View project"
                  />
                  <h3 className="mt-4 font-semibold font-stretch-expanded">
                    The Hook
                  </h3>
                  <p className="font-mono font-light">
                    An advanced TypeScript-based diagnostic tool designed to
                    evaluate and visualize the real-world performance of
                    searching algorithms. By processing a massive dataset of
                    over 86,000 dictionary entries, the system serves as a live
                    laboratory for comparing the efficiency of Linear Search,
                    Binary Search, and Trie-based data structures in a
                    high-concurrency Node.js environment.
                  </p>

                  <h3 className="mt-4 font-semibold font-stretch-expanded">
                    The Challenge & Problem-Solving
                  </h3>
                  <ol className="ml-6 list-disc">
                    <li>
                      <p className="font-mono font-light">
                        Algorithmic Optimization: I tackled the inefficiency of
                        standard linear searching by implementing a Trie (Prefix
                        Tree). This shifted the complexity from O(n × p) to a
                        highly efficient O(m), enabling near-instant
                        autocomplete and prefix suggestions even with a massive
                        dataset.
                      </p>
                    </li>
                    <li>
                      <p className="font-mono font-light">
                        Performance Benchmarking: To move beyond theoretical
                        big-O notation, I built a custom timing suite. This
                        provides real-time, microsecond-level latency analysis,
                        allowing users to see the tangible performance gap
                        between O(n), O(log n), and O(m) search strategies.
                      </p>
                    </li>
                    <li>
                      <p className="font-mono font-light">
                        Data Engineering: I engineered a robust preprocessing
                        pipeline to normalize and sort the dictionary data. This
                        ensured the integrity of the Binary Search
                        implementation and optimized memory usage during the
                        JSON parsing of 86,039 unique entries.
                      </p>
                    </li>
                  </ol>

                  <h3 className="mt-4 font-semibold font-stretch-expanded">
                    Tech Stack Highlights
                  </h3>
                  <ol className="ml-6 list-disc">
                    <li>
                      <p className="font-mono font-light">
                        TypeScript & Node.js: Leveraged for strong typing and
                        asynchronous CLI handling via the readline interface.
                      </p>
                    </li>
                    <li>
                      <p className="font-mono font-light">
                        Custom Data Structures: Built a recursive Trie
                        implementation to handle complex prefix-based word
                        suggestions.
                      </p>
                    </li>
                  </ol>
                </div>
              </li>
              <li className="marker:text-xl marker:font-bold">
                <strong className="text-xl font-semibold">
                  Algorithm Visualizer
                </strong>
                <div className="max-w-4xl pb-4 text-sm/8 font-extralight tracking-tight text-gray-100 font-stretch-condensed">
                  <ProjectLink
                    href="https://github.com/devnamanthakur/Algorithm-visualizer"
                    label="View Project"
                  />
                  <h3 className="mt-4 font-semibold font-stretch-expanded">
                    The Hook
                    <p className="font-mono font-light">
                      This modular Python-based suite bridges the gap between
                      abstract algorithmic theory and practical execution.
                      Designed around the Analysis of Algorithms (AOA)
                      curriculum, the tool deconstructs complex processes from
                      Greedy approaches like Dijkstras to Dynamic Programming
                      solutions into step-by-step interactive animations. By
                      providing real-time visual feedback and microsecond-level
                      benchmarking, the project serves as a live laboratory for
                      understanding how data structures directly impact runtime
                      efficiency.
                    </p>
                  </h3>
                  <h3 className="font-bold font-stretch-expanded">
                    Problem Solving
                    <ol className="ml-6 list-disc">
                      <li>
                        <p className="font-mono font-light">
                          Internal State Extraction: Engineered a callback-based
                          architecture that allows algorithms to broadcast
                          internal transitions, such as comparisons or swaps, to
                          the UI without interrupting the core execution logic.
                        </p>
                      </li>
                      <li>
                        <p className="font-mono font-light">
                          Data Structure Transformation: Implemented robust
                          parsers to convert user-provided string inputs and
                          adjacency lists into functional graph objects for
                          shortest-path calculations.
                        </p>
                      </li>
                      <li>
                        <p className="font-mono font-light">
                          Visual Synchronicity: Solved the challenge of
                          terminal-based readability by using ANSI escape
                          sequences and strategic pauses to highlight
                          decision-making points in real-time.
                        </p>
                      </li>
                    </ol>
                  </h3>
                  <h3 className="font-bold font-stretch-expanded">
                    Technical Highlights
                    <ol className="ml-6 list-disc">
                      <li>
                        <p className="font-mono font-light">
                          Algorithmic Breadth: Implemented a diverse library of
                          algorithms including Sorting (O(n^2)), Searching
                          (O(log n)), Graph Theory (Dijkstra’s), and Dynamic
                          Programming (0/1 Knapsack).
                        </p>
                      </li>
                      <li>
                        <p className="font-mono font-light">
                          Performance Benchmarking: Integrated a precision
                          timing suite to measure microsecond-level execution,
                          facilitating side-by-side comparisons of theoretical
                          Big-O complexity versus actual latency.
                        </p>
                      </li>
                      <li>
                        <p className="font-mono font-light">
                          Modular Design: Followed a strict separation of
                          concerns, isolating algorithm logic from visualization
                          utilities to ensure the system is easily extensible
                          for new modules.
                        </p>
                      </li>
                    </ol>
                  </h3>
                </div>
              </li>

              <li className="marker:text-xl marker:font-bold">
                <strong className="text-xl">React Calculator</strong>
                <div className="max-w-4xl pb-4 text-sm/8 font-extralight tracking-tight text-gray-100 font-stretch-condensed">
                  <ProjectLink
                    href="https://github.com/devnamanthakur/calculator_app"
                    label="view project"
                  />
                  <h3 className="mt-4 font-bold font-stretch-expanded">
                    The Hook
                    <p className="font-mono font-light">
                      This functional web application leverages React 18 and
                      TypeScript to deliver a high-performance calculation
                      engine with a polished user interface. Built with a focus
                      on modern CSS layouts and type-safe state management, the
                      project demonstrates a clean transition from
                      terminal-based logic to interactive, front-end software
                      engineering.
                    </p>
                  </h3>
                  <h3 className="font-bold font-stretch-expanded">
                    Problem Solving
                    <ol className="ml-6 list-disc">
                      <li>
                        <p className="font-mono font-light">
                          Mathematical Expression Parsing: Engineered a robust
                          utility module to handle complex arithmetic
                          operations, ensuring correct order of operations and
                          edge-case handling for division by zero.
                        </p>
                      </li>

                      <li>
                        <p className="font-mon0 font-light">
                          State Consistency: Solved the challenge of managing
                          multi-step input strings by implementing a centralized
                          React state that tracks operands, operators, and the
                          final evaluated result.
                        </p>
                      </li>

                      <li>
                        <p className="font-mono font-light">
                          Layout Fluidity: Addressed common UI alignment issues
                          by implementing a responsive 5x4 CSS Grid, ensuring
                          the calculator maintains a consistent tactile feel
                          across different screen resolutions.
                        </p>
                      </li>
                    </ol>
                  </h3>
                  <h3 className="font-bold font-stretch-expanded">
                    Technical Highlights
                    <ol className="ml-6 list-disc">
                      <li>
                        <p className="font-mono font-light">
                          Type-Safe Development: Utilized TypeScript to define
                          strict interfaces for calculator inputs and utility
                          functions, significantly reducing runtime errors and
                          improving code maintainability.
                        </p>
                      </li>
                      <li>
                        <p className="font-mono font-light">
                          Modern React Architecture: Built with Vite for an
                          optimized development workflow, leveraging functional
                          components and hooks to manage the application
                          lifecycle.
                        </p>
                      </li>
                      <li>
                        <p className="font-mono font-light">
                          Dynamic UI Styling: Combined CSS Grid and Flexbox to
                          create a modular button layout that replicates the
                          physics and feedback of a physical calculator.
                        </p>
                      </li>
                    </ol>
                  </h3>
                </div>
              </li>
              <li className="marker:text-xl marker:font-bold">
                <strong className="text-xl">TypeScript Banking System </strong>
                <div className="max-w-4xl pb-4 text-sm/8 font-extralight tracking-tight text-gray-100 font-stretch-condensed">
                  <ProjectLink
                    href="https://github.com/devnamanthakur/Bank"
                    label="view project"
                  />
                  <h3 className="mt-4 font-bold font-stretch-expanded">
                    The Hook
                    <p className="font-mono font-light">
                      This lightweight local banking engine simulates core
                      financial operations including account lifecycle
                      management, secure fund transfers, and asynchronous data
                      persistence. Built with Node.js and TypeScript, the system
                      functions as a mini-database, using the file system to
                      ensure user records remain intact across sessions while
                      enforcing strict validation rules for every transaction.
                    </p>
                  </h3>
                  <h3 className="font-bold font-stretch-expanded">
                    Problem Solving
                    <ol className="ml-6 list-disc">
                      <li>
                        <p className="font-mono font-light">
                          Asynchronous Data Integrity: Solved the challenge of
                          race conditions during file I/O by utilizing
                          fs/promises to ensure account data is read and written
                          sequentially, preventing data corruption during
                          concurrent operations.
                        </p>
                      </li>

                      <li>
                        <p className="font-mono font-light">
                          Secure Identity Management: Integrated the uuid
                          library to assign unique identifiers to every user,
                          moving beyond simple index-based lookups to a more
                          collision-resistant system for account retrieval and
                          deletion.
                        </p>
                      </li>

                      <li>
                        <p className="font-mono font-light">
                          Transaction Validation Logic: Engineered a multi-step
                          verification process for fund transfers that checks
                          for account existence, sufficient balance, and
                          recipient validity before committing any changes to
                          the local storage.
                        </p>
                      </li>
                    </ol>
                  </h3>
                  <h3 className="font-bold font-stretch-expanded">
                    Technical Highlights
                    <ol className="ml-6 list-disc">
                      <li>
                        <p className="font-mono font-light">
                          Persistent JSON Storage: Designed a local database
                          layer using a userData.json architecture, enabling
                          full CRUD (Create, Read, Update, Delete) capabilities
                          without the overhead of an external database engine.
                        </p>
                      </li>
                      <li>
                        <p className="font-mono font-light">
                          Type-Safe CLI Interaction: Leveraged TypeScript
                          interfaces and a custom readline promise wrapper to
                          create a structured, type-safe command-line interface
                          that handles user input gracefully.
                        </p>
                      </li>
                      <li>
                        <p className="font-mono font-light">
                          Business Logic Enforcement: Implemented strict domain
                          rules, such as 18+ age restrictions and non-empty
                          field requirements, to ensure the application layer
                          maintains high-quality data.
                        </p>
                      </li>
                    </ol>
                  </h3>
                </div>
              </li>
            </ol>
          </div>
          <div className="mr-24 flex flex-col items-center">
            <h2 className="mr-16 mb-10 ml-26 flex justify-center text-2xl font-semibold text-gray-100 font-stretch-extra-expanded">
              Contact Me
            </h2>
            <div className="mt-0.5 grid gap-3 grid-cols-3 grid-rows-1 mb-20 ml-16">
              <a
                href="https://github.com/devnamanthakur"
                rel="noreferrer"
                target="_blank"
              >
                <div className="col-start-1 mt-1 row-start-1 flex h-20 w-60 items-center justify-center rounded-xl border-2 border-gray-100 transition-all 
                hover:scale-105  duration-300">
                  <SiGithub className="m-2 h-16 w-16 text-gray-100" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/naman-thakur-4a5189376/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="col-start-2 row-start-1 mt-0.5 flex h-20 w-60 items-center justify-center rounded-xl border-2 border-gray-100
                transition-all hover:scale-105 hover:border-blue-500 duration-300">
                  <FaLinkedin className="m-2 h-16 w-16 text-blue-600 hover:text-gray-100" />
                </div>
                </a>
              <a
                href="mailto:devnamanthakur853@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="col-start-2 row-start-1 mt-0.5 flex h-20 w-60 items-center justify-center rounded-xl border-2 border-gray-100 transition-all 
                hover:scale-105 hover:border-red-500 duration-300">
                  <SiGmail className="m-2  h-16 w-16 text-red-600 hover:text-gray-100" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
