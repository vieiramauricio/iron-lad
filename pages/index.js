import Head from 'next/head';
import Outside from '../components/layouts/Outside';
import Button from '../components/Button';

const Login = () => {
  return (
    <Outside>
      <Head>
        <title>Login | Iron Lad</title>
      </Head>
      <h1>Login</h1>

      <Button color="primary">
        Deuses
      </Button>
    </Outside>
  )
}

export default Login;
