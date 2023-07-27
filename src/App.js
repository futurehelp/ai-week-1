// import React, { useEffect, useRef, useState } from "react";
// import ml5 from "ml5";
// import Loader from 'react-loader-spinner';
// import useInterval from '@use-it/interval';

// import ImageType from './ImageType';
// import Chart from './Chart';

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import "./App.css";

// let classifier;

// function App() {
//   const videoRef = useRef();
//   const [start, setStart] = useState(false);
//   const [result, setResult] = useState([]);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     classifier = ml5.imageClassifier("./model/model.json", () => {
//       navigator.mediaDevices
//         .getUserMedia({ video: true, audio: false })
//         .then((stream) => {
//           videoRef.current.srcObject = stream;
//           videoRef.current.play();
//           setLoaded(true);
//         });
//     });
//   }, []);

//   useInterval(() => {
//     if (classifier && start) {
//       classifier.classify(videoRef.current, (error, results) => {
//         if (error) {
//           console.error(error);
//           return;
//         }
//         setResult(results);
//         // console.log(results)
//       });
//     }
//   }, 500);

//   const toggle = () => {
//     setStart(!start);
//     setResult([]);
//   }

//   return (
//     <div className="container">
//       <Loader
//         type="Watch"
//         color="#00BFFF"
//         height={200}
//         width={200}
//         visible={!loaded}
//         style={{display:'flex', justifyContent:'center', marginTop:'30px' }}
//       />
//       <div className="upper">
//         <div className="capture">
//           <video
//             ref={videoRef}
//             style={{ transform: "scale(-1, 1)" }}
//             width="300"
//             height="150"
//           />
//           {loaded && (
//             <button onClick={() => toggle()}>
//               {start ? "Stop" : "Start"}
//             </button>
//           )}
//         </div>
//         {result.length > 0 && (
//           <div>
//             <Chart data={result[0]} />
//           </div>
//         )}
//       </div>
//       {result.length > 0 && (
//         <div className="results">
//           <ImageType data={result} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Students,
  Will,
  Alex,
  Gray,
} from "./screens";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Students />} />
          <Route exact path="/will" element={<Will />} />
          <Route exact path="/alex" element={<Alex />} />
          <Route exact path="/gray" element={<Gray />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;