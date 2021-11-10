import "./App.css";
import { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import { HTMLComponent } from "./components/HTMLComponent";
require("codemirror/mode/javascript/javascript");
require("codemirror/lib/codemirror.css");

function App() {
  const [code, setCode] = useState("//Code Here");

  return (
    <>
      <CodeMirror
        value={code}
        options={{
          mode: "javascript",
          lineNumbers: true,
        }}
        onBeforeChange={(editor, change, newCode) => {
          setCode(newCode);
        }}
      />
      <HTMLComponent
        //Danger!!!!!
        htmlString={"<script>" + code + "</script>"}
      ></HTMLComponent>
    </>
  );
}

export default App;
