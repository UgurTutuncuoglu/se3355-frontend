import Sideadds from "./Sideadds";
import Slider from "./Slider";
import Smalladd from "./Smalladd";
import Weather from "./Weather";

export default function Body() {
  return (
    <div className="container position-relative mb-4">
      <Sideadds />

      <div className="mt-3" id="main-content" style={{ position: "relative" }}>
        <div className="card">
          <div className="row p-1 p-lg-2">
            <div className="col-lg-8 mb-4" id="slider">
              <Slider />
            </div>

            <div className="col-lg-4 d-flex flex-column mb-4" id="component">
              <Smalladd/>
              <Weather />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
