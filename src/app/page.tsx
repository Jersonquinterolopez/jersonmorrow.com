import Image from "next/image";
import universe from "public/images/universe.jpg";
import universeFriends from "public/images/universe-friends.jpeg";
import fixie from "public/images/fixie.jpg";
import dev from "public/images/dev.jpg";
import hackTeam from "public/images/hack-team.jpg";
import universeRecap from "public/images/universe-recap.jpg";
import wellbe from "public/images/wellbe.png";

function LinkedinSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      className="mercado-match"
      width="24"
      height="24"
      focusable="false"
    >
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
    </svg>
  );
}

function FiguroSVG() {
  return (
    <svg
      className="text-neutral-700 dark:text-neutral-100 h-5"
      viewBox="0 0 1140 404"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor" fill-rule="evenodd">
        <path d="M243.22.59c15.24-2.986 31.786 5.627 38.12 19.866 4.506 9.253 4.733 20.533.16 29.813-4.56 9.733-13.653 17.293-24.133 19.72-17.573 4.733-37.386-7.44-41.786-25.053-4.546-14.36 2.147-31.08 14.627-39.133 3.96-2.573 8.44-4.146 13.013-5.213M.028 7.563c2.781-.186 5.536-.28 8.318-.28 61.239.12 122.464-.08 183.703.12.106 16.2-.027 32.373.053 48.572.053 3.44-.053 6.907-.453 10.32-42.84-.08-85.705-.186-128.552.067.083 19.306-.39 38.639.25 57.918 39.61.36 79.263.08 118.875.147.36 19.44.147 38.866.107 58.305-39.613.2-79.252.094-118.899.054-.584 5.093-.36 10.253-.36 15.373 0 32.199-.029 64.411 0 96.624-15.302.413-30.604.08-45.905.16-5.703.026-11.434.12-17.165-.254.139-95.717.11-191.421.028-287.126M516.014 65.975c1.533-2.066 3.986-4.053 6.72-3.08 3.2.534 4.026 4.12 4.173 6.853.44 11.307-.28 23.027-5.213 33.4-3.334 8.053-9.48 14.44-15.92 20.146 2.653 4.893 6.093 9.28 8.6 14.226 4.013 7.867 7.24 16.12 9.413 24.68 2.027 8.186 2.587 16.639 3.146 25.025-.56 10.974-1.506 22.107-5.12 32.56-9.572 31.386-34.519 57.452-65.238 68.558-23.213 8.56-49.505 8.613-72.745.027-15.666-5.707-29.946-15.187-41.279-27.493-19.692-20.453-30.079-49.319-29.026-77.651.76-12.28 3.347-24.44 7.8-35.906 9.293-22.826 26.493-42.386 48.2-53.959 16.452-9.253 35.425-13.04 54.131-13.093 19.306.053 38.626 0 57.932.027 4.853-.08 9.826.426 14.533-1.027 7.733-2.266 15-6.746 19.893-13.293M366.937 187.6c-.64 18.2 9.547 35.906 24.8 45.479 18.84 12.306 45.465 10.48 62.505-4.2 12.213-9.853 19.426-25.6 19.2-41.28-35.48-.066-70.999 0-106.505 0M1023.854 80.788c6.507-.947 13.147-.893 19.653.093 25.986 2.174 50.812 14.8 68.372 34.133 15.933 17.346 26.08 40.159 27.746 63.772 1.786 21.412-2.973 43.345-13.68 61.958-9.253 16.426-22.946 30.333-39.212 39.76-24.413 14.359-54.652 18.052-81.851 10.439-25.746-6.96-48.333-24.32-62.332-47.092-10.2-16.96-16.013-36.773-15.707-56.666-.2-30.865 14.013-61.425 37.493-81.29 16.546-14.387 37.732-23.227 59.518-25.107m1.027 53.932c-15.053 2.573-28.92 11.666-36.772 24.866-7.334 11.253-8.76 25.333-6.84 38.373 2.026 11.413 8.346 21.852 16.773 29.639 9.426 8.16 21.693 13.346 34.212 13.4 15.76.56 31.506-6.72 41.68-18.813 10.519-12.227 14.972-29.52 11.519-45.293-2.893-15.253-13.066-28.746-26.506-36.212-10.293-5.933-22.466-7.533-34.066-5.96M864.992 99.348c15.106-7.827 32.759-7.693 49.118-5.027 1.027 5.947.667 12.013.694 18.026-.254 12.64.533 25.333-.494 37.933-15.546-4.187-32.212-5.507-47.865-1.094-9.093 2.667-17.36 8.667-21.88 17.107-4.813 9.146-6.733 19.573-7.186 29.839-.253 32.786-.16 65.572-.053 98.37-7.973.694-16 .24-23.96.36-12.4-.08-24.826.227-37.199-.173 0-65.665-.026-131.33 0-196.995 20.226.027 40.426-.08 60.652.067 1.013 10.226-.027 20.506.587 30.746 3.32-4.307 5.8-9.173 9.28-13.306 5.04-6.347 11.226-11.88 18.306-15.853M218.875 97.614c20.319-.173 40.639-.093 60.958-.04-.027 65.719-.027 131.41 0 197.115-14.6.507-29.186.12-43.812.227-5.693.027-11.427.107-17.146-.28.106-65.652.106-131.343 0-197.022M555.386 97.561a7731.6 7731.6 0 0 1 60.919 0c.28 37.12-.107 74.252.2 111.37.666 10.267 2.586 21.32 9.746 29.16 5.827 6.4 14.893 8.16 23.173 7.746 9.8.027 20.106-3.746 25.892-12.026 7.8-10.52 7.88-24.226 8.774-36.76V97.535c20.332.054 40.679-.253 61.011.134a48411.64 48411.64 0 0 0 0 196.795c-19.52.786-39.092.253-58.651.306-.24-8.92.093-17.852-.187-26.772-2.427 3.08-4.427 6.426-6.933 9.453-10.387 11.973-25.373 19.64-40.96 21.68-16.746 1.346-34.345.173-49.518-7.64-13.173-6.654-22.44-19.387-26.893-33.32-5.826-18.066-6.773-37.319-6.546-56.172-.027-34.825 0-69.638-.027-104.437"></path>
        <path d="M313.272 295.01c17.853 0 35.706-.107 53.545.066 0 13.853 5.547 27.64 15.4 37.386 10.813 11.293 26.906 17.16 42.386 15.68 10.72-.667 20.92-5.36 29.359-11.907 11.906-10.093 19.546-25.373 19.24-41.132 17.932-.227 35.892-.174 53.825-.027-.387 18.026-4.68 36.053-13.533 51.839-8.693 15.226-20.8 28.666-35.64 38.066-27.012 17.8-62.438 22.212-92.85 11.12-17.76-5.987-33.64-17.107-45.84-31.307-16.625-19.106-25.839-44.425-25.892-69.785"></path>
      </g>
    </svg>
  );
}

