import React from "react";
import { useState } from "react";
import img from "../assets/Images/react-book-v2.png";
import AddBookForm from "./AddBookForm";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
const BookCard = ({
  onSearchChange,
  showDialog,
  setShowDialog,
  searchBook,
  setSearchBook,
}) => {
  const [BookData, setBookData] = useState([
    {
      id: uuidv4(),
      img: img,
      title: "React JS",
      author: "James King",
      genure: "Js Library",
    },
    {
      id: uuidv4(),
      img: img,
      title: "React JS",
      author: "James King",
      genure: "Js Library",
    },
  ]);

  // const [fileteredBooks, setFilteredBooks] = useState([]);

  function DeleteBook(id) {
    setBookData((prevBook) => {
      return prevBook.filter((book) => book.id !== id);
    });
  }

  // function fileteredBooks() {
  let store = BookData.filter((book) => {
    return searchBook === ""
      ? book
      : book.title.toLowerCase().includes(searchBook);
  });
  // }
  //  return searchBook===""?book:book.title.toLocaleLowerCase().includes(searchBook)
  const InputRef = useRef(null);
  const [image, setImage] = useState({});
  const handleImgClick = () => {
    InputRef.current.click();
  };
  const handleImgChange = (event, bookId) => {
    const file = event.target.files[0];
    if (file) {
      setImage((prev) => ({
        ...prev,
        [bookId]: file,
      }));
    }
  };
  return (
    <>
      <div className="w-full h-[100vh] flex flex-wrap gap-15 bg-amber-500 p-[50px] ">
        {store.map((book) => (
          <div
            className="w-[220px] h-[350px] bg-amber-900 rounded-[10px] p-[20px] "
            key={book.id}
          >
            <div className="flex justify-end">
              <div
                onClick={() => DeleteBook(book.id)}
                className="cursor-pointer text-[18px] font-semibold"
              >
                X
              </div>
            </div>
            <div className="flex flex-col items-center gap-[15px]">
              <div
                className="flex items-center justify-center w-[170px] h-[180px] "
                onClick={handleImgClick}
              >
                {image[book.id] ? (
                  <img
                    src={URL.createObjectURL(image[book.id])}
                    className="cursor-pointer"
                  />
                ) : (
                  <img
                    className=" w-[170px] h-[180px] cursor-pointer"
                    src={book.img}
                    alt="Book Image is Missing Due to Some Error!"
                  />
                )}
                <input
                  type="file"
                  className="hidden"
                  ref={InputRef}
                  onChange={(e) => handleImgChange(e, book.id)}
                />
              </div>
              <div>
                <div>
                  <span className="font-semibold">Title: </span>
                  {book.title}
                </div>
                <div>
                  <span className="font-semibold">Author: </span>
                  {book.author}
                </div>
                <div>
                  <span className="font-semibold">genre: </span>
                  {book.genure}
                </div>
              </div>
            </div>
          </div>
        ))}
        <AddBookForm
          setBookData={setBookData}
          showDialog={showDialog}
          setShowDialog={setShowDialog}
        />
      </div>
    </>
  );
};

export default BookCard;
