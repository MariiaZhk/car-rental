import { RotatingLines } from "react-loader-spinner";
import { WrapperStyles } from "./Loader.styled";

export const Loader = () => {
  return (
    <WrapperStyles>
      <RotatingLines
        visible={true}
        height="98"
        width="98"
        strokeColor="#3470ff"
        strokeWidth="5"
        ariaLabel="rotating-lines-loading"
      />
    </WrapperStyles>
  );
};
