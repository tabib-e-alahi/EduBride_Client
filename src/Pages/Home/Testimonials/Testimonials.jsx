import { useEffect, useState } from "react";
import FeedBackCard from "./FeedBackCards/FeedBackCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const Testimonials = () => {
  const [feedBacks, setFeedBacks] = useState([]);

  useEffect(() => {
    fetch("./feedback.json")
      .then((res) => res.json())
      .then((data) => setFeedBacks(data));
  }, []);

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="wrapper ">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          {/* <div className="carousel__cell number-slide1 ">1</div>
         <div className="carousel__cell number-slide2">2</div>
         <div className="carousel__cell number-slide3">3</div>
         <div className="carousel__cell number-slide4">4</div>
         <div className="carousel__cell number-slide5">5</div>
         <div className="carousel__cell number-slide6">6</div> */}
          {feedBacks.map((fb) => (
            <FeedBackCard
              key={fb.id}
              fb={fb}
            ></FeedBackCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
