import React from 'react';
import { Link } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const About = () => {
    const data = [
        {
          name: "soft",
          web: 4000,
          Gra: 2400,
          amt: 2400
        },
        {
          name: "Gra",
          web: 3000,
          Gra: 1398,
          amt: 2210
        },
        {
          name: "Web",
          web: 2000,
          Gra: 9800,
          amt: 2290
        },
        {
          name: "MERN",
          web: 2780,
          Gra: 3908,
          amt: 2000
        },
        {
          name: "FULL S",
          web: 1890,
          Gra: 4800,
          amt: 2181
        },
        {
          name: "BAC",
          web: 2390,
          Gra: 3800,
          amt: 2500
        },
        {
          name: "R",
          web: 3490,
          Gra: 4300,
          amt: 2100
        }
      ];
    return (
        <div>

            
            <div className="row ">
                <div className="col-md-6">
                    <h5>Top sell </h5>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="Gra"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                        <Line type="monotone" dataKey="web" stroke="#82ca9d" />
                    </LineChart>
                </div>
                <div className="col-md-6 mt-5">
                        <h3>We are provide The best Course </h3>
                        <p>If you bye this course you can learn basic to advance every topic. that you can apply your job.</p>
                </div>
            <Link to={`/home`}>
              
              <button className="btn btn-primary mt-4">Home</button>
              </Link>
            </div>
        </div>
    );
};

export default About;