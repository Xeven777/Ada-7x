import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full flex justify-between items-center mb-10 pt-4">
        <img src={logo} alt="Ada-7x" className="w-28 object-contain" />
        <button
          type="button"
          className="black_btn"
          onClick={() => window.open("https://github.com/Xeven777")}
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        GPT-4 powered <br />
        <span className="orange_gradient font-bold text-7xl">ADA-7x</span>
      </h1>
      <h2 className="desc">
        {" "}
        Simplify your articles down with Ada-7x, a powerful article summarizer
        powered by GPT-4.
      </h2>
    </header>
  );
};

export default Hero;
