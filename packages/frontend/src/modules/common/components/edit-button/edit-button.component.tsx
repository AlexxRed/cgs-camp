import React from 'react';
import { ButtonEdit, ButtonIcon } from './edit-button.styled';

const EditButton = ({ todo }: { todo: object }) => {
  console.log(todo);
  return (
    <ButtonEdit>
      <ButtonIcon />
    </ButtonEdit>
  );
};

export default EditButton;
