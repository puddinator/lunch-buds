import { Checkbox } from "native-base";
import { useState } from "react";

export const InterestForm = () => {
  const [groupValues, setGroupValues] = useState([]);
  return (
    <Checkbox.Group
      onChange={setGroupValues}
      value={groupValues}
      accessibilityLabel="choose interests"
    >
      <Checkbox value="one" my={2}>
        UX Research
      </Checkbox>
      <Checkbox value="two">Software Development</Checkbox>
    </Checkbox.Group>
  );
};
