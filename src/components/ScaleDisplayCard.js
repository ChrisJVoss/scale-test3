import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Indicator from '@material-ui/icons/FiberManualRecordRounded';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const styles = {
  indicatorUnstable: {
    color: '#e20000',
    boxShadow: '0px 0px 6px 1px #e20000'
  },
  indicatorStable: {
    color: '#87bb53',
    boxShadow: '0px 0px 6px 1px #87bb53'
  },
  indicator: {
    display: 'block',
    borderRadius: 16,
    float: 'right'
  }
};

function ScaleDisplay(props) {
  const { classes } = props;
  return (
    <Grid item xs={12} sm={6}
lg={3}
    >
      <MuiThemeProvider theme={theme}>
        <Card>
          <CardContent>
            <Typography variant='body2' color='textSecondary' gutterBottom>
              {props.scaleName}
            </Typography>
            <Indicator
              className={`${classes[props.indicator]} ${classes.indicator}`}
            />
            <Typography variant='h5' component='h2'>
              {`${props.sign} ${props.weight}`}
              {` ${props.units}`}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              style={{ color: 'red' }}
            >
              {props.wrongUnit}
            </Typography>
            <Typography variant='h6'>{props.totalWeight}</Typography>
          </CardContent>
          <CardActions>
            <Button
              size='small'
              color='primary'
              onClick={() => props.swapBucket(props.scaleName)}
            >
              Swap Bucket
            </Button>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    </Grid>
  );
}

export default withStyles(styles)(ScaleDisplay);
