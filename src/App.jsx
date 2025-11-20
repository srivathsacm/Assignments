// import React from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import Post from "./Post";
// import Todo from "./Todo";

// const client = new QueryClient();

// function App() {
//   const[showImages,setShowImages]=useState(true);
//   return (
//     <QueryClientProvider client={client}>
//       <div>
//         {/* <Todo/> */}
//         <button onClick={()=>setShowImages((prev)=>!prev)}>{showImages? "Hide Images":"Show Images"}</button>
//         {showImages&&<Post/>}
//         <Post />
//       </div>
//     </QueryClientProvider>
//   );
// }

// // export default App
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, reset } from "./counterSlice";


// function App() {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <div
//         style={{
//           margin: "20px",
//           padding: "10px",
//           background: "lightblue",
//           borderRadius: "10px",
//         }}
//       >
//         <h2 style={{ color: "black" }}>Store using Redux</h2>
//         <h2 style={{ color: "black" }}>Count : {count}</h2>
//         <button
//           style={{
//             background: "#2bff24ff",
//             border: "none",
//             padding: "10px",
//             borderRadius: "6px",
//             cursor: "pointer",
//             margin: "10px",
//             color: "black",
//           }}
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <button
//           style={{
//             background: "#ff8b68ff",
//             border: "none",
//             padding: "10px",
//             borderRadius: "6px",
//             cursor: "pointer",
//             margin: "10px",
//             color: "black",
//           }}
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//         <button
//           style={{
//             background: "#6c44f0ff",
//             border: "none",
//             padding: "10px",
//             cursor: "pointer",
//             margin: "10px",
//             color: "black",
//           }}
//           onClick={() => dispatch(reset())}
//         >
//           Reset
//         </button>
        
//       </div>
//     </>
//   );
// }

// export default App;
import useZustandStore from './store';

function App() {
  const { count, increment, decrement, reset } = useZustandStore();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
