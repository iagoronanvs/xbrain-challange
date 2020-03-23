import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import 'typeface-roboto';

import { Container, Grid, makeStyles } from '@material-ui/core';

import { setClient } from '../../store/actions/CheckoutActions';

import Title from '../../components/Title';
import Product from '../../components/Product';
import Form from '../../components/Form';

import '../../assets/css/App.css';

const useStyles = makeStyles({
  container: {
    padding: 0
  }
});

function Products({ products, value, client, history }) {
  const classes = useStyles();
  const [active, setActive] = useState(1);

  useEffect(() => {
    var body = document.body;
    body.classList.remove('finish');
  }, []);

  function selectItem(index) {
    setActive(index === active ? null : index);
  }

  function handleSubmit(values) {
    client(values);
    history.push('/finish');
  }

  return (
    <Container className={classes.container} maxWidth="md">
      <Title text="Produtos" />
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={4} md={3} key={index} className={classes.grid}>
            <Product
              image={product.image}
              name={product.name}
              value={product.value}
              payments={product.payments}
              active={index === active}
              action={() => selectItem(index)}
            />
          </Grid>
        ))}
      </Grid>

      <Title text="Dados do Cliente" />
      <Form onSubmit={handleSubmit} total={value} />
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.ProductReducer.products,
  value: state.CheckoutReducer.value
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  client: clientData => dispatch(setClient(clientData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
