import React from 'react';

import { reduxForm, Field } from 'redux-form';

import { numberToReal } from '../../util/format';

import {
  Grid,
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

import useStyles from './styles';

import { required, email } from '../../util/validate';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    fullWidth
    required
    variant="outlined"
    InputLabelProps={{
      shrink: true
    }}
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel
        shrink
        style={{
          backgroundColor: 'white',
          paddingLeft: 5,
          paddingRight: 5
        }}
      >
        {label}
      </InputLabel>
      <Select displayEmpty label={label} {...input} {...custom}>
        {children}
      </Select>
    </FormControl>
  );
};

function Form(props) {
  const classes = useStyles();
  const { handleSubmit, total } = props;
  return (
    <div className={classes.container}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Field
              name="nome"
              component={renderTextField}
              label="Nome"
              placeholder="Nome do cliente aqui"
              validate={[required]}
            />
          </Grid>
          <Grid item xs={5}>
            <Field
              name="email"
              component={renderTextField}
              label="Email"
              placeholder="email do cliente aqui"
              validate={[required, email]}
            />
          </Grid>
          <Grid item xs={2}>
            <Field name="sexo" component={renderSelectField} label="Sexo">
              <MenuItem value="">Selecione</MenuItem>
              <MenuItem value="M">Masculino</MenuItem>
              <MenuItem value="F">Feminino</MenuItem>
            </Field>
          </Grid>
        </Grid>
        <div className={classes.submit}>
          <Typography className={classes.total} variant="h6">
            <b>{`Total: R$ ${numberToReal(total)}`}</b>
          </Typography>

          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            type="submit"
            component="button"
          >
            Finalizar Compra
          </Button>
        </div>
      </form>
    </div>
  );
}

export default reduxForm({ form: 'clientForm' })(Form);
