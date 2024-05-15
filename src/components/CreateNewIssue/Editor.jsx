import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor() {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("====================================");
    console.log("Value", value);
    var tempDivElement = document.createElement("div");
    tempDivElement.innerHTML = value;
    console.log("====================================");
    console.log(tempDivElement.textContent || tempDivElement.innerText);
    localStorage.setItem(
      "Description",
      tempDivElement.textContent || tempDivElement.innerText
    );
    console.log("====================================");
    console.log("====================================");
  }, [value]);

  return (
    <ReactQuill
      className="text-input-addIssue"
      theme="snow"
      placeholder="Enter Details here ..."
      value={value}
      onChange={setValue}
      style={{
        height: "200px",
        color: "white",
        borderRadius: "10px",
      }}
    />
  );
}

export default Editor;
