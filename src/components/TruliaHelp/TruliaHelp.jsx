import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { getTruliaData } from '../../services/truliaService';
import './TruliaHelp.css';

import BuyHome from '../BuyHome/BuyHome';
import RentHome from '../RentHome/RentHome';
import SeeNeighborhoods from '../SeeNeighborhoods/SeeNeighborhoods';

const TruliaHelp = () => {
  const truliaData = getTruliaData();

  return (
    <Router>
      <div className="trulia-help">
        <h2>See how Trulia can help</h2>
        <div className="help-options px-5">
          {truliaData.map((item, index) => (
            <Link to={item.link} key={index} className="option-link">
              <div className="option">
                <img src={item.imageUrl} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="btn-Help">{item.linkText}</button>
              </div>
            </Link>
          ))}
        </div>
        <Routes>
          <Route path="/buy-home" element={<BuyHome />} />
          <Route path="/rent-home" element={<RentHome />} />
          <Route path="/see-neighborhoods" element={<SeeNeighborhoods />} />
        </Routes>
      </div>
    </Router>
  );
};

export default TruliaHelp;
