import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { contxtname } from './Contxt';

export default function PaymentForm(props) {
  const contxtobj = React.useContext(contxtname);
  const name =(e)=>{
    props.card_name(e.target.value);
  }
  const number =(e)=>{
    props.card_number(e.target.value);
  }
  const exp =(e)=>{
    props.card_exp(e.target.value);
  }
  const cvv =(e)=>{
    props.card_cvv(e.target.value);
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
          sx={{"& .MuiInputBase-root": {
            color:contxtobj.txts
          },
          "& .MuiFormLabel-root": {
          color:contxtobj.txts
          }
            }}
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
          sx={{"& .MuiInputBase-root": {
            color:contxtobj.txts
          },
          "& .MuiFormLabel-root": {
          color:contxtobj.txts
          }
            }}
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={number}

          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
          sx={{"& .MuiInputBase-root": {
            color:contxtobj.txts
          },
          "& .MuiFormLabel-root": {
          color:contxtobj.txts
          }
            }}
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={exp}

          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
          sx={{"& .MuiInputBase-root": {
            color:contxtobj.txts
          },
          "& .MuiFormLabel-root": {
          color:contxtobj.txts
          }
            }}
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={cvv}

          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="warning" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}