import Head from 'next/head';
import { useRouter } from 'next/router'
import Inside from '../components/layouts/Inside';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/Auth';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Produtos = () => {

  const { state } = useAuth();
  const [signed, setSigned] = useState(false);
  const router = useRouter();

  const getProdutos = async () => {
    const res = await axios.get('/api/produtos');
    console.log(res.data)
  };

  useEffect(() => {
    if (!state.token) {
      router.push('/')
    }else{
      setSigned(true);
      getProdutos();
    }
  }, [])

  return (
    <>
      {
        signed ?
          <>
            <Head>
              <title>Produtos | Iron Lad</title>
            </Head>
            <>
              <Navbar />
              <Inside>
                <h1>Produtos</h1>
              </Inside>
            </>
          </> 
          :
          <></>
      }
    </>
  )
}

export default Produtos;