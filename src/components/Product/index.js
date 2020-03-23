import React, { useState } from 'react';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Fab,
  OutlinedInput
} from '@material-ui/core';

import { connect } from 'react-redux';

import { setValue } from '../../store/actions/CheckoutActions';

import { numberToReal } from '../../util/format';

import useStyles from './styles';

import plus from '../../assets/img/baseline-add-24px.svg';
import minus from '../../assets/img/baseline-remove-24px.svg';

function Product({
  image,
  name,
  value,
  payments,
  active,
  action,
  changeValue,
  cartValue
}) {
  const classes = useStyles();
  const [qtd, setQtd] = useState(1);

  function addCart() {
    changeValue(cartValue, qtd, value);
  }

  return (
    <Card className={active ? classes.rootActive : classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={active ? classes.mediaActive : classes.media}
          image={image}
          title={name}
          onClick={action}
        />
        <CardContent className={active && classes.contentActive}>
          <Typography
            gutterBottom
            component="p"
            className={classes.productName}
          >
            {name}
          </Typography>
          <Typography
            gutterBottom
            component="p"
            className={classes.productName}
          >
            <b>R$ {numberToReal(value)}</b>
          </Typography>
          {payments.map((payment, index) => (
            <Typography
              key={index}
              className={classes.productPayment}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {payment}
            </Typography>
          ))}

          {active && (
            <div className={classes.formContainer}>
              <div className={classes.formQtd}>
                <Fab className={classes.fab} variant="extended">
                  <img className={classes.fabIcon} src={minus} alt="minus" />
                </Fab>
                <OutlinedInput
                  className={classes.inputQtd}
                  value={qtd}
                  labelWidth={0}
                  inputProps={{
                    className: classes.inputSize
                  }}
                />
                <Fab
                  className={classes.fab}
                  variant="extended"
                  onClick={() => setQtd(qtd + 1)}
                >
                  <img className={classes.fabIcon} src={plus} alt="plus" />
                </Fab>
              </div>

              <Button
                className={classes.button}
                variant="contained"
                disableElevation
                color="primary"
                onClick={addCart}
              >
                Adicionar
              </Button>
            </div>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const mapStateToProps = state => ({
  cartValue: state.CheckoutReducer.value
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValue: (cartValue, pQtd, pValue) =>
    dispatch(setValue(cartValue + pQtd * pValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
