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
import './styles.css';

interface Props {}

const editorConfig = {
  namespace: "React.js Demo",
  nodes: [ParagraphNode, TextNode],
  onError(error: Error) {
    throw error;
  },
  theme: ExampleTheme,
};

const placeholder = "Enter some rich text...";

const TextEditor: React.FC<Props> = () => {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container relative leading-5 mx-20">
        <ToolbarPlugin />
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
        </div>
      </div>
    </LexicalComposer>
  );
};

export default TextEditor;
