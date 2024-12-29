import React from 'react';
import Main from "./Main";
import Header from "./Header";
import Description from "./Description";
import Offers from "./Offers";

const Layout = () => {
    return (
        <div>
            <div className="header_main_container">
                <Header/>
                <Main/>
            </div>
          <Offers/>
          <Description/>
        </div>
    );
};

export default Layout;
