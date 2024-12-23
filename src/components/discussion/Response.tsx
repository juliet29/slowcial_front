import React, { useRef } from "react";

const TopicResponse: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleOpen = () => {
    const dialogElement = dialogRef.current;
    dialogElement?.show();
  };

  const handleClose = () => {
    const dialogElement = dialogRef.current;
    dialogElement?.close();
  };

  return (
    <div>
      <div className="bg-blue-300 p-2 my-4">
        <p>Main body </p>
        <button className="bg-blue-600 p-1" onClick={handleOpen}>
          Open me!
        </button>
      </div>
      <dialog className="bg-pink-500 p-2 my-4" ref={dialogRef}>
        <p>The dialog!</p>
        <button onClick={handleClose}>Close me</button>
      </dialog>
    </div>
  );
};

export default TopicResponse;
