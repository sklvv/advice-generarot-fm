import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleModal, setId, findAdvice } from "../store/cardSlice";

const SearchModal = () => {
  const id = useSelector((state) => state.card.searchQuery);
  const dispatch = useDispatch();
  return (
    <div className="modal__container">
      <div className="modal__items">
        <div className="card__title">Advice</div>
        <div className="modal__form">
          <input
            className="modal__input"
            placeholder="ID"
            type="text"
            value={id}
            onChange={(e) => dispatch(setId(e.target.value))}
          />
        </div>
        <div className="modal__actions">
          <div onClick={() => dispatch(toggleModal())}>Close</div>
          <div onClick={() => dispatch(findAdvice(id))}>Go</div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
