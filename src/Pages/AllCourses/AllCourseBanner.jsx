import React from "react";

const AllCourseBanner = ({ routeInfo }) => {
  const paths = routeInfo?.split("/").filter((x) => x);
  console.log(paths);
  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
  ];
  return (
    <div className="bg-gray-800 mx-auto mb-16   px-4 items-center lg:flex justify-center py-20 md:px-8 rounded-xl">
     <h1 className="text-white font-bold text-center text-4xl xl:text-5xl">
          Our <br />
          <span className="text-indigo-400"> Online Courses</span>
        </h1>
    </div>
  );
};

export default AllCourseBanner;
