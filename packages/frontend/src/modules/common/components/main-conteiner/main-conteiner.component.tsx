import React, { ReactChild } from 'react';
import { Box } from './main-conteiner.styled';

interface ContainerProps {
  children?: ReactChild | ReactChild[];
}

export const Container = ({ children }: ContainerProps) => <Box>{children}</Box>;
