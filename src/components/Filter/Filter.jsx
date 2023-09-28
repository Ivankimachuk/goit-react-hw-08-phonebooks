import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilterTerm, setFilterTerm } from "redux/appReducer";
import { Label, Input, SubHeading } from "components/Emotion.styled";

export const Filter = () => {
const dispatch = useDispatch();
const filter = useSelector(selectFilterTerm);

const hendleInput = (e) => {
  const newValue  = e.target.value;
  dispatch(setFilterTerm( newValue ));
};

  return (
    <Label>
      <SubHeading >Find contacts by name</SubHeading>
      <Input type="text" value={filter} onChange={hendleInput} />
    </Label>
  );
};



