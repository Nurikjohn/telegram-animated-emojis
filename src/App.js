import Lottie from "react-lottie";

import "./App.css";

const animationData = require("./cat.json");

const App = () => {
    const options = {
        loop: false,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <div className="App">
            <Lottie options={options} height={400} width={400} />
        </div>
    );
};

export default App;
