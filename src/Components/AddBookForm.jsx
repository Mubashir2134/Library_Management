import React from "react";
import { useState } from "react";

import img from "../assets/Images/react-book-v2.png";
import { v4 as uuidv4 } from "uuid";

const AddBookForm = ({ setBookData, showDialog, setShowDialog }) => {
  function handleInputValue(e) {
    SetInputValue({ ...inputValue, [e.target.name]: e.target.value });
  }
  const [inputValue, SetInputValue] = useState({
    title: "",
    author: "",
    genre: "",
  });

  function AddInputData(e) {
    e.preventDefault();
    if (inputValue.title === "") {
      return alert("Book Title is Required!");
    } else if (inputValue.author === "") {
      return alert("Book Author is Requird!");
    } else if (inputValue.genre === "") {
      return alert("Book Genre is Missing!");
    }
    setBookData((prev) => [
      ...prev,

      {
        id: uuidv4(),
        img: img,
        title: inputValue.title,
        author: inputValue.author,
        genure: inputValue.genre,
      },
    ]);

    SetInputValue({
      title: "",
      author: "",
      genre: "",
    });
    setShowDialog(false);
  }

  return (
    <div
      className={`w-screen h-screen bg-black/50 fixed top-0 left-0 transition-all duration-300 ${
        showDialog
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`w-[400px] h-[500px] bg-green-500 absolute transition-all duration-300 top-[50%] left-[50%] translate-[-50%] rounded-2xl ${
          showDialog ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          className="absolute cursor-pointer top-3 right-3"
          onClick={() => setShowDialog(false)}
        >
          X
        </button>
        <form className="p-[20px] flex flex-col gap-4">
          <div className="flex flex-col gap-[12px]">
            <label className="font-semibold">Book Title:</label>
            <input
              type="text"
              className=" border-2 outline-none rounded-[8px] px-[10px] py-[5px] "
              placeholder="Book Title"
              name="title"
              value={inputValue.title}
              onChange={handleInputValue}
            />
          </div>
          <div className="flex flex-col gap-[12px]">
            <label className="font-semibold">Book Author:</label>
            <input
              type="text"
              className=" border-2 outline-none rounded-[8px] px-[10px] py-[5px] "
              placeholder="Book Title"
              name="author"
              value={inputValue.author}
              onChange={handleInputValue}
              required
            />
          </div>
          <div className="flex flex-col gap-[12px]">
            <label className="font-semibold">Book Genre:</label>
            <input
              type="text"
              className=" border-2 outline-none rounded-[8px] px-[10px] py-[5px] "
              placeholder="Book Title"
              name="genre"
              value={inputValue.genre}
              onChange={handleInputValue}
            />
          </div>
          <button
            className="bg-pink-600 mt-3 h-[40px] rounded-2xl cursor-pointer"
            type="submit"
            onClick={AddInputData}
          >
            Book Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
