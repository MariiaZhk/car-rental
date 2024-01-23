// export function getCarsBrands(payload) {
//   const brands = [];
//   payload?.map((car) => {
//     brands.push(car.make);
//   });
//   const uniqueBrands = brands.filter(
//     (brand, index, array) => array.indexOf(brand) === index
//   );
//   const uniqueBrandsObj = [
//     { value: "all", label: "All" },
//     ...uniqueBrands.map((brand) => {
//       return { value: brand, label: brand };
//     }),
//   ];
//   return uniqueBrandsObj;
// }
