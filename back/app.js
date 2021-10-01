require("dotenv").config();

//Configuración del servidor web
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Agregar las rutas a escuchar
//app.use("/api", require("./routes/routes"));

//Iniciar el servidor
const port = process.env.PORT;
app.listen(port, () => console.log(`Servidor en https://localhost:${port}`))