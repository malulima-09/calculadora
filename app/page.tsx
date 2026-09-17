"use client";
import { useState } from "react";


export default function Home() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState<number | null>(null);


  const handleCalc = (op: string) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) return;


    switch (op) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : NaN);
        break;
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-80">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Calculadora
        </h1>


        <input
          data-cy="num1"
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Número 1"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />


        <input
          data-cy="num2"
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Número 2"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />


        <div className="grid grid-cols-4 gap-2 mb-6">
          <button
            data-cy="add"
            onClick={() => handleCalc("+")}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
          >
            +
          </button>
          <button
            data-cy="sub"
            onClick={() => handleCalc("-")}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
          >
            -
          </button>
          <button
            data-cy="mul"
            onClick={() => handleCalc("*")}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
          >
            *
          </button>
          <button
            data-cy="div"
            onClick={() => handleCalc("/")}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
          >
            /
          </button>
        </div>


        {result !== null && (
          <p
            data-cy="result"
            className="text-lg font-semibold text-center text-gray-700"
          >
            Resultado: {result}
          </p>
        )}
      </div>
    </div>
  );
}

