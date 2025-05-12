const express =  require("express");
const { OrdenCompra, Laboratorio } =  require("../models")

const ordencompraRouter = express.Router();

ordencompraRouter.get("/", async (req, res) => {
    try {
        const ordencompra = await OrdenCompra.findAll({
        include: [Laboratorio]
        });
        res.json(ordencompra);
    } catch (error) {
        console.error("Error fetching orden compra:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

ordencompraRouter.post("/", async (req, res) => {
    try {
        const { NroOrdenC, fechaEmision, Situacion, Total, CodLab, NrofacturaProv } = req.body;
        const newOrdenCompra = await OrdenCompra.create({
            NroOrdenC,
            fechaEmision,
            Situacion,
            Total,
            CodLab,
            NrofacturaProv
        });
        res.status(201).json(newOrdenCompra);
    } catch (error) {
        console.error("Error creating orden compra:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

ordencompraRouter.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { NroOrdenC, fechaEmision, Situacion, Total, CodLab, NrofacturaProv } = req.body;
        const updatedOrdenCompra = await OrdenCompra.update({
            NroOrdenC,
            fechaEmision,
            Situacion,
            Total,
            CodLab,
            NrofacturaProv
        }, {
            where: { id }
        });
        res.status(200).json(updatedOrdenCompra);
    } catch (error) {
        console.error("Error updating orden compra:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

ordencompraRouter.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        await OrdenCompra.destroy({
            where: { id }
        });
        res.status(204).send();
    } catch (errror){
        console.error("Error deleting orden compra:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

module.exports = ordencompraRouter;