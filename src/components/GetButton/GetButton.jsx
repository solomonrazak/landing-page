import React, { useState, useEffect } from "react";
import BookCall from "../bookcall/BookCall";
function GetButton() {
  const [shownav, setShownav] = useState(false);
  const [bookCallVisible, setBookCallVisible] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleBookCallToggle = () => {
    setBookCallVisible((prevState) => !prevState);
    console.log(bookCallVisible);
    setShownav(false);
  };
  const handleBookCallClose = () => {
    setBookCallVisible(false);
  };

  useEffect(() => {
    if (bookCallVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [bookCallVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div>
        <button
          className="bg-blue-900 py-2 px-5 text-[18px] hover:bg-transparent hover:border hover:border-blue-900 hover:text-blue-900 hidden md:block z-10"
          onClick={handleBookCallToggle}
        >
          Get in Touch
        </button>
      </div>
      {bookCallVisible && <BookCall onClose={handleBookCallClose} />}
    </>
  );
}

export default GetButton;
