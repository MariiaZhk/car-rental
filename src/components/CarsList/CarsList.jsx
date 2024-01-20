import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCarsThunk } from "../../redux/operations";
import { selectAllCars } from "../../redux/selectors";
import { CarItem } from "../CarItem/CarItem";
import { CarsListStyled } from "./CarsList.styled";
// import { selectAllCars } from "../../redux/selectors";

export const CarsList = () => {
  const dispatch = useDispatch();
  const allCars = useSelector(selectAllCars);

  useEffect(() => {
    dispatch(fetchAllCarsThunk());
  }, [dispatch]);

  return (
    <>
      <CarsListStyled>
        {allCars.map((car) => (
          <CarItem car={car} key={car.id}></CarItem>
        ))}
      </CarsListStyled>
    </>
  );
};
