import { createBrowserRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Root from "./Root";
import Personal from "./pages/Personal";
import Contract from "./pages/Contract";
import MatchingStart from "./pages/matching/MatchingStart";
import MatchingStage from "./pages/matching/MatchingStage";
import Login from "./pages/member/Login";
import SignUp from "./pages/member/SignUp";
import AdminMatchingList from "./pages/admin/AdminMatchingList";
import AdminMatchingDetail from "./pages/admin/AdminMatchingDetail";


const router = createBrowserRouter([
    {
        path:"/",
        element: <Root/>,
        children: [
            {
                path: "",
                element: <Main/>
            },
            {
                path: "personal",
                element : <Personal/>
            },
            {
                path: "contract",
                element : <Contract/>
            },
            {
                path: "login",
                element : <Login/>
            },
            {
                path: "signup",
                element : <SignUp/>
            },
            {
                path: "match",
                children : [
                    {
                        path: "start",
                        element : <MatchingStart/>
                    },
                    {
                        path: "stage",
                        element : <MatchingStage/>
                    }
                ]
            },
            {
                path: "admin",
                children : [
                    {
                        path : "matches",
                        element : <AdminMatchingList/>
                    },
                    {
                        path : "match/:id",
                        element : <AdminMatchingDetail/>
                    }
                ]
            }
        ]
    }
]);

export default router;