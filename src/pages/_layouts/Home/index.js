import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const Home = ({ children }) => {
    const isNavbarVisible = useSelector((state) => state.layout.navbar);


    return (
        <>
            <div className="wrapper">
                <Navbar />

                <div id="content" className={!isNavbarVisible ? "active" : ""}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default withRouter(Home);
