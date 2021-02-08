import React, { useMemo } from "react";
import Select from "react-select";

const CustomSelect = ({ onChange, options, value, className }) =>{


  const customStyles = useMemo(
    () => ({
      control: (base, state) => ({
        ...base,
        maxWidth: 430,
        borderRadius: 28,
        border: "1px solid #000000",
        paddingBottom: 8,
        paddingTop: 8,
        backgroundColor: "transparent",
        // This line disable the blue border
        boxShadow: state.isFocused && "1px solid #4B00FF",
        "&:focused": {
          border: state.isFocused && "1px solid #4B00FF",
        },
        "&:hover": {
          border: state.isFocused && "1px solid #4B00FF",
        },
      }),

      indicatorSeparator: () => ({
        display: "none",
      }),

      menu: (base, state) => ({
        ...base,
        zIndex: 1000,
      }),
    }),
    []
  );

    if (!options) return null

    const defaultValue = (options, value) => {
        if (options.length || !options) {
            return options ? options.find((option) => option.value === value) : "";
        } else return null;
    };

 // if (!options) return  null
  return (
    <div className={className}>
      <Select
        value={defaultValue(options, value)}
        onChange={(value) => {
          onChange(value);
        }}
        options={options}
        styles={customStyles}
        isDisabled={!options.length}
      />
    </div>
  );
};

export default CustomSelect;
