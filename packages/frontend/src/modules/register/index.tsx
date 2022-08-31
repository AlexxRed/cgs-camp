import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { Button } from '@mui/material';
import RegisterFormComponent from '../common/components/register-form/register-form-component';
import { Container } from '../common/components/main-conteiner/main-conteiner.component';
import { ROUTER_KEYS } from '../common/consts/app-keys.const';
import { IUser } from '../common/types/user.types';
import userService from '../services/auth.service';

const RegisterContainer = () => {
  const history = useHistory();
  const queryClient = useQueryClient();

  const handleClick = () => {
    history.push(ROUTER_KEYS.LOGIN);
  };

  const registerMutation = useMutation((body: IUser) => userService.registerUser(body), {
    onSuccess: (data) => {
      queryClient.invalidateQueries('user');
      localStorage.setItem('user', JSON.stringify(data.token));
      history.push(ROUTER_KEYS.ROOT);
    }
  });

  const data = {
    username: '',
    email: '',
    password: '',
    repeatpassword: ''
  };

  const onSave = (values: IUser): void => {
    registerMutation.mutate({
      username: values.username,
      email: values.email,
      password: values.password
    });
  };
  return (
    <Container>
      <RegisterFormComponent data={data!} onSave={onSave} title="Register" />
      <p>Already have account?</p>
      <Button onClick={handleClick}>Login</Button>
    </Container>
  );
};

export default RegisterContainer;
