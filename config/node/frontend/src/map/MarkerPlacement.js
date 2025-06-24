// import React, { useState } from "react";
// import { Marker, Popup, Circle, useMapEvent } from "react-leaflet";

// function MarkerPlacement() {
//   const [coord, setCoord] = useState();
//   const [mass, setMass] = useState(0);

//   const promienRazenia = (mass) => {
//     console.log(Math.pow(mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89));
//     return Math.pow(mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89);
//   };

//   const map = useMapEvent({
//     click: (event) => {
//       console.log(event.latlng);
//       setCoord(event.latlng);
//     },
//   });
//   return (
//     <div>
//       {coord ? (
//         <Marker position={coord}>
//           <Popup>
//             Podaj mase ładunku wybuchowego w kg
//             <input
//               type="range"
//               min="0"
//               max="50000000"
//               defaultValue="0"
//               onChange={(event) => setMass(event.target.value)}
//             />
//             {mass} kg
//           </Popup>
//           <Circle
//             center={coord}
//             radius={promienRazenia(mass)}
//             pathOptions={{ color: "red" }}
//           ></Circle>
//         </Marker>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }

// export default MarkerPlacement;
