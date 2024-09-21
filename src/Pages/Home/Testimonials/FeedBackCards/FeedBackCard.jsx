import { motion } from "framer-motion";

const FeedBackCard = ({ fb, handleFeedBackCardClick }) => {
  return (
    <motion.div
      layoutId={fb.id}
      onClick={() => handleFeedBackCardClick(fb.id)}
      className="h-60 lg:w-72 border rounded-sm shadow-sm flex justify-center items-center"
    >
      <motion.section className="  ">
        <motion.div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-12 lg:px-1">
          <motion.figure className="max-w-screen-md mx-auto">
            <motion.blockquote>
              <motion.p className="text-sm font-medium text-gray-900 md:text-lg ">
                "{fb.feedback}"
              </motion.p>
            </motion.blockquote>
            <motion.figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <motion.div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <motion.div className="pr-3 font-medium text-gray-900 ">
                  {fb.name}
                </motion.div>
                <motion.div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  {fb.course}
                </motion.div>
              </motion.div>
            </motion.figcaption>
          </motion.figure>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default FeedBackCard;
