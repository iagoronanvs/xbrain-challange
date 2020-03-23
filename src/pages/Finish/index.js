import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { numberToReal } from '../../util/format';

import {
  Container,
  makeStyles,
  Card,
  CardContent,
  Typography,
  Button
} from '@material-ui/core';

import '../../assets/css/Finish.css';

import purchase from '../../assets/img/purchase.png';

const useStyles = makeStyles({
  content: {
    textAlign: 'center',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center'
    paddingTop: 50,
    paddingBottom: '50px !important',
    paddingLeft: 50,
    paddingRight: 50
  },
  container: {},
  root: {
    // top: '30%',
    // position: 'absolute'
  },
  title: {
    color: '#546e79',
    fontSize: 22,
    textAlign: 'center'
  },
  text: {
    color: '#546e79',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 500,
    lineHeight: '20px'
  },
  value: {
    color: '#1976d2'
  },
  image: {
    width: 150,
    objectFit: 'contain',
    marginTop: 40,
    marginBottom: 40
  },
  button: {
    backgroundColor: '#fe9a3f',
    color: '#fff',
    fontSize: '10pt'
  }
});

function Finish({ history, client, value }) {
  const classes = useStyles();

  useEffect(() => {
    console.log(client);
    console.log(value);
    var body = document.body;
    body.classList.add('finish');
  }, []);

  return (
    <div>
      <Container maxWidth="xs" className={classes.container}>
        <Card className={classes.root} variant="outlined">
          <CardContent className={classes.content}>
            <Typography className={classes.title} gutterBottom>
              <b>{client.nome},</b>
            </Typography>
            <Typography className={classes.text}>
              Sua compra no valor
              <span className={classes.value}> R$ {numberToReal(value)}</span>
              <br />
              foi finalizada com sucesso
            </Typography>
            <div>
              <img src={purchase} alt="purchase" className={classes.image} />
            </div>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              onClick={() => history.push('/')}
            >
              Iniciar nova compra
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({
  value: state.CheckoutReducer.value,
  client: state.CheckoutReducer.client
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Finish);
