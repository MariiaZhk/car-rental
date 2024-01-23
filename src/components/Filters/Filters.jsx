import Select from "react-select";
import { selectCarsMarks } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setFilterAction } from "../../redux/slice";
import { Form, Label, SearchBtn, selectStyle } from "./Filters.styled";
import { fetchAllCarsThunk } from "../../redux/operations";

export const Filters = () => {
  const carsMarks = useSelector(selectCarsMarks);
  const [mark, setMark] = useState({ value: "All", label: "Enter the text" });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCarsThunk());
  }, [dispatch]);

  const onSearchClick = () => {
    const filter = mark.value;
    dispatch(setFilterAction(filter));
  };

  return (
    <Form>
      <Label>
        Car brand
        <Select
          options={carsMarks}
          onChange={setMark}
          placeholder="Enter the text"
          value={mark}
          styles={selectStyle}
          isSearchable={false}
        />
      </Label>

      <SearchBtn type="button" onClick={onSearchClick}>
        Search
      </SearchBtn>
    </Form>
  );
};
