import React, { useEffect, useState } from 'react'
import './covid.css';
const Covid=()=>{
    const [data, setData]= useState([]);
    const getCovidData= async ()=>{
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualdata = await res.json();
            console.log(actualdata.statewise[0]);
            setData(actualdata.statewise[0]);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
         getCovidData();
    }, []);
    return (
        <>
        <h1>🔴 LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <section>
            <ul>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                     <p className="card_name"><span>OUR</span> COUNTRY</p>
                     <p className="card_total card_small">INDIA</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                     <p className="card_name"><span>TOTAL</span> RECOVERED</p>
                     <p className="card_total card_small">{data.recovered}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                     <p className="card_name"><span>TOTAL</span> CONFIRMED</p>
                     <p className="card_total card_small">{data.confirmed}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                     <p className="card_name"><span>TOTAL</span> DEATH</p>
                     <p className="card_total card_small">{data.deaths}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                     <p className="card_name"><span>TOTAL</span> ACTIVE</p>
                     <p className="card_total card_small">{data.active}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                     <p className="card_name"><span>LAST</span> UPDATED</p>
                     <p className="card_total card_small">13/08/2021</p>
                    </div>
                </div>
            </li>

            </ul>
        </section>
        </>
    )
}
export default Covid;