import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardMedia,
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
} from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1.5,
  minWidth: "fit-content",
};

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cardData = [
    {
      image: "/img-1.jpeg",
      title: "SIM do Município",
      description:
        "Acesse os dados enviados pelos os municípios através do SIM.",
      onClick: () => console.log("Acessar SIM do Município"),
    },
    {
      image: "/img-2.jpeg",
      title: "TCE",
      description:
        "Acesse as informações sobre o tribunal de contas de um município escolhido.",
      onClick: () => console.log("Acessar SIM do Município"),
    },
    {
      image: "/img-3.jpeg",
      title: "Fornecedores",
      description:
        "Acesse as informações de fornecedores de um município escolhido.",
      onClick: handleOpen,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "white", minHeight: "100vh" }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ px: "2rem", py: "0.7rem" }} elevation={0}>
        <Container maxWidth="lg">
          <img src="/tce_logo.png" alt="Logo TCE" width={180} height="auto" />
        </Container>
      </AppBar>

      <div style={{ minWidth: "100%", paddingBottom: "4rem" }}>
        {/* Banner section */}
        <Box
          sx={{
            backgroundImage:
              "url(https://s3-alpha-sig.figma.com/img/7d69/c6a8/518695991fa4a446e3339916ee59c0e0?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eluU5n6j7pE7poqclkLmP4r~Gpol9AdMIEETzyx~UitSGExDhb6fynlIVL4cBPLU4VJFCuj5HB0BF6Fu~lAcWFS7NQc2-4DSCYUh347moKAXz5O3WS0DeOBFICmNMW6p0aGmwjdIyDlEp8STURi9lGjmUaPc-1BnDr-k2Ga-NiZnGIGwKgaN8~dh6tE0ISrlYKFI7mpdhipwOIyUGelIA19GgwCcYb4FIrHsDCeUfL6OzDgVJ39gX3x~Ox-u6Db5O3TMlWSbhjXD9PiD8d9IuyCu~j03-MuEmfXcRYqIW4~d-sIa~zAZRCCDfMPcSgFtBbu4VVv72mVmkN1xj93rwQ__)",
            backgroundSize: "cover",
            backgroundPosition: "50% 75%",
            height: "280px",
            minWidth: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              minHeight: "100%",
              bgcolor: "rgba(0, 0, 40, 0.5)",
              position: "relative",
              px: "12%",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                component="h2"
                sx={{ color: "white", fontWeight: "500", fontSize: "28px" }}
              >
                Portal de Transparência dos Municípios
              </Typography>
              <Typography
                component="h3"
                color="lightGray"
                sx={{
                  fontWeight: "400",
                  fontSize: "18px",
                  maxWidth: "33rem",
                }}
              >
                Acesse informações relacionadas ao portal de transparência dos
                municípios.
              </Typography>
            </div>
          </Box>
        </Box>

        {/* Main area */}
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            py: 8,
            gap: 4,
          }}
          component="main"
        >
          {/* Card section */}
          <Box component="section">
            <Typography sx={{ fontSize: "24px", fontWeight: "600", mb: 2 }}>
              Escolha uma das opções disponíveis abaixo
            </Typography>
            <Box gap={2} sx={{ display: "flex", alignItems: "center" }}>
              {cardData.map((card, index) => (
                <Card
                  sx={{
                    fill: 1,
                    boxShadow: 0,
                    border: "1px solid #CBD5E1",
                    borderRadius: 2,
                  }}
                  key={index}
                >
                  <CardMedia
                    sx={{ height: 100 }}
                    image={card.image}
                    title={card.title}
                  />
                  <CardContent
                    sx={{
                      px: 3,
                      boxShadow: "0px -10px 40px 40px rgba(255, 255, 255, 1)",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ px: 3, mb: 2 }}>
                    <Button
                      size="medium"
                      variant="contained"
                      onClick={card.onClick}
                      sx={{ textTransform: "capitalize" }}
                    >
                      Acessar
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Box>
          </Box>

          {/* Search section */}
          <Box
            component="section"
            border="1px solid lightGray"
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 4,
              py: 3,
              borderRadius: 1.5,
            }}
          >
            <Typography color="darkGray">
              Não encontrou o que desejava nas opções acima? Realize uma busca
              no nosso serviço de busca.
            </Typography>
            <Button
              size="medium"
              variant="contained"
              color="secondary"
              onClick={handleOpen}
              sx={{
                boxShadow: 0,
                textTransform: "capitalize",
              }}
            >
              Realizar busca
            </Button>
          </Box>

          {/* Frequent questions section */}
          <Box component="section" sx={{ width: "100%" }}>
            <Box sx={{ textAlign: "center", px: 4, mb: 4 }}>
              <Typography sx={{ fontSize: "24px", fontWeight: "500" }}>
                Perguntas frequentes
              </Typography>
              <Typography
                color="darkGray"
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  mb: 2,
                }}
              >
                Confia abaixo as perguntas frequentes e suas respostas.
              </Typography>
            </Box>

            <Accordion
              defaultExpanded
              sx={{
                boxShadow: 0,
                border: "1px solid #CBD5E1",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel-content"
                id="panel-header"
                sx={{ borderRadius: 2 }}
              >
                <Typography
                  component="span"
                  sx={{ fontWeight: "500", fontSize: "18px" }}
                >
                  De onde vem os dados?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                color="darkGray"
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Os dados disponíveis são enviados pelo o município através do
                Sistema de Informações Municipais - SIM
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </div>

      {/* Search modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Procurar por fornecedores
          </Typography>

          <List>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              Você pode realizar a pesquisa utilizando um dos dados abaixo:
            </Typography>
            <ListItem sx={{ my: 0, py: 0.3 }}>
              <span
                style={{
                  minWidth: "fit-content",
                  paddingRight: ".3rem",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Por Nome
              </span>{" "}
              - ana maria
            </ListItem>
            <ListItem sx={{ my: 0, py: 0.3 }}>
              <span
                style={{
                  minWidth: "fit-content",
                  paddingRight: ".3rem",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Por Razão Social
              </span>{" "}
              - abc serviços ltda
            </ListItem>
            <ListItem sx={{ my: 0, py: 0.3 }}>
              <span
                style={{
                  minWidth: "fit-content",
                  paddingRight: ".3rem",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Por CPF
              </span>{" "}
              - para o CPF 123.456.789-10 use 12345678910 (utilize apenas
              números)
            </ListItem>
            <ListItem sx={{ my: 0, py: 0.3 }}>
              <span
                style={{
                  minWidth: "fit-content",
                  paddingRight: ".3rem",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Por CNPJ{" "}
              </span>{" "}
              - 123.456.78/0001-10 use 123456780000110 (utilize apenas números)
            </ListItem>
          </List>

          <FormControl sx={{ minWidth: "100%", mt: 1 }}>
            <FormLabel id="demo-radio-buttons-group-label">
              {" "}
              1. Escolha o tipo de consulta:
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="cpa_cnpj"
              name="radio-buttons-group"
              sx={{ display: "flex", flexDirection: "row", mb: 1 }}
            >
              <FormControlLabel
                value="cpa_cnpj"
                control={<Radio />}
                label="CPF/CNPJ"
              />
              <FormControlLabel
                value="nome_razaosocial"
                control={<Radio />}
                label="Nome/Razão Social"
              />
            </RadioGroup>

            <FormLabel id="demo-radio-buttons-group-label">
              {" "}
              2. Digite o dado do fornecedor:
            </FormLabel>
            <TextField id="standard-basic" variant="standard" fullWidth />

            <Button
              size="medium"
              variant="contained"
              color="primary"
              sx={{
                textTransform: "capitalize",
                mt: 2,
                alignSelf: "end",
              }}
            >
              Procurar
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </Box>
  );
};

export default App;
