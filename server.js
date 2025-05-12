const express = require("express");
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors());

const ordencompraRouter = require("./controllers/ordencompra.js");
const laboratorioRouter = require("./controllers/laboratorio.js");
const authRoutes = require("./controllers/auth.js")

app.use('/ordencompra', ordencompraRouter);
app.use('/laboratorio', laboratorioRouter);
app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})