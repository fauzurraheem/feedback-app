import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import React from "react";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import {FeedbackProvider} from "./context/feedbackContext"


function App(){
   
    
    return(
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>   
                        </Route>
                        <Route path="/about" element={<AboutPage />} />
                        {/* <Route path="/post/:id/:name" element={<Post />} /> */}
                        <Route path="/post/*" element={<Post />} />
                    </Routes>
                    
                    <Card>
                        <NavLink to='/' activeClassName='active'>
                            Home
                        </NavLink>

                        <NavLink to='/about' activeClassName='active'>
                            About
                        </NavLink>
                    </Card>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}



export default App