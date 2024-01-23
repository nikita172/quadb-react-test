import React, { useState, useEffect } from 'react'
import "./descScreen.css";
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import noImage from "../../assets/icons/no-image.jpg"
const DescScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
  })

  useEffect(() => {
    setFormData({ name: location.state.show.name, date: location.state.show.premiered })
  }, [])

  const formSubmitHandler = (event) => {
    event.preventDefault()
    localStorage.setItem("movieTickets", JSON.stringify([event.target[0].value, event.target[1].value, event.target[2].value]));
    setOpenForm(false);
    navigate("/")
  }

  return (
    <div>
      <Header />
      <div className="descContainer">
        <div className="descWrapper">
          <div className="descLeft">
            <img src={location.state.show.image ? location.state.show.image.medium : noImage} />
          </div>
          <div className="descRight">
            <span>{location.state.show.name}</span>
            <div className="genres">
              <span>Genres: </span>
              {location.state.show.genres && location.state.show.genres.map((item, index) => (
                <span key={index}>{item} </span>
              ))}

            </div>
            <span>Language: {location.state.show.language}</span>
            <span>Premiered: {location.state.show.premiered}</span>
            <div className='desc' dangerouslySetInnerHTML={{ __html: location.state.show.summary }} />
            <button onClick={() => setOpenForm(!openForm)}>Book Now</button>
          </div>
        </div>
      </div>
      {openForm &&
        <div className="formContainer">
          <div className="formWrapper">
            <div className="formHeader">
              <h4>only select tickets</h4>
              <button className='closeFormBtn' onClick={() => setOpenForm(!openForm)}>X</button>
            </div>
            <form className='form' onSubmit={formSubmitHandler}>
              <span>Movie Name</span>
              <input type="text" name='name' value={formData.name} />
              <span>No. of tickets</span>
              <input type="number" name="noOfTickets" required />
              <span>Date</span>
              <input type="text" name="date" value={formData.date} />
              <button className='submitBtn' type='submit'>Submit</button>
            </form>
          </div>
        </div>
      }
    </div>
  )
}

export default DescScreen