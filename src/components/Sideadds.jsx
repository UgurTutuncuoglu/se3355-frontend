import { useEffect, useState } from "react";
import './Sideadds.css';
import { useDispatch } from "react-redux";
import { addToHistory } from "../../redux/actions/newsActions";
export default function Sideadds() {
  const [visible, setVisible] = useState(true);
  const [ads, setAds] = useState([]);
  const dispatch = useDispatch();

  const closeAd = () => setVisible(false);

  const handleClick = (item) => {
  dispatch(addToHistory("Yan Reklam " + item.id));
  };

  useEffect(() => {
    fetch("https://se3355-backend.onrender.com/api/sideadd")
      .then((response) => response.json())
      .then((data) => {
        setAds(data);
      })
      .catch((error) => {
        console.error("Failed to fetch side adds:", error);
      });
  }, []);

  const renderImages = (adList) => (
    <>
      <div className="ad-img-wrapper">
        <button className="close-ad-btn" onClick={closeAd}>×</button>
        {adList[0] && <a href={adList[0].url} target="_blank" onClick={() => handleClick(adList[0])} ><img src={adList[0].image} alt="ad1" className="ad-img" /></a>}
      </div>
      {adList[1] && <a href={adList[1].url} target="_blank" onClick={() => handleClick(adList[1])}><img src={adList[1].image} alt="ad2" className="ad-img" /></a>}
      {adList[2] && <a href={adList[2].url} target="_blank" onClick={() => handleClick(adList[2])}><img src={adList[2].image} alt="ad3" className="ad-img" /></a>}
    </>
  );

  const leftAds = ads.slice(0, 3);
  const rightAds = ads.slice(3, 6);

  return (
    <>
      {visible && (
        <>
          <div className="sideadds-float-wrapper d-none d-xl-block">
            <div className="side-ad left-ad">{renderImages(leftAds)}</div>
            <div className="side-ad right-ad">{renderImages(rightAds)}</div>
          </div>

          <div className="sideadds-inline-wrapper d-none d-md-flex d-xl-none justify-content-center gap-4 flex-wrap my-3">
            <div className="side-ad-inline">{renderImages(leftAds)}</div>
            <div className="side-ad-inline">{renderImages(rightAds)}</div>
          </div>

          <div className="d-flex d-md-none flex-column align-items-center gap-2 my-3">
            <button className="close-ad-btn mobile-close-btn" onClick={closeAd}>×</button>
            {ads.map((ad, index) => (
              <a href={ad.url} key={index} target="_blank" onClick={() => handleClick(ad)}>
                <img src={ad.image} alt={`ad-${index}`} className="ad-img" />
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
}




















// import { useState } from "react";
// import './Sideadds.css';

// export default function Sideadds() {
//   const [visible, setVisible] = useState(true);
//   const closeAd = () => setVisible(false);
//   if (!visible) return null;

//   const getRandomImg = () => `https://picsum.photos/seed/${Math.random()}/100`;

//   const renderImages = () => (
//     <>
//       <div className="ad-img-wrapper">
//         <button className="close-ad-btn" onClick={closeAd}>×</button>
//         <img src={getRandomImg()} alt="ad1" className="ad-img" />
//       </div>
//       <img src={getRandomImg()} alt="ad2" className="ad-img" />
//       <img src={getRandomImg()} alt="ad3" className="ad-img" />
//     </>
//   );

//   return (
//     <>
//       {/* Desktop & Large tablets: float left/right */}
//       <div className="sideadds-float-wrapper d-none d-xl-block">
//         <div className="side-ad left-ad">{renderImages()}</div>
//         <div className="side-ad right-ad">{renderImages()}</div>
//       </div>

//       {/* Tablets (md - xl): inline under main content */}
//       <div className="sideadds-inline-wrapper d-none d-md-flex d-xl-none justify-content-center gap-4 flex-wrap my-3">
//         <div className="side-ad-inline">{renderImages()}</div>
//         <div className="side-ad-inline">{renderImages()}</div>
//       </div>

//       {/* Mobile: stacked vertical ads */}
//       <div className="d-flex d-md-none flex-column align-items-center gap-2 my-3">
//         {renderImages()}
//       </div>
//     </>
//   );
// }
