import React from "react";
import AddBookForm from "./AddBookForm";
import { useState } from "react";
import { RiHeartAdd2Fill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";

const NavBar = ({
  showDialog,
  setShowDialog,
  searchBook,
  setSearchBook,
  favIcon,
  // favbook,
  setIsFavIcon,
  favBookId,
  setFavBookId,

  showFavBook,
  setShowFavBook,
}) => {
  // const [favIcon, setIsFavIcon] = useState(false);

  function clicked() {
    setIsFavIcon(true);
    console.log("Punjabi Agay Na!!!");
  }
  return (
    <>
      <div className="w-full bg-amber-700 h-[70px] px-15 flex items-center justify-between">
        <div className=" text-[18px]">World Library</div>
        <div className="flex items-center w-[230px] h-[35px] bg-white border-2 rounded-[8px]">
          <input
            type="text"
            className="border-none  outline-none  px-[10px]"
            name="title"
            placeholder="Search here..."
            value={searchBook}
            onChange={(e) => setSearchBook(e.target.value)}
          />
          <IoSearchOutline className="text-2xl font-semibold" />
        </div>
        <div className="flex items-center gap-[15px]">
          <div>
            {/* <Link to="/favbook"> */}
            <RiHeartAdd2Fill
              className="text-3xl text-white cursor-pointer"
              onClick={() => setShowFavBook(!showFavBook)}
            />
          </div>
          <button
            className="text-[18px] cursor-pointer w-[100px] h-[40px] rounded-[8px] bg-amber-600"
            onClick={() => setShowDialog(true)}
          >
            Add Book
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
