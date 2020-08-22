import Head from 'next/head';
import Inside from '../components/layouts/Inside';
import Navbar from '../components/Navbar';

const Dashboard = () => {
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
