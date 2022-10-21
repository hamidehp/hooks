import { useState, useEffect, useLayoutEffect } from "react";

/*
 * NOTE
 * -- Steps before useEffect function runs
 * 1- User take action -> clicking some button
 * 2- React changes the state
 * 3- React handles DOM mutation
 * 4- Browser prints DOM changes to browser screen
 * 5- After browser prints DOM changes to screen then useEffects fires
 */

const UseLayoutEffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log(`useEffect(🚀) : ${count}`); //NOTE Uncomment
  }, [count]);

  useEffect(() => {
    // console.log(`Second useEffect(🚀) : ${count}`); //NOTE Uncomment
  }, [count]);

  useLayoutEffect(() => {
    // console.log(`useLayoutEffect(💣) : ${count}`); //NOTE Uncomment
  }, [count]);

  return (
    <div className="mx-auto mt-5 d-grid gap-3 w-50">
      <h5 className="alert alert-dark text-center">
     useLayoutEffect hook
      </h5>
      <button
        className="btn btn-success"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        فقط اضافه بنما 😊
      </button>
      <p className="alert alert-light text-center">
        شمارش ات برابر می باشد با :{" "}
        <span className="badge rounded-pill bg-info">{count}</span>
      </p>
    </div>
  );
};

export default UseLayoutEffectExample;
