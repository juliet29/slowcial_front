import React, { useMemo } from "react";
import { type InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import ToolbarPlugin from "./ToolbarPlugin";
import { ParagraphNode, TextNode } from "lexical";
import ExampleTheme from "./ExampleTheme";
import "./styles.css";
import { BeautifulMentionsPlugin, BeautifulMentionNode } from "lexical-beautiful-mentions";

interface Props {}

const mentionItems = {
  "@": ["Anton", "Boris", "Catherine", "Dmitri", "Elena", "Felix", "Gina"],
  "#": ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"],
  "due:": ["Today", "Tomorrow", "01-01-2023"],
};

const editorConfig = {
  namespace: "React.js Demo",
  nodes: [ParagraphNode, TextNode, BeautifulMentionNode],
  onError(error: Error) {
    throw error;
  },
  theme: ExampleTheme,
};

const placeholder = "Enter some rich text... or a @mention or #hashtag!";

const TextEditor: React.FC<Props> = () => {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container relative leading-5 mx-20">
        {/* <ToolbarPlugin /> */}
        <div className="editor-inner relative">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="editor-input relative min-h-36"
                aria-placeholder={placeholder}
                placeholder={<div className="editor-placeholder overflow-hidden absolute top-4 left-2 inline-block">{placeholder}</div>}
              />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <BeautifulMentionsPlugin // 👈 add the mentions plugin
            items={mentionItems}
          />
        </div>
      </div>
    </LexicalComposer>
  );
};

export default TextEditor;
