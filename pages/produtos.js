import Head from 'next/head';
import { useRouter } from 'next/router'
import Inside from '../components/layouts/Inside';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/Auth';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { 
  container
} from '../styles/Produtos.module.css';

const Produtos = () => {

  const { state } = useAuth();
  const [signed, setSigned] = useState(false);
  // const [rows, setRows] = useState([]);
  const router = useRouter();

  const getProdutos = async () => {
    const res = await axios.get('/api/produtos');
    console.log(res.data);
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

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

                <div className={container}>
                  <TableContainer>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Dessert (100g serving)</TableCell>
                          <TableCell align="right">Calories</TableCell>
                          <TableCell align="right">Fat&nbsp;(g)</TableCell>
                          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                          <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>

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