import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const SinglePopularCourses = ({ p }) => {
  const {
    title,
    author,
    description,
    lessons,
    image,
    enrolled_students,
    price,
    duration_hours,
    ratings,
  } = p;


  const truncateWords = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="relative max-w-sm h-[360px] border border-solid border-gray-200 shadow-sm  rounded-sm font-sans">
      <a href="#">
        <img className="rounded-t-sm" src={image} alt="" />
      </a>
      <div className="p-5 ">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>

        <p className="mb-1 font-normal overflow-ellipsis text-sm text-gray-600 text-justify">
          {truncateWords(description, 8)}
        </p>
        
        <p className="text-sm">{author}</p>
        <div className="flex gap-1">
          <Rating style={{ maxWidth: 90 }} value={ratings} readOnly />
          <span className="font-bold">({ratings})</span>
        </div>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 absolute bottom-2">
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default SinglePopularCourses;
