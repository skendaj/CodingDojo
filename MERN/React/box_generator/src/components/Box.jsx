import React, { useState } from "react";

function ColorSquare() {
  const [color, setColor] = useState("");
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [colorSquares, setColorSquares] = useState([]);

  const handleColorSubmit = (event) => {
    event.preventDefault();
    setColorSquares((prevColorSquares) => [
      ...prevColorSquares,
      { color, width, height },
    ]);
    setColor("");
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleWidthChange = (event) => {
    setWidth(parseInt(event.target.value));
  };

  const handleHeightChange = (event) => {
    setHeight(parseInt(event.target.value));
  };

  return (
    <div>
      <form onSubmit={handleColorSubmit}>
        <div className="form-group">
        <label>
    Color Name:
          <input 
          type="text" 
          class="form-control"
          value={color} 
          onChange={handleColorChange} />
        </label>
        <label>
          Width:
          <input
            type="number"
            class="form-control"
            value={width}
            onChange={handleWidthChange}
            min={1}
          />
        </label>
        <label>
          Height:
          <input
            type="number"
            class="form-control mb-5"
            value={height}
            onChange={handleHeightChange}
            min={1}
          />
        </label>
        </div>
        <button type="submit" className="btn btn-primary mb-5">Submit</button>
      </form>
      {colorSquares.length > 0 && (
        <div>
          <p class="font-weight-bold">Color Squares:</p>
          <div style={{ display: "flex" }}>
            {colorSquares.map((square, index) => (
              <div
                key={index}
                style={{
                  width: `${square.width}px`,
                  height: `${square.height}px`,
                  backgroundColor: square.color,
                  margin: "10px",
                }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorSquare;
