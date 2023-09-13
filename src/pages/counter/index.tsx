import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./../../store/counter/counterSlice";

interface ICounter {
  counter: {
    value: number;
  };
}

const Counter = () => {
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState<string>(""); // Initialize as an empty string

  const counterValue = useSelector((state: ICounter) => state.counter.value);

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(Number(incrementAmount))); // Convert incrementAmount to a number before dispatching
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Counter Value: {counterValue}</h1>
      <div className="space-x-4 flex">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 w-16 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            onClick={handleIncrementByAmount}
          >
            Increment by Amount
          </button>
        </div>
      </div>
      {/* Your component code here */}
    </div>
  );
};

export default Counter;
