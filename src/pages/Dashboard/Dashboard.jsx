  import { CardContent, Card, Typography, Grid,makeStyles } from '@material-ui/core';
  import React, { useEffect, useState } from 'react';
  import DashboardService from '../../services/DashboardService/DashboardService.js';
  import Paper from '@material-ui/core/Paper';

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  const Dashboard = () => {
    const [dashboardList, setDashboardList] = useState([]);
    const classes = useStyles();
      const dashboardChange = async () => {
          const listBrand = await DashboardService.listar();
          setDashboardList(listBrand)
      }
      useEffect(() => {
          dashboardChange()
      }, []);

    return (
      <div data-testid="dashboard">
        <div className={classes.root}>
          
          {
            dashboardList?.map((marca,index) => (
              <Grid container spacing={6} key={index}>
                <Grid item xs>
                  <Paper className={classes.paper}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {marca.brandName}
                      </Typography>
                      <Typography variant="body2" component="p">
                        Valor Veículos: R$ {marca.total}
                        <b style={{ paddingLeft: 3 }}>
                      
                        </b>
                      </Typography>
                      <Typography color="textSecondary">
                        {marca.amount} veículo(s)
                      </Typography>
                    </CardContent>
                </Paper>
                </Grid>
              </Grid>
            ))
          }
        </div>

      </div>
    );
  }

  export default Dashboard