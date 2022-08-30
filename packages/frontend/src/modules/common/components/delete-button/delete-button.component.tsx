import React from 'react';
import { ButtonDelete, ButtonIcon } from './delete-button.styled';

const DeleteButton = ({ onClick }: { onClick: () => void }) => (
  <ButtonDelete type="button" onClick={onClick}>
    <ButtonIcon />
  </ButtonDelete>
);

export default DeleteButton;
