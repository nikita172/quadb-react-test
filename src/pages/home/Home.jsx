import React, { useState, useEffect } from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import noImage from "../../assets/icons/no-image.jpg";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [openDescModal, setOpenDescModal] = useState(false);
  const [shows, setShows] = useState([]);
  const [descData, setDescData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`https://api.tvmaze.com/search/shows?q=all`);
      setShows(data.data);
    }
    getData()
  }, [])
  return (
    <div>
      <Header />
      <div className="mainContainer">
        <h4>Tickets are available. Book now!</h4>
        <div className="mainContainerWrapper">
          {shows && shows.map((item) => (
            <div className="cards" key={item.show.id} >
              <img src={`${item.show.image ? item.show.image.medium : noImage}`} />
              <span>{item.show.name} (in {item.show.language})</span>
              <span>premiered : {item.show.premiered}</span>
              <button onClick={() => navigate("/description", { state: item })}>Book now</button>
            </div>
          )
          )}
        </div>
      </div>
    </div>
  )
}

export default Home