import Select from "react-select";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { selectAllCars } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Form, Label, SearchBtn, selectStyle } from "./Filters.styled";
import { fetchAllCarsThunk } from "../../redux/operations";
import { setFilterAction } from "../../redux/slice";

export const Filters = () => {
  const [brandsList, setBrandsList] = useState({});

  const [brand, setBrand] = useState(null);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const allCars = useSelector(selectAllCars);

  useEffect(() => {
    dispatch(fetchAllCarsThunk());
  }, [dispatch]);

  useEffect(() => {
    function getCarsBrands() {
      const brands = [];
      allCars?.map((car) => {
        brands.push(car.make);
      });
      const uniqueBrands = brands.filter(
        (brand, index, array) => array.indexOf(brand) === index
      );
      const uniqueBrandsObj = [
        { value: "all", label: "All" },
        ...uniqueBrands.map((brand) => {
          return { value: brand, label: brand };
        }),
      ];
      setBrandsList(uniqueBrandsObj);
    }
    getCarsBrands();
  }, [allCars]);

  // const handleBrandChange = (selectedBrand) => {
  //   setBrand(selectedBrand);
  //   if (!selectedBrand) {
  //     toast.error("Please select a car brand.");
  //   }
  // };

  const handleBrandChange = (selectedBrand) => {
    setBrand(selectedBrand);
    setError(selectedBrand ? "" : "Please select a car brand.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!brand) {
      setError("Please select a car brand.");
      return;
    }
    const filter = brand.value;
    dispatch(setFilterAction(filter));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Car brand
        <Select
          options={brandsList}
          onChange={handleBrandChange}
          placeholder="Enter the text"
          value={brand}
          styles={selectStyle}
          isSearchable={false}
        />
      </Label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <SearchBtn type="submit">Submit</SearchBtn>
    </Form>
  );
};
