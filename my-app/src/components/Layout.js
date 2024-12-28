import React from 'react';
import Main from "./Main";
import Header from "./Header";
import Description from "./Description";

const Layout = () => {
    return (
        <div>
            <div className="header_main_container">
                <Header/>
                <Main/>
            </div>
          <Description/>
        </div>
    );
};

export default Layout;
