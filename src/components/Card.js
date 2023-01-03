import React from "react";
//import ReactDOM from 'react-dom/client';
// import { robots } from "./robots";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

// const Card = ReactDOM.createRoot(document.getElementById('root'));
// Card.render(
//   <React.StrictMode>

//  <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

//             <img alt ='robots' src={`https://robohash.org/${robots[0].id}?200x200`} />
//             <div>
//                 <h2>{robots[0].name}</h2>
//                 <p>{robots[0].email}</p>
//             </div>
//             </div>

//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

//         <img alt ='robots' src={`https://robohash.org/${robots[1].id}?200x200`} />
//             <div>
//                 <h2>{robots[1].name}</h2>
//                 <p>{robots[1].email}</p>
//             </div>
//         </div>

//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

//         <img alt ='robots' src={`https://robohash.org/${robots[2].id}?200x200`} />
//             <div>
//                 <h2>{robots[2].name}</h2>
//                 <p>{robots[2].email}</p>
//             </div>
//         </div>

//   </React.StrictMode>
// );

export default Card;
