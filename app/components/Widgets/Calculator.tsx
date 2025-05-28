'use client'
import { useState } from "react";

type Mode = 'event' | 'construction';

const PortaPottyCalculator = () => {
  const [mode, setMode] = useState<Mode>('event');
  const [guests, setGuests] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const calculateUnits = (): number => {
    if (mode === 'event') {
      const units = Math.ceil((guests * duration) / 50); // Example formula
      return guests === 0 || duration === 0 ? 0 : units;
    } else {
      // Placeholder for construction logic
      return 2;
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-semibold text-center mb-6">
        How Many Porta John Rentals Do You Need For Your Event?
      </h1>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setMode('event')}
          className={`px-4 py-2 border rounded-full bg-minor text-white`}
        >
          Porta Potty Calculator
        </button>
        {/* <button
          onClick={() => setMode('construction')}
          className={`px-4 py-2 border rounded-r-full ${mode === 'construction' ? 'bg-purple-100 text-purple-600 font-bold' : 'bg-white text-gray-600'}`}
        >
          Construction Calculator
        </button> */}
      </div>

      {mode === 'event' && (
        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <label className="block text-sm text-gray-600 mb-2">HOW MANY GUESTS?</label>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="border rounded-full px-4 py-2 w-full text-center"
            />
          </div>

          <div className="text-center">
            <p className="text-gray-600 text-sm">ESTIMATED TOTAL</p>
            <p className="text-4xl font-bold">{calculateUnits()}</p>
            <p className="text-sm text-gray-500">UNITS</p>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">EVENT DURATION?</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              className="border rounded-full px-4 py-2 w-full text-center"
            />
          </div>
        </div>
      )}

      {/* {mode === 'construction' && (
        <div className="text-center text-gray-600">
          <p className="italic">Construction calculator coming soon...</p>
        </div>
      )} */}
    </div>
  );
};

export default PortaPottyCalculator;
