import React from 'react';
import {
  InputContainer,
  Options,
  RadioTile
} from './pet-type-radio-buttons.styled';
import { ReactComponent as Cat } from '../../../assets/images/icons/cat_type.svg';
import { ReactComponent as Dog } from '../../../assets/images/icons/dog_type.svg';

const PetTypeRadioButtons = () => {
  return (
    <Options>
      <InputContainer>
        <input type="radio" name="type" id="cat" value="cat" defaultChecked />
        <RadioTile htmlFor="cat">
          <Cat />
        </RadioTile>
      </InputContainer>

      <InputContainer>
        <input type="radio" name="type" id="dog" value="dog" />
        <RadioTile htmlFor="dog">
          <Dog />
        </RadioTile>
      </InputContainer>
    </Options>
  );
};

export default PetTypeRadioButtons;
