import Lottie from "lottie-react";
import rocket_loader from '../../../assets/rocket_loader.json'

const PageLoader = () => {
    return (
        <Lottie className="h-screen w-64 mx-auto" animationData={rocket_loader}></Lottie>
    );
};

export default PageLoader;