import { makeStyles } from '@material-ui/core';

import Colors from '../../util/colors';

const useStyles = makeStyles({
  root: {
    marginTop: 30,
    boxShadow: 'unset'
  },
  rootActive: {
    marginTop: 30
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  contentActive: {
    backgroundColor: Colors.transparent,
    marginTop: 130,
    opacity: 0.99
  },
  mediaActive: {
    height: 220,
    objectFit: 'contain',
    position: 'absolute',
    top: 0,
    left: 0
  },
  media: {
    height: 220,
    objectFit: 'contain'
  },
  productName: {
    fontSize: 13,
    fontWeight: 400,
    color: Colors.dark
  },
  productPayment: {
    fontSize: 11
  },
  button: {
    backgroundColor: Colors.blue,
    width: '100%'
  },
  fab: {
    width: 30,
    height: 30,
    padding: 0,
    minWidth: 'unset',
    boxShadow: 'unset',
    float: 'left'
  },
  fabIcon: {
    width: 15,
    height: 15
  },
  formQtd: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  inputQtd: {
    width: '60%'
  },
  inputSize: {
    padding: '10.5px 14px',
    textAlign: 'center'
  }
});

export default useStyles;
