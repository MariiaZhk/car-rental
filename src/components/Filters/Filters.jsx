import Select from "react-select";
import { toast } from "react-toastify";
import { selectAllCars } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Form, Label, SearchBtn, selectStyle } from "./Filters.styled";
import { fetchAllCarsThunk } from "../../redux/operations";
import { setFilterAction } from "../../redux/sliceCars";

export const Filters = () => {
  const [brandsList, setBrandsList] = useState({});

  const [brand, setBrand] = useState(null);
  const dispatch = useDispatch();
  const allCars = useSelector(selectAllCars);

  useEffect(() => {
    dispatch(fetchAllCarsThunk())
      .unwrap()
      .catch((err) => {
        toast.error(err);
      });
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

  const handleBrandChange = (selectedBrand) => {
    setBrand(selectedBrand);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!brand) {
      toast.info("Please select a car brand.", { theme: "dark" });
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
          isSearchable
        />
      </Label>
      <SearchBtn type="submit">Submit</SearchBtn>
    </Form>
  );
};
