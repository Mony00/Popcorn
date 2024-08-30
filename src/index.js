import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./StartRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRate={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // becouse of strict mode the cl is displayed twice but only in development mode not in productiojn mode
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "OK", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={5}
      size={24}
      color="red"
      className="test"
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);
