import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCarsThunk,
  fetchCarsPerPageThunk,
} from "../../redux/operations";
import {
  selectAllCars,
  selectFilter,
  selectFilteredCars,
  // selectFilteredCars,
} from "../../redux/selectors";
import { CarItem } from "../CarItem/CarItem";
import { BtnLoadMore, CarsListStyled } from "./CarsList.styled";

import { setFilterDelete, setFilteredCars } from "../../redux/slice";
// import { selectAllCars } from "../../redux/selectors";

export const CarsList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const allCars = useSelector(selectAllCars);
  const filteredCars = useSelector(selectFilteredCars);
  const filter = useSelector(selectFilter);
  const cars = useSelector(selectAllCars);

  useEffect(() => {
    dispatch(fetchAllCarsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCarsPerPageThunk(page));
  }, [dispatch, page]);

  useEffect(() => {
    const mark = filter;
    const filterMarks =
      mark !== "all" && cars.filter((car) => car.make === mark);

    if (filter === null) {
      return;
    }
    if (mark === "all") {
      dispatch(setFilterDelete());
      return;
    } else {
      dispatch(setFilteredCars(filterMarks));
    }
  }, [cars, dispatch, filter]);

  function onLoadMoreClick() {
    const nextPage = page + 1;
    setIsLoadMore(true);
    setPage(nextPage);
  }
  return (
    <>
      {filter !== null ? (
        <CarsListStyled>
          {filteredCars?.map((car) => (
            <CarItem car={car} key={car.id} />
          ))}
        </CarsListStyled>
      ) : (
        <CarsListStyled>
          {allCars.map((car) => (
            <CarItem car={car} key={car.id}></CarItem>
          ))}
        </CarsListStyled>
      )}
      <BtnLoadMore
        onClick={onLoadMoreClick}
        display={isLoadMore ? "none" : "block"}
      >
        Load more
      </BtnLoadMore>
    </>
  );
};
