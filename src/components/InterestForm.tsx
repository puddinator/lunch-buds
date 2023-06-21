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
      <Checkbox value="one">
        Reading
      </Checkbox>

      <Checkbox value="two">
        Sports
      </Checkbox>

      <Checkbox value="three">
        Cooking
      </Checkbox>

      <Checkbox value="four">
        Arts
      </Checkbox>

      <Checkbox value="five">
        Music
      </Checkbox>
    </Checkbox.Group>
  );
};
