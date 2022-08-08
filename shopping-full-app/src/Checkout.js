import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, makeStyles, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { SettingsInputAntennaTwoTone } from "@mui/icons-material";

const theme = createTheme();

export default function Checkout(props) {
  // const navigate = useNavigate();
  const location = useLocation();
  const { cartarr, ttl } = location.state;
  console.log(cartarr);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const steps = ["Shipping address", "Payment details", "Review your order"];
  const [fname, setFname] = React.useState();
  const [lname, setLname] = React.useState();
  const [address, setAddress] = React.useState();
  const [city, setCity] = React.useState();
  const [states, setStates] = React.useState();
  const [zip, setZip] = React.useState();
  const [country, setCountry] = React.useState();

  const [name_on_card, setNameCard] = React.useState();
  const [card_number, setCardNumber] = React.useState();
  const [card_exp, setCardExp] = React.useState();
  const [card_cvv, setCVV] = React.useState();

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            first_name={(val) => setFname(val)}
            lname_name={(val) => setLname(val)}
            address_name={(val) => setAddress(val)}
            city_name={(val) => setCity(val)}
            states_name={(val) => setStates(val)}
            zip_name={(val) => setZip(val)}
            country_name={(val) => setCountry(val)}
          />
        );

      case 1:
        return (
          <PaymentForm
            card_name={(val) => setNameCard(val)}
            card_number={(val) => setCardNumber(val)}
            card_exp={(val) => setCardExp(val)}
            card_cvv={(val) => setCVV(val)}
          />
        );
      case 2:
        return (
          <Review
            products={cartarr}
            totalprice={ttl}
            username={fname + " " + lname}
            add={address}
            cityname={city}
            state={states}
            pin={zip}
            country={country}
            card_uname={name_on_card}
            card_nmbr={card_number}
            card_exps={card_exp}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }
  const placeorder=()=>{
    props.empcart()
  }

  return (
    <ThemeProvider theme={theme}>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        sx={{ marginTop: "100px", fontWeight: "bolder" }}
      >
        Checkout
      </Typography>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #
                  {(Math.random() * 1000000000).toFixed("")}. We have emailed
                  your order confirmation, and will send you an update when your
                  order has shipped.
                </Typography>
                <Typography>
                  Continue shopping{" "}
                  <p style={{ cursor: "pointer" }}>
                    <NavLink to="/">click here</NavLink>
                  </p>
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      sx={{ mt: 3, ml: 1, color: "#FBB03B" }}
                    >
                      Back
                    </Button>
                  )}

                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      onClick={()=> {handleNext(); placeorder()}}
                      sx={{ mt: 3, ml: 1, backgroundColor: "#FBB03B" }}
                    >
                      Place order
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1, backgroundColor: "#FBB03B" }}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
