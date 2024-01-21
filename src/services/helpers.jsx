export function getCarsMarks(payload) {
  const marks = [];
  payload?.map((car) => {
    marks.push(car.make);
  });
  const uniqueMarks = marks.filter(
    (mark, index, array) => array.indexOf(mark) === index
  );
  const uniqueMarksObj = [
    { value: "all", label: "All" },
    ...uniqueMarks.map((mark) => {
      return { value: mark, label: mark };
    }),
  ];
  return uniqueMarksObj;
}
