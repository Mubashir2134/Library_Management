import React from "react";
import { RiHeartAdd2Fill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";

const NavBar = ({
  setShowDialog,
  searchBook,
  setSearchBook,
  showFavBook,
  setShowFavBook,
}) => {
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
            value={searchBook.toLowerCase()}
            onChange={(e) => setSearchBook(e.target.value)}
          />
          <IoSearchOutline className="text-2xl font-semibold" />
        </div>
        <div className="flex items-center gap-[15px]">
          <div>
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
