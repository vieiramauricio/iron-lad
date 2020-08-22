import Head from 'next/head';
import Inside from '../components/layouts/Inside';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/Auth';
// import { login, logout } from '../context/Auth/actions';

const Dashboard = () => {

  const { state, dispatch } = useAuth();

  if(state.token){
    console.log('HAHAHAHAHAHAHA')
  }

  return (
    <>
      <Head>
        <title>Dashboard | Iron Lad</title>
      </Head>
      <>
        <Navbar/>
        <Inside>
          <h1>Dashboard</h1>
        </Inside>
      </>
    </>
  )
}

export default Dashboard;
