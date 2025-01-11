import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';

const DraggableNoteModal = ({ activePage, onRename, onClose }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawingCanvas, setDrawingCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Initialize the canvas context
  useEffect(() => {
    if (canvasRef.current) {
      setDrawingCanvas(canvasRef.current);
      setCtx(canvasRef.current.getContext('2d'));
    }
  }, [canvasRef]);

  // Drawing functionality
  const startDrawing = (e: React.MouseEvent) => {
    if (drawingCanvas && ctx) {
      setIsDrawing(true);
      ctx.moveTo(e.clientX - drawingCanvas.offsetLeft, e.clientY - drawingCanvas.offsetTop);
    }
  };

  const draw = (e: React.MouseEvent) => {
    if (isDrawing && ctx) {
      ctx.lineTo(e.clientX - drawingCanvas.offsetLeft, e.clientY - drawingCanvas.offsetTop);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    if (ctx) {
      ctx.clearRect(0, 0, drawingCanvas!.width, drawingCanvas!.height);
    }
  };

  return (
    <Draggable
      handle=".drag-handle" // Makes only the header draggable
      defaultPosition={{ x: 0, y: 0 }}
      grid={[1, 1]} // Smaller grid to allow for more fluid movement
      bounds={false} // Disable bounds for free movement
      scale={1}
    >
      <div className="absolute top-20 left-20 z-50 w-96 bg-white p-6 rounded-xl shadow-lg border border-gray-300">
        {/* Draggable Handle */}
        <div className="drag-handle w-full h-6 bg-gray-600 cursor-move rounded-t-lg mb-2" />

        {/* Input Section (Title) */}
        <div className="flex justify-between items-center mb-4">
          <input
            className="text-xl font-semibold bg-transparent border-b border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500"
            value={activePage.title}
            onChange={(e) => onRename(e.target.value)} // Renaming page
            placeholder="Page Title"
          />
          <button onClick={onClose} className="text-red-500 hover:text-red-700 focus:outline-none">
            ❌
          </button>
        </div>

        {/* Canvas for Drawing */}
        <div className="w-full h-64 bg-gray-100 border border-gray-300 rounded-md mb-4 p-4 shadow-inner">
          <canvas
            ref={canvasRef}
            width="100%"
            height="100%"
            className="border bg-white rounded-md"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center space-x-4 mt-4">
          <button
            onClick={clearCanvas}
            className="px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all focus:outline-none"
          >
            Clear
          </button>
          <button className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all focus:outline-none">
            Save
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default DraggableNoteModal;
