import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../servies/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const handleSubmit = async (e) => {

  };

  return (
    <section className="mt-16 w-full max-w-xl ">
      <div className="flex flex-col w-full gap-3">
        <form
          className="w-full flex justify-between items-center gap-3 relative"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="🔗"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter URL"
            className="url_input peer"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-zinc-600 peer-focus:text-zinc-700"
          >
            🔍
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
