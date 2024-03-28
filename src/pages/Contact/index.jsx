import { useState } from "react";
import picture from "../../assets/img/EmailCampaign-bro.svg";
import SimpleSnackbar from "../../components/SimpleSnackbar";
import "./styles.scss";
import emailjs from "@emailjs/browser";
import {
  Container,
  Button,
  FormControl,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

function Contact() {
  console.log("public key: " + process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  emailjs.init({
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY.toString(),
  });
  console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("checkValidity:" + event.target.checkValidity());
    if (event.target.checkValidity()) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID.toString(),
          process.env.REACT_APP_EMAILJS_TEMPLATE_CONTACT,
          "#contact-form",
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY.toString()
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessage("✅   Message envoyé   👍");
          setOpen(true);
        })
        .catch((error) => {
          console.log("FAILED...", error);
          setMessage("🚨   Echec de l'envoi   😱");
          setOpen(true);
        });
    } else {
      setMessage("🚨   Echec: Merci de remplir tous les champs (*)   🚨");
      setOpen(true);
    }
  }

  return (
    <main className="contact-page">
      <h2>Contactez-moi</h2>
      <Container>
        <div className="contact">
          <div className="contact__picture">
            <img src={picture} alt="contact-me" />
          </div>
          <div className="contact__form">
            <form id="contact-form">
              <FormControl fullWidth={true} required={true}>
                <TextField
                  id="user_name"
                  variant="standard"
                  label="Nom"
                  name="user_name"
                  margin="normal"
                  color="kaki"
                  required
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="user_subject"
                  variant="standard"
                  label="Sujet"
                  name="user_subject"
                  margin="normal"
                  color="kaki"
                  required
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="user_email"
                  variant="standard"
                  label="Email"
                  name="user_email"
                  margin="normal"
                  color="kaki"
                  required
                />
              </FormControl>
              <FormControl required>
                <TextField
                  multiline
                  id="user_message"
                  name="user_message"
                  label="Message"
                  color="kaki"
                  rows={8}
                  variant="standard"
                  required
                ></TextField>
              </FormControl>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="J'accepte la politique de confidentialité."
              />
              <Button
                color="kaki"
                variant="contained"
                type="submit"
                onClick={handleSubmit}
                sx={{ fontFamily: "Poppins", fontWeight: "500", color: "#fff" }}
              >
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </Container>
      <SimpleSnackbar message={message} open={open} setOpen={setOpen} />
    </main>
  );
}

export default Contact;
