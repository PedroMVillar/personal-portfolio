import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ReactTyped } from "react-typed";


interface Props {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Home: React.FC<Props> = ({ setSelectedIndex }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    setSelectedIndex(-1);
  }, [setSelectedIndex]);

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME!;
  }, [pathname]);

  const customStyles = {
    grid: {
      minHeight: "calc(100vh - 20px - 33px)",
      backgroundColor: "#f5f5f5", // Cambia el color de fondo del grid
    },
    typography: {
      fontFamily: "Roboto, sans-serif", // Cambia la fuente del texto
      fontWeight: "bold", // Cambia el grosor de la fuente
      color: "#3f51b5", // Cambia el color del texto
    },
  };

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={customStyles.grid}>
      <Grid item xs={3}>
        <Stack direction={{ xs: "column", sm: "row-reverse" }} spacing={2}>
          <Box>
            <Grid container justifyContent={{ xs: "center", sm: "flex-start" }}>
              <Typography variant="h3" sx={customStyles.typography}>
                <ReactTyped
                  strings={[process.env.REACT_APP_NAME!]}
                  typeSpeed={70}
                  backSpeed={60}
                  showCursor={true}
                  cursorChar=" | 💻"
                  loop
                />
              </Typography>
            </Grid>
            <Grid container justifyContent={{ xs: "center", sm: "flex-start" }}>
              <Typography variant="body1" color="gray">
                Estudiante universitario de Ciencias de la Computación y Matemáticas Aplicadas
              </Typography>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Home;