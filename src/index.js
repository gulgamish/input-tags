import React from "react"
import ReactDOM from 'react-dom'
import InputTag from "./InputTag"

ReactDOM.render(
    <div style={{
    }}>
        <InputTag style={{
            width: "200px"
        }} max={3} error={true} errorMessage="dldlmzldmzlmùdlzùzmfùafkùaefùzafmaùfmaeùfmaekùm" />
    </div>,
    document.getElementById("root")
)