import { makeStyles } from '@material-ui/core';

import Colors from '../../util/colors';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  submit: {
    float: 'right',
    marginTop: 40
  },
  total: {
    color: Colors.dark,
    textAlign: 'center'
  },
  button: {
    backgroundColor: Colors.orange,
    color: Colors.white,
    marginBottom: 50
  }
});

export default useStyles;
