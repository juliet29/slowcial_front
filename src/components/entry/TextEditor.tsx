import { MDXEditor, headingsPlugin, markdownShortcutPlugin, linkPlugin} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

interface Props {}
const TextEditor: React.FC<Props> = () => {
  return (
    <div>
      <MDXEditor markdown={"# Hello World"} className="border " plugins={[headingsPlugin(), linkPlugin(), markdownShortcutPlugin()]} />
    </div>
  );
};

export default TextEditor;
