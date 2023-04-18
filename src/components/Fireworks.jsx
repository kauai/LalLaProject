import Lottie from "lottie-react";
import Fireworks from "./Fireworks.json";

export const Fire = () => {
        return <Lottie style={{position:'absolute'}} animationData={Fireworks} />;
}