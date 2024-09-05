import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedBackCard from "./FeedBackCards/FeedBackCard";
import ExpandedFeedBackCard from "./FeedBackCards/ExpandedFeedBackCard";

const Testimonials = () => {
  const [feedBacks, setFeedBacks] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch("./feedback.json")
      .then((res) => res.json())
      .then((data) => setFeedBacks(data));
  }, []);

  const handleFeedBackCardClick = (id) => {
    setSelectedId(id);
  };

  const handleFeedBackCardClose = () => {
    setSelectedId(null);
  };

  return (
    <div className="grid grid-cols-4 gap-10 max-w-7xl mx-auto mb-10 border">
      {feedBacks.map((fb) => (
        <FeedBackCard
          key={fb.id}
          fb={fb}
          handleFeedBackCardClick={handleFeedBackCardClick}
        ></FeedBackCard>
      ))}

      <AnimatePresence>
        {selectedId && (
          <ExpandedFeedBackCard fb={feedBacks.find((fb) => fb.id === selectedId)}
          handleFeedBackCardClose={handleFeedBackCardClose}></ExpandedFeedBackCard>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testimonials;
