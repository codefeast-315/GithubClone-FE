import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function App() {
    const [code, setCode] = useState(
        `function add(a, b) {\n  return a + b;\n}`
    );
    return (
        <CodeEditor
            value={code}
            language="js"
            placeholder="Please enter JS code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
                backgroundColor: "#171b23",
                borderRadius: '10px',
                minHeight: '400px',
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
        />
    );
}