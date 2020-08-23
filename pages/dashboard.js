import Head from 'next/head';
import { useRouter } from 'next/router'
import Inside from '../components/layouts/Inside';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/Auth';
import { useEffect, useState } from 'react';
// import { login, logout } from '../context/Auth/actions';

const Dashboard = () => {

  const { state, dispatch } = useAuth();
  const [signed, setSigned] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!state.token) {
      router.push('/')
    }else{
      setSigned(true)
    }
  }, [])

  return (
    <>
      {
        signed ?
          <>
            <Head>
              <title>Dashboard | Iron Lad</title>
            </Head>
            <>
              <Navbar />
              <Inside>
                <h1>Dashboard</h1>
              </Inside>
            </>
          </> 
          :
          <></>
      }
    </>
  )
}

export default Dashboard;
