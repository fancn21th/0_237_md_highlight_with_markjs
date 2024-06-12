import { useEffect, useRef, useState } from "react";
import Mark from "mark.js";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import md from "./example.md?raw";

function MyMarkdown() {
  const [keyword] = useState("财务");
  const markdownRef = useRef(null);

  useEffect(() => {
    if (markdownRef.current) {
      const markInstance = new Mark(markdownRef.current);
      markInstance.unmark({
        done: () => {
          markInstance.mark(keyword);
        },
      });
    }
  }, [keyword]);

  return (
    <div ref={markdownRef}>
      <Markdown
        children={md}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      />
    </div>
  );
}

export default MyMarkdown;
