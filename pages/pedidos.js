import Head from 'next/head';
import { useRouter } from 'next/router'
import Inside from '../components/layouts/Inside';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/Auth';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Pedidos = () => {

  const { state } = useAuth();
  const [signed, setSigned] = useState(false);
  const router = useRouter();

  const getPedidos = async () => {
    const res = await axios.get('/api/pedidos');
    console.log(res.data)
  };

  useEffect(() => {
    if (!state.token) {
      router.push('/')
    }else{
      setSigned(true);
      getPedidos();
    }
  }, [])

  return (
    <>
      {
        signed ?
          <>
            <Head>
              <title>Pedidos | Iron Lad</title>
            </Head>
            <>
              <Navbar />
              <Inside>
                <h1>Pedidos</h1>
              </Inside>
            </>
          </> 
          :
          <></>
      }
    </>
  )
}

export default Pedidos;
