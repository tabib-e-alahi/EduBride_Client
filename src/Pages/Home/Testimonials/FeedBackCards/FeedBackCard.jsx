const FeedBackCard = ({ fb }) => {
  return (
    <div className="carousel__cell h-60 lg:w-72 border rounded-sm shadow-sm flex justify-center items-center">
      <section className="  ">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-12 lg:px-1">
          <figure className="max-w-screen-md mx-auto">
            <blockquote>
              <p className="text-sm font-medium text-gray-900 md:text-lg ">
                "{fb.feedback}"
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 ">{fb.name}</div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  {fb.course}
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default FeedBackCard;
