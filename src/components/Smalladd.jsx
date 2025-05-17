import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { addToHistory } from '../../redux/actions/newsActions';
export default function Smalladd() {
    const [adData, setAdData] = useState(null); 
    const dispatch = useDispatch();

    const handleClick = (caption) => {
    dispatch(addToHistory(caption));
    };


    useEffect(() => {
        
        const fetchAdData = async () => {
            try {
                const response = await fetch('https://se3355-backend.onrender.com/api/smalladd');
                const data = await response.json();
                setAdData(data[0]); 
            } catch (error) {
                console.error('Error fetching advertisement data:', error);
            }
        };

        fetchAdData();
    }, []); 

    if (!adData) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="card mb-3" style={{ height: "200px", overflow: "hidden" }}>
            <a href={adData.url} target="_blank" rel="noopener noreferrer" onClick={() => dispatch(addToHistory(adData.title))}>
                <img
                    src={adData.image}
                    className="card-img-top"
                    alt="Advertisement"
                    style={{ objectFit: "cover", height: "200px" }}

                />
            </a>
        </div>
    );
}



