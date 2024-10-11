const AllCourseBanner = ({ pageTitle }) => {
  // const paths = routeInfo?.split("/").filter((x) => x);
  // console.log(paths);
  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
  ];
  return (
    <div className="bg-[#4A6DB0] mx-auto mb-16   px-4 items-center lg:flex justify-center py-20 md:px-8 rounded-xl">
      {pageTitle}
    </div>
  );
};

export default AllCourseBanner;
