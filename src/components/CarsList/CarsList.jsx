import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsPerPageThunk } from "../../redux/operations";
import {
  selectAllCars,
  selectCarsPerPage,
  selectFilter,
  selectFilteredCars,
  selectIsLoading,
} from "../../redux/selectors";
import { setFilterDelete, setFilteredCars } from "../../redux/slice";
import { CarItem } from "../CarItem/CarItem";
import { BtnLoadMore, CarsListStyled } from "./CarsList.styled";
import { Loader } from "../Loader/Loader";

export const CarsList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const allCars = useSelector(selectAllCars);
  const filteredCars = useSelector(selectFilteredCars);
  const filter = useSelector(selectFilter);
  const carsPerPage = useSelector(selectCarsPerPage);

  useEffect(() => {
    dispatch(fetchCarsPerPageThunk(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (!filter) {
      return;
    }
    if (filter === "all") {
      dispatch(setFilterDelete());
      return;
    }
    const filterMarks =
      filter !== "all" && allCars.filter((car) => car.make === filter);

    dispatch(setFilteredCars(filterMarks));
  }, [allCars, dispatch, filter]);

  const onLoadMoreClick = () => {
    const totalPage = allCars.length / 12;
    if (page === totalPage - 1) {
      setIsLoadMore(true);
    }
    setPage(page + 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      {filter !== null ? (
        <CarsListStyled>
          {filteredCars?.map((car) => (
            <CarItem car={car} key={car.id} />
          ))}
        </CarsListStyled>
      ) : (
        <CarsListStyled>
          {carsPerPage.map((car) => (
            <CarItem car={car} key={car.id}></CarItem>
          ))}
        </CarsListStyled>
      )}
      {isLoadMore && (
        <BtnLoadMore onClick={onLoadMoreClick}>Load more</BtnLoadMore>
      )}
    </>
  );
};
