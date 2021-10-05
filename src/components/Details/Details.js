import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faPlay, faStar } from '@fortawesome/free-solid-svg-icons'

import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import "./Details.css";


const Details = () => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('./detiels.JSON')
            .then(res => res.json())
            .then(data => setDetails(data));

    }, []);
    return (

        <div className="details">
            <MenuBar></MenuBar>
            <h1 className="mb-3 mt-3">All the Course are here!!</h1>
            <div className="row mb-5">
                {
                    details.map(detiel => <div className="col-md-4 mb-4" key={detiel.img}>

                        <div className="card">

                            <div className="image mb-3">
                                <img src={detiel.img} alt="" />
                            </div>
                            <div className="view">
                                <p><FontAwesomeIcon icon={faStar} />{detiel.ratting}</p>
                                <p><FontAwesomeIcon icon={faPlay} />{detiel.vidio}</p>
                                <p><FontAwesomeIcon icon={faDollarSign} />{detiel.price}</p>

                            </div>
                            <div className="card-title">
                                <h5>{detiel.title}</h5>
                                <p>{detiel.name}</p>
                            </div>

                            <button className="btn btn-primary button">Bye Now</button>
                        </div>
                    </div>)
                }
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Details;