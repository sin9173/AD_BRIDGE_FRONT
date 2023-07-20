import { createBrowserRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Root from "./Root";


const router = createBrowserRouter([
    {
        path:"/",
        element: <Root/>,
        children: [
            {
                path: "",
                element: <Main/>
            }
        ]
    }
]);

export default router;