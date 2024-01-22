import styled from "styled-components";

export const Form = styled.form`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;

// ==============

export const selectStyle = {
  control: (styles) => ({
    ...styles,
    width: "224px",
    height: "48px",
    background: "#F7F7FB;",
    borderRadius: "14px",
    border: "none",
    outline: "none",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.11",
    cursor: "pointer",

    "&:hover": {
      border: "none",
      borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
    },
  }),
  singleValue: (styles) => ({
    ...styles,
    lineHeight: "1.11",
    fontSize: "18px",
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.11",
    margin: "0px",
    padding: "0px",
  }),
  menu: (styles) => ({
    ...styles,
    width: "224px",
    height: "272px",
    padding: "14px 8px 14px 18px",
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    fontFamily: "Manrope, sans-serif",
    marginBottom: "8px",
  }),
  option: (styles, { isFocused, isSelected }) => {
    if (isFocused) {
      return {
        ...styles,
        color: "#121417",
        backgroundColor: "transparent",
      };
    } else if (isSelected) {
      return {
        ...styles,
        color: "#121417",
        backgroundColor: "transparent",
      };
    } else {
      return {
        ...styles,
        color: "rgba(18, 20, 23, 0.2)",
      };
    }
  },

  menuList: (base) => ({
    ...base,
    fontSize: "16px",
    lineHeight: "1.25",
    fontWeight: "500",
    cursor: "pointer",
    height: "272px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background: " rgba(18, 20, 23, 0.05)",
      borderRadius: "10px",
    },
  }),
  indicatorSeparator: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "transparent",
  }),
  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    paddingRight: "18px",
    color: "#121417",
  }),
};

export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  border: none;
  border-radius: 12px;
  background: #3470ff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
