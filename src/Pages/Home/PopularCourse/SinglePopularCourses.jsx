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
    ratings
  } = p;
  return (
    <div className="relative max-w-sm h-[360px] border border-solid border-gray-200 shadow-sm  rounded-sm font-sans">
      <a href="#">
        <img className="rounded-t-sm" src={image} alt="" />
      </a>
      <div className="p-5 ">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
      
        <p className="mb-1 font-normal text-sm text-gray-600 text-justify">
          {description}
        </p>
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 absolute bottom-2"
        >
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default SinglePopularCourses;
