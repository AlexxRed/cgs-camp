import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { Button } from '@mui/material';
import LoginFormComponent from '../common/components/login-form/login-form-component';
import { Container } from '../common/components/main-conteiner/main-conteiner.component';
import { ROUTER_KEYS } from '../common/consts/app-keys.const';
import { IUser } from '../common/types/user.types';
import userService from '../services/auth.service';

const LoginContainer = () => {
  const history = useHistory();
  const queryClient = useQueryClient();

  const handleClick = () => {
    history.push(ROUTER_KEYS.REGISTER);
  };

  const loginMutation = useMutation((body: IUser) => userService.loginUser(body), {
    onSuccess: (data) => {
      queryClient.invalidateQueries('user');
      localStorage.setItem('user', JSON.stringify(data.token));
      history.push(ROUTER_KEYS.ROOT);
    }
  });

  const data = {
    login: '',
    password: ''
  };

  const onSave = (values: IUser): void => {
    loginMutation.mutate({
      username: values.login,
      email: values.login,
      password: values.password
    });
  };
  return (
    <Container>
      <LoginFormComponent data={data} onSave={onSave} title="Login" />
      <p>Already have account?</p>
      <Button onClick={handleClick}>Registration</Button>
    </Container>
  );
};

export default LoginContainer;
