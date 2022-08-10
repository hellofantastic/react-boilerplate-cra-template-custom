import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

//App
import { useUserSlice } from '../../slice';
import { selectUser } from '../../slice/selectors';
import H1 from 'app/components/H1';
import { LoomCredit } from 'app/components/LoomCredit';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

import { Logo } from 'app/components/Logo';
//Signin form
export function SignIn() {
  const [apiErrors, setApiErrors] = useState('');

  const { actions } = useUserSlice();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(selectUser);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    dispatch(actions.clearState());
    //@ts-ignore
  }, [dispatch, actions]);

  useEffect(() => {
    if (isError) {
      setApiErrors(errorMessage);
      dispatch(actions.clearState());
    }
    if (isSuccess) {
      dispatch(actions.clearState());
      navigate('/');
    }
  }, [dispatch, navigate, actions, isError, isSuccess, errorMessage]);

  const onSubmit = data => {
    let datatopost = { method: 'post', ...data };
    console.log(datatopost);
    dispatch(actions.signIn(datatopost));
  };

  return (
    <React.Fragment>
      <div
        style={{
          margin: '0 auto',
          width: '300px',
          marginTop: '100px',
        }}
      >
        <BrandContainer>
          <H1 textAlign="center">Sign in Page</H1>
          <Logo title="Your Project" />
        </BrandContainer>
        <div
          style={{
            background: '#fff',
            padding: '30px',
            marginTop: '20px',
            boxShadow: 'rgb(97 86 55 / 15%) 0px 1px 30px',
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ marginBottom: '15px' }}>
              {(Object.keys(errors).length || apiErrors) && (
                <div
                  style={{
                    color: 'red',
                    fontSize: '0.8rem',
                    marginBottom: '15px',
                  }}
                >
                  Invalid Credentials. Try again. {apiErrors}
                </div>
              )}
              <Label htmlFor="username">Username</Label>
              <input
                style={inputStyles as React.CSSProperties}
                type="text"
                autoComplete="username"
                {...register('username')}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Label htmlFor="password">Password</Label>
              <input
                style={inputStyles as React.CSSProperties}
                type="password"
                autoComplete="current-password"
                {...register('password')}
              />
            </div>
            <Button>
              {isFetching ? <LoadingIndicator small color="#fff" /> : 'Sign In'}
            </Button>
          </form>
        </div>
        <LoomCredit styles={{ marginTop: '20px', textAlign: 'center' }} />
      </div>
    </React.Fragment>
  );
}

export default SignIn;
const inputStyles = {
  border: '1px solid #dcdcdc',
  borderRadius: '3px',
  padding: '6px 13px',
  width: '100%',
  fontFamily: 'inherit',
  fontSize: '1rem',
  color: '#355c7d',
  backgroundColor: '#fff',
  WebkitAppearance: 'none',
};
const Label = styled.label`
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: #355c7d;
  display: block;
`;
const Button = styled.button`
  border: 0;
  padding: 9px 15px;
  background: ${p => p.theme.text};
  background: linear-gradient(45deg, #eb6472, #f63a7a);
  color: #fff;
  display: block;
  font-size: 0.9rem;
  border-radius: 4px;
  opacity: 0.8; 
  font-weight: bold;
    width: 100%;
    cursor: pointer;
    text-transform: uppercase;
  cursor: pointer;
  &:hover {
    opacity:1};
  }
`;

const BrandContainer = styled.div`
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;
  > img {
    height: 30px;
    margin-left: 15px;
  }
`;
