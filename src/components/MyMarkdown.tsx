import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import md from "./example.md?raw";

function MyMarkdown() {
  return (
    <>
      <Markdown
        children={md}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      />
    </>
  );
}

export default MyMarkdown;
