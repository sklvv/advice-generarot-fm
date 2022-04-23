import { React, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import CardSearch from "./components/CardSearch";
import Loader from "./components/Loader";
import SearchModal from "./components/SearchModal";
import { useDispatch, useSelector } from "react-redux";
import { startAdvice } from "./store/cardSlice";

function App() {
  const loading = useSelector((state) => state.card.loading);
  const showModal = useSelector((state) => state.card.showModal);
  const dispatch = useDispatch();
  useEffect(() => dispatch(startAdvice()), []);

  return (
    <>
      {loading === true ? (
        <Loader />
      ) : (
        <>
          <Card />
          <CardSearch />
          {showModal && <SearchModal />}
        </>
      )}
    </>
  );
}

export default App;
