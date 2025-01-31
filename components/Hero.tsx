import { Link } from "react-scroll";

interface HeroProps {
  name: string;
  greeting: string;
  tag: string;
}

const Hero = ({ name, greeting, tag }: HeroProps) => {
  return (
    <div className="content-padding flex min-h-[85vh] flex-col bg-gradient-to-b from-black-dark to-black">
      <main className="my-4 flex flex-col justify-between sm:my-28 md:flex-row">
        <div>
          <div className="text-4xl lg:text-5xl">
            {greeting}!
            <span className="inline-block origin-bottom-right animate-wave select-none">
              &#128075;
            </span>
            <br />
            <span className="font-emphasis text-3xl">$ whoami</span> <br />
            <span className="font-emphasis text-red">{name}</span>
          </div>
          <div className="text-md flex select-none items-end text-gray xl:text-xl">
            {tag}
          </div>
        </div>
        <p className="mt-5 text-lg md:m-0 md:w-1/2 lg:text-xl">
          A sophomore CSE undergrad who loves to{" "}
          <span className="font-bold">develop embedded systems</span>. Always
          in for working on a project to{" "}
          <span className="font-bold">
            make the internet a better place.
          </span>
        </p>
      </main>
      <div className="flex animate-bounce cursor-pointer select-none place-content-center pt-20 text-red">
        <Link to="skills" smooth="true" duration={700}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="1"
            viewBox="0 0 16 16"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
