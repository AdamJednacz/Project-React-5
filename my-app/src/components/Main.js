import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faMagnifyingGlass, faUsers} from "@fortawesome/free-solid-svg-icons"
import Input from "./reusable_components/input";

const Main = () => {




    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <h1>Explore your place to stay</h1>
                </div>
                <div className="row">
                  <form>
                    <div className="search">
                        <Input icon={faMagnifyingGlass} type={'text'} placeholder={"Search your place"} />
                    </div>
                    <div className="check">
                      <Input type={'date'} placeholder={'Check in'}/>
                      <Input type={'date'} placeholder={'Check out'} />
                    </div>
                    <div className="number_of_guests">
                      <FontAwesomeIcon icon={faUsers} />
                      <select className="number_of_guests_select">
                        <option className="number_of_guests_select_option" value="" disabled selected>Guests</option>
                        {Array.from({length: 5}, (_, i) => (
                          <option className="number_of_guests_select_option" key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button>Checkout</button>
                  </form>
                </div>
              <div className="row">
                <h5>We provide a variety of the best lodging accommodations for those of you who need it.</h5>
                <p>Don’t worry about the quality of the service.</p>
              </div>
            </div>
        </main>
    );
};

export default Main;
