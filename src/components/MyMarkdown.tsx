import { useEffect, useRef, useState } from "react";
import Mark from "mark.js";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import md from "./example.md?raw";

function getRange(str: string, keyword: string) {
  const start = str.indexOf(keyword);

  console.log({
    [start]: str[start],
  });

  return {
    start,
    length: keyword.length,
  };
}

function MyMarkdown() {
  const [keyword] = useState("财务");
  const [computedRange] = useState(() => getRange(md, keyword));
  const [range] = useState({
    start: 0,
    length: 2,
  });
  const markdownRef = useRef(null);

  useEffect(() => {
    if (markdownRef.current) {
      const markInstance = new Mark(markdownRef.current);
      markInstance.unmark({
        done: () => {
          // markInstance.mark(keyword);
          markInstance.markRanges([range]);
        },
      });
    }
  }, [keyword]);

  return (
    <>
      <b>debug info:</b>
      <pre>text search range: {JSON.stringify(computedRange, null, 2)}</pre>
      <pre>markjs range: {JSON.stringify(range, null, 2)}</pre>
      <hr />
      <div ref={markdownRef}>
        <Markdown
          children={md}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        />
      </div>
    </>
  );
}

export default MyMarkdown;
