import React from 'react';
import Main from "./Main";
import Header from "./Header";
import Description from "./Description";
import Offers from "./Offers";
import Property from "./Property";

const Layout = () => {
    return (
        <div>
            <div className="header_main_container">
                <Header/>
                <Main/>
            </div>
          <Offers/>
          <Description/>
        <Property/>
        </div>
    );
};

export default Layout;
