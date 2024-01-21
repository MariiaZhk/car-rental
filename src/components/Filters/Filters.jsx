import Select from "react-select";
import { selectCarsMarks } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setFilterAction } from "../../redux/slice";

export const Filters = () => {
  const carsMarks = useSelector(selectCarsMarks);
  const [mark, setMark] = useState({ value: "All", label: "Enter the text" });
  const [price, setPrice] = useState({ value: "All", label: "To $" });
  const dispatch = useDispatch();

  const pricesArr = [{ value: "all", label: "All" }];
  for (let index = 10; index <= 300; index += 10) {
    pricesArr.push({ value: index, label: index });
  }

  const onSearch = () => {
    const filter = mark.value;
    //   price: price.value,
    dispatch(setFilterAction(filter));
  };

  return (
    <form>
      <label>
        Car brand
        <Select
          options={carsMarks}
          onChange={setMark}
          placeholder="Enter the text"
          value={mark}
        />
      </label>
      <label>
        Price/ 1 hour
        <Select
          onChange={setPrice}
          options={pricesArr}
          placeholder=""
          value={price}
        />
      </label>
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </form>
  );
};
