import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../servies/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState([]);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ article: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      console.log(newArticle);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
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

        <div className="w-full flex flex-col gap-3 max-h-64 overflow-y-auto font-inter">
          {allArticles.map((article, index) => (
            <div
              key={`link-${index}`}
              onClick={() => {
                setArticle(article);
              }}
              className="link_card"
            >
              <div
                className="copy_btn"
                onClick={() => {
                  handleCopy(article.url);
                }}
              >
                <img
                  src={copied === article.url ? tick : copy}
                  alt="Copy"
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p className="flex-1 text-blue-500 font-medium text-sm truncate">
                {article.url}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img
            src={loader}
            alt="Loading..."
            className="w-10 h-10 object-contain"
          />
        ) : error ? (
          <p className="text-zinc-800 text-center text-lg">
            Sorry, it wasnt your fault :( <br />
            <span className="text-zinc-600 text-sm">
              An error Occurred : {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-semibold font-satoshi">
                Article <span className="blue_gradient">Summary</span> :
              </h2>
              <p className="text-zinc-800 text-left text-lg font-inter">
                {article.summary}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
