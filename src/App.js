import React, { useState } from 'react';
import './App.css'; // Assuming you have a styles.css file for shape styling

const App = () => {
  const [selectedShape, setSelectedShape] = useState('Square');
  const [shapes, setShapes] = useState([]);

  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

  const addShape = () => {
    const newShape = {
      type: selectedShape,
      id: shapes.length + 1, // Unique identifier for each shape
    };
    setShapes([...shapes, newShape]);
  };

  return (
    <div className="app">
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleShapeChange}>
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
        </select>
        <button onClick={addShape}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((shape) => (
          <div key={shape.id} className="shape-wrapper">
            {shape.type === 'Square' ? (
              <div className="small-square">
                {shape.id}
              </div>
            ) : (
              <div className="small-circle">
                {shape.id}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
