import React, { useEffect, useState } from "react";
import './CurrencyBar.css'; 

export default function CurrencyBar() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch("https://se3355-backend.onrender.com/api/currency")
      .then((response) => response.json())
      .then((data) => setCurrencies(data))
      .catch((error) => console.error("Failed to fetch currency data:", error));
  }, []);

  return (
    <div className="currency-bar px-3 py-2 bg-light border-top border-bottom d-flex flex-wrap justify-content-center">
      {currencies.map((currency) => (
        <span key={currency.id} className="currency me-3">
          {currency.currency} {currency.price}{" "}
          <span className={currency.arrow === "▲" ? "text-success" : "text-danger"}>
            {currency.percent} {currency.arrow}
          </span>
        </span>
      ))}
    </div>
  );
}





