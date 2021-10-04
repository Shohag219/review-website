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
    console.log(details);

    return (

        <div className="details">
            <MenuBar></MenuBar>
            <div className="row bg">
                {
                    details.map(detiel => <div className="col-md-4">
                        
                        <div className="card">
                            <div className="image mb-3">
                                <img src={detiel.img} alt="" />
                            </div>
                            <div className="view">
                            
                            </div>
                            <h3>{detiel.title}</h3>
                            <p>{detiel.title}</p>
                          

                        </div>
                    </div>)
                }
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Details;