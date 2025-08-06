import React ,{createContext, useState } from "react";



export const EditorContext = createContext();
export const EditorProvider =({children})=>{
    const [htmlCode ,setHtmlCode] =useState("");
    const [cssCode ,setCssCode ] = useState("");
    const [jsCode ,setJsCode] = useState("");

    return(
        <EditorContext.Provider value={{htmlCode,setHtmlCode,cssCode,setCssCode,jsCode,setJsCode}}>
            {children}
        </EditorContext.Provider>
    )
}