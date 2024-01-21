import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCarsThunk } from "../../redux/operations";
import {
  selectAllCars,
  selectFilter,
  selectFilteredCars,
  // selectFilteredCars,
} from "../../redux/selectors";
import { CarItem } from "../CarItem/CarItem";
import { CarsListStyled } from "./CarsList.styled";
import { BtnLoadMore } from "../../pages/Pages.styled";
import { setFilteredCars } from "../../redux/slice";
// import { selectAllCars } from "../../redux/selectors";

export const CarsList = () => {
  const dispatch = useDispatch();
  // const [page, setPage] = useState(0);
  const allCars = useSelector(selectAllCars);
  const filteredCars = useSelector(selectFilteredCars);
  const filter = useSelector(selectFilter);
  const cars = useSelector(selectAllCars);

  useEffect(() => {
    dispatch(fetchAllCarsThunk());
  }, [dispatch]);

  useEffect(() => {
    const mark = filter;
    const filterMarks =
      mark !== "all" && cars.filter((car) => car.make === mark);

    if (filter === null) {
      return;
    } else {
      if (mark !== "all") {
        dispatch(setFilteredCars(filterMarks));
      }
    }
  }, [cars, dispatch, filter]);

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
      <BtnLoadMore>Load more</BtnLoadMore>
    </>
  );
};
