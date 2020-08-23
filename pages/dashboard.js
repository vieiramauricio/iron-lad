import Head from 'next/head';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { useAuth } from '../context/Auth';
import axios from 'axios';

import Inside from '../components/layouts/Inside';
import Navbar from '../components/Navbar';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

import { 
  container,
  row,
  row__title
} from '../styles/Dashboard.module.css';


const Dashboard = () => {

  const { state } = useAuth();
  const [signed, setSigned] = useState(false);
  const [products, setProducts] = useState([]);
  const [vendas, setVendas] = useState([]);
  const [rows, setRows] = useState([]);
  const router = useRouter();

  const getDashboard = async () => {
    const res = await axios.get('/api/dashboard');

    const { produtos, vendas } = res.data;

    setProducts(produtos);
    setVendas(vendas);

    setRows([
      createData('Aprovados', produtos.aprovados),
      createData('Anúncios', produtos.anuncios),
      createData('Processamento', produtos.processamento),
      createData('Erro de Match', produtos.erro_match),
      createData('Aguardando validação', produtos.aguardando_validacao),
      createData('Reprovados', produtos.reprovados),
      createData('A Categorizar', produtos.categorizar),
      createData('Inativos', produtos.inativos),
    ]);
  };

  function createData(name, value) {
    return { name, value };
  }

  useEffect(() => {
    if (!state.token) {
      router.push('/')
    }else{
      setSigned(true);
      getDashboard();
    }
  }, []);

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

                <div className={container}>
                  <div className={row}>
                    <h2 className={row__title}>
                      Produtos
                    </h2>
                    <TableContainer>
                      <Table aria-label="simple table">
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">{row.value}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  <div className={row}>
                    <h2 className={row__title}>
                      Vendas
                    </h2>
                  </div>
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

export default Dashboard;
