"use client";

import { useState } from "react";

export const PriceRangeSlider = () => {
  const [price, setPrice] = useState(50);

  const handleSliderChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div className="mt-5">
      <div className="text-center rounded-lg">
        <div className="flex justify-between">
          <span className="text-sm font-semibold">Price range</span>
        <label htmlFor="priceRange" className="text-sm font-medium">
           ${price}
        </label>
        </div>
        <input
          type="range"
          id="priceRange"
          min="0"
          max="100"
          value={price} // Controlled by the state
          step="1"
          onChange={handleSliderChange} // Update state on change
      />
      </div>
    </div>
  )
}
