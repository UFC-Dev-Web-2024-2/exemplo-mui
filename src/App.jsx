import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Item from "@mui/material/ListItem";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import {
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

const fetchMunicipios = async () => {
  const response = await fetch(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados/ce/municipios?orderBy=nome"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar municipios");
  }

  const data = await response.json();

  return data;
};

const App = () => {
  const [municipios, setMunicipios] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchMunicipios().then((data) => setMunicipios(data));
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#E8E8E8", minHeight: "100vh" }}>
      <AppBar position="static" sx={{ px: "1.5rem" }} elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            color="white"
            sx={{ flexGrow: 1, fontSize: "1.2rem", textTransform: "uppercase" }}
          >
            Portal Da transparência dos municípios
          </Typography>

          <img src="/tce_logo.png" alt="Logo TCE" width={180} height="auto" />
        </Toolbar>
      </AppBar>
      <Container maxWidth="100%" sx={{ mt: 3 }}>
        <Stack spacing={1} sx={{ minWidth: "100%" }}>
          <Item>
            <Card
              sx={{
                flexDirection: "row",
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "space-between",
                px: "1rem",
              }}
              elevation={0}
            >
              <CardContent sx={{ maxWidth: "70%" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  Portal TCE
                </Typography>
                <Typography>
                  No Portal da Transparência, o cidadão tem acesso à execução
                  orçamentária e financeira do Tribunal de Contas do Estado do
                  Ceará (TCE-CE).
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    mt: "0.5rem",
                    color: "text.secondary",
                  }}
                >
                  Acesse a nossa página principal para ter acesso a muito mais
                  informações
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "uppercase", width: "13rem" }}
                >
                  Ir para o portal
                </Button>
              </CardActions>
            </Card>
          </Item>

          <Item>
            <Card
              sx={{
                flexGrow: 1,
                px: "1rem",
              }}
              elevation={0}
            >
              <CardContent sx={{ maxWidth: "70%" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  Município
                </Typography>
                <Typography>
                  Aqui você poderá encontrar informações sobre{" "}
                  <b>
                    Receitas, Depesas, Agentes Públicos, Licitações e muito
                    mais.
                  </b>
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    mt: "0.5rem",
                    color: "text.secondary",
                  }}
                >
                  Estes dados são enviados pelos municípios através do Sistema
                  de Informações Municipais -{" "}
                  <Typography
                    component="span"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    SIM
                  </Typography>
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "space-between",
                  pl: "1rem",
                  pb: "1rem",
                  alignItems: "center",
                }}
              >
                <Autocomplete
                  disablePortal
                  options={(municipios || []).map((option) => option.nome)}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Selecione um município" />
                  )}
                />
                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "uppercase", width: "13rem" }}
                >
                  Buscar informações
                </Button>
              </CardActions>
            </Card>
          </Item>

          <Item>
            <Card
              sx={{
                flexDirection: "row",
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "space-between",
                px: "1rem",
              }}
              elevation={0}
            >
              <CardContent sx={{ maxWidth: "70%" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  Fornecedores
                </Typography>
                <Typography>
                  Fornecedores são pessoas físicas ou jurídicas que fornecem{" "}
                  <b>bens</b>, <b>serviços</b> ou <b>obras</b> para os
                  municípios do Ceará.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    mt: "0.5rem",
                    color: "text.secondary",
                  }}
                >
                  Acesse a área de pesquisa de fornecedores para ter acesso as
                  informações completas
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "uppercase", width: "13rem" }}
                  onClick={handleOpen}
                >
                  Buscar fornecedor
                </Button>
              </CardActions>
            </Card>
          </Item>
        </Stack>
      </Container>
      <Box
        component={"footer"}
        sx={{
          position: "absolute",
          bottom: 0,
          bgcolor: "white",
          minWidth: "100%",
          p: "2rem 4rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box maxWidth={"50%"}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
          >
            De onde vem nossos dados?
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              mt: "0.5rem",
              color: "text.secondary",
            }}
          >
            Nossos dados são enviados pelo próprio município através do Sistema
            de Informações Municipais -{" "}
            <Typography
              component={"span"}
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              SIM
            </Typography>
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, maxWidth: "30%" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
          >
            Não achou o que procura?
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              mt: "0.5rem",
              color: "text.secondary",
              display: "flex",
              alignItems: "center",
            }}
          >
            <SearchIcon />
            <span>Então utilize nosso</span>
            <Button onClick={handleOpen} color="primary" sx={{fontWeight: "bold"}}>
              SERVIÇO DE BUSCA
            </Button>
          </Typography>
        </Box>
      </Box>

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
            <ListItem sx={{ my: 0, py: 0.5 }}>
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
            <ListItem sx={{ my: 0, py: 0.5 }}>
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
            <ListItem sx={{ my: 0, py: 0.5 }}>
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
            <ListItem sx={{ my: 0, py: 0.5 }}>
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

          <FormControl sx={{ minWidth: "100%", mt: 2 }}>
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
                textTransform: "uppercase",
                width: "13rem",
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
