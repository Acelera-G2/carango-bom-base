import { CardContent, Card, Typography, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DashboardService from '../../services/DashboardService/DashboardService.js';
 const lista = [{
     idMarca:1,
     nomeMarca:'aaa',
     quantidade:5
 }]
 const Dashboard = () => {
  const useStyles = makeStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    root: {
      minWidth: '400px',
      marginBottom: 20,
    },
    pos: {
      marginBottom: 12,
    },
    [`@media (max-width: 768px)`]: {
      root: {
        minWidth: '100%',
      },
    },
  });

  const [dashboardList, setDashboardList] = useState([]);

    const dashboardChange = async () => {
        const listBrand = await DashboardService.listar();
        setDashboardList(listBrand?.content)
    }
    useEffect(() => {
        dashboardChange()
        return () => {
            setDashboardList([]);
          };
    }, []);

  return (
    <div className={classes.container} data-testid="dashboard">
      {
        dashboardList.map((lista) => (
          <Card className={classes.root} key={lista.idMarca}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {lista.nomeMarca}
              </Typography>
              <Typography variant="body2" component="p">
                Valor Veículos:
                <b style={{ paddingLeft: 3 }}>
               
                </b>
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {lista.quantidade} veículo(s)
              </Typography>
            </CardContent>
          </Card>
        ))
      }
    </div>
  );
}

export default Dashboard