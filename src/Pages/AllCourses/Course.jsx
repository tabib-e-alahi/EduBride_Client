

const Course = ({course}) => {
 
    // console.log(course?.lectures);
    return (
        <div>
            <h1>{course?.lectures}</h1>
        </div>
    );
};

export default Course;