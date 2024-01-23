import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LIMIT, fetchCarsPerPageThunk } from "../../redux/operations";
import {
  selectAllCars,
  selectCarsPerPage,
  selectFilter,
  selectFilteredCars,
  selectIsLoading,
} from "../../redux/selectors";
import { setFilterDelete, setFilteredCars } from "../../redux/sliceCars";
import { CarItem } from "../CarItem/CarItem";
import { BtnLoadMore, CarsListStyled } from "./CarsList.styled";
import { Loader } from "../Loader/Loader";
import { toast } from "react-toastify";

export const CarsList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const isLoading = useSelector(selectIsLoading);
  const allCars = useSelector(selectAllCars);

  const filteredCars = useSelector(selectFilteredCars);
  const filter = useSelector(selectFilter);
  const carsPerPage = useSelector(selectCarsPerPage);

  useEffect(() => {
    dispatch(fetchCarsPerPageThunk(page))
      .unwrap()
      .catch((err) => toast.error(err));
  }, [dispatch, page]);

  useEffect(() => {
    if (!filter) {
      return;
    }
    if (filter === "all") {
      dispatch(setFilterDelete());
      setPage(1);
      setIsLoadMore(true);
    } else {
      const filterBrands = allCars.filter((car) => car.make === filter);
      dispatch(setFilteredCars(filterBrands));
    }
  }, [allCars, dispatch, filter]);

  const onLoadMoreClick = () => {
    const carsToLoad = filter === "all" ? LIMIT : carsPerPage.length + LIMIT;

    if (carsToLoad <= allCars.length) {
      setIsLoadMore(true);
      setPage(page + 1);
    } else {
      setIsLoadMore(false);
    }
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
          {carsPerPage?.map((car) => (
            <CarItem car={car} key={car.id}></CarItem>
          ))}
        </CarsListStyled>
      )}
      {isLoadMore && (
        <BtnLoadMore
          onClick={onLoadMoreClick}
          style={{ display: isLoadMore ? "block" : "none" }}
        >
          Load more
        </BtnLoadMore>
      )}
    </>
  );
};