function Wellbe() {
  return (
    <Image alt="Wellbe logo" src={wellbe} width={70} height={70} priority />
  );
}

function GithubSVG() {
  return (
    <svg
      className="h-5"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 .667a8 8 0 00-2.53 15.583c.4.073.547-.173.547-.386 0-.2-.007-.733-.013-1.44-2.227.493-2.7-1.093-2.7-1.093a2.128 2.128 0 00-.893-1.173c-.72-.493.053-.48.053-.48a1.69 1.69 0 011.227.84 1.714 1.714 0 002.347.667 1.73 1.73 0 01.507-1.093c-1.76-.2-3.613-.853-3.613-3.787a2.97 2.97 0 01.8-2.08 2.75 2.75 0 01.08-2.053s.653-.213 2.133.8a7.39 7.39 0 013.947 0c1.48-1.013 2.133-.8 2.133-.8a2.75 2.75 0 01.08 2.053 2.97 2.97 0 01.8 2.08c0 2.947-1.867 3.587-3.627 3.773a1.887 1.887 0 01.547 1.467c0 1.067-.013 1.933-.013 2.187 0 .213.147.467.547.387A8 8 0 008 .667"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Jerson Morrow
      </h1>
      <p className="prose prose-neutral dark:text-neutral-400 tracking-wide">
        I have worked as a full-stack engineer for the majority of my career but
        I am known most for my “superpower” in the front end. This is largely
        due to my natural taste for design and my unique ability to always find
        the right intersection between UI/UX and web architecture.
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me at UW explaining software architecture"
            src={dev}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me at Github Unverse"
            src={universe}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me speaking at the Fixie AI LLM hackathon"
            src={fixie}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me and my friends winning thing of beauty award at the Fixie LLM hackathon"
            src={hackTeam}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me at Github universe"
            src={universeRecap}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="Me and my github friends at Github Universe"
            src={universeFriends}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="prose prose-neutral dark:text-neutral-400 tracking-wide">
        <p>My experience as a cofounder engineer at:</p>
        <div className="my-8 flex flex-row space-x-2 w-full h-14 overflow-x-auto">
          <div className="border border-neutral-200 dark:border-neutral-700 bg-slate-700 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <Wellbe />
          </div>
        </div>
        <p>
          was pivotal for discovering my talents in front-end development. This
          served as a launchpad for my next position at:
        </p>
        <div className="my-8 flex flex-row space-x-2 w-full h-14 overflow-x-auto">
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <FiguroSVG />
          </div>
        </div>
        <p>where I managed web architecture and design systems.</p>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="dark:text-neutral-400 tracking-wide">
          While working with modern web technologies {`I'm`} constantly
          expanding my knowledge in different areas like AI. I like the idea of
          making an impact in the web development community, building compilers,
          frameworks, and tools. {`That's why I'm`} so hyped about languages
          like Rust and technologies like Web Assembly.
        </p>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-700" />
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/jersonmorrow"
          >
            <LinkedinSVG />
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jersonmorrow"
          >
            <GithubSVG />
          </a>
        </li>
      </ul>
    </section>
  );
}
