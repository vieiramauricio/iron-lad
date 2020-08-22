import Head from 'next/head';
import Link from 'next/link';

import {
  Box,
  TextField,
  FormControl
} from '@material-ui/core';

import { Slide } from "react-awesome-reveal";

import Outside from '../components/layouts/Outside';
import Button from '../components/Button';
import { Title } from '../components/Titles';
import { CallToPage } from '../components/Messages';

import { useAuth } from '../context/Auth';
import { login, logout } from '../context/Auth/actions';

const Login = () => {

  const { state, dispatch } = useAuth();

  const handleForm = () => {
    console.log('teste')
    login(dispatch, 'HYUSA289WDGAUIJAH1113223SJKSJAKJ')
  };

  return (
    <>
      <Head>
        <title>Login | Iron Lad</title>
      </Head>
      <Outside>
        <Slide direction="left">
          <Box>
            <Box>
              <Title>
                Entre agora no Portal <span>Marketplace</span>
              </Title>
            </Box>
            <Box mt={2}>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  label="Usuário"
                  variant="outlined"
                />
              </FormControl>
            </Box>
            <Box mt={1}>
              <FormControl fullWidth>
                <TextField
                  type="password"
                  label="Senha"
                  variant="outlined"
                />
              </FormControl>

            </Box>
            <Box mt={1}>
              <Button onClick={handleForm}>
                Entrar
              </Button>
            </Box>
          </Box>
          <Box>
            <CallToPage>
              Não tem cadastro ainda?
            <Link href="/register">
                <span> clique aqui!</span>
              </Link>
            </CallToPage>
          </Box>
        </Slide>
      </Outside>
    </>
  )
}

export default Login;