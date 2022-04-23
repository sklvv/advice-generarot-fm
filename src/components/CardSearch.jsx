import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../store/cardSlice";
const CardSearch = () => {
  const dispatch = useDispatch();
  return (
    <div className="search__block">
      Check advice by{" "}
      <span className="search__id" onClick={() => dispatch(toggleModal())}>
        ID
      </span>
    </div>
  );
};

export default React.memo(CardSearch);
