import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { contxtname } from './Contxt';





export default function Review(props) {
  const addresses = [props.add, props.cityname, props.state, props.pin, props.country];
  const contxtobj = React.useContext(contxtname);
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: props.card_uname },
  { name: 'Card number', detail: props.card_nmbr },
  { name: 'Expiry date', detail: props.card_exps },
];
  return (
    <React.Fragment sx={{color:contxtobj.txts,backgroundColor:contxtobj.bgsboxs}}>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {props.products.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0,color:contxtobj.txts }}>
            <ListItemText  primary={product.name}  secondary={<Typography sx={{color:contxtobj.txts}} variant="body2">{product.quan}</Typography>}/>
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${props.totalprice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{props.username}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}