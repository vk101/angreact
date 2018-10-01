import React from "react";
//bootstrap, diffing, patching real dom
import {render} from "react-dom";
import App from "./app/App";
//binding real and virtual dom
render(<App /> /*virtual dom*/, 
        document.getElementById("root") /*real dom*/
);
