import { useEffect, useState } from "react";
import './Slider.css';
import { useDispatch } from "react-redux";
import { addToHistory } from "../../redux/actions/newsActions";
export default function Slider() {
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://se3355-backend.onrender.com/api/slider")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Failed to fetch slider images:", error));
  }, []);

   const handleClick = (item) => {
    dispatch(addToHistory(item.title));
   };

  return (
    <div className="col-12 col-lg-12 mb-4 px-0" id="slider1">
      <div
        className="carousel slide mb-4 position-relative"
        data-bs-ride="carousel"
        id="carouselExample"
        style={{ height: "460px" }}
      >
        <div className="carousel-inner h-100">
          {images.map((item, idx) => (
            <div className={`carousel-item h-100 ${idx === 0 ? 'active' : ''}`} key={item.id}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" onClick={() => handleClick(item)}>
                <img
                  src={item.image}
                  className="d-block w-100 img-fluid"
                  style={{ height: "100%", objectFit: "cover", borderRadius: "8px" }}
                  alt={`Slide ${idx + 1}`}
                />
              </a>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        <div className="carousel-indicators">
          {images.map((_, idx) => (
            <button
              type="button"
              key={idx}
              data-bs-target="#carouselExample"
              data-bs-slide-to={idx}
              className={idx === 0 ? 'active' : ''}
              aria-current={idx === 0 ? 'true' : undefined}
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}




