const express = require("express");
const { Laboratorio } = require("../models")

const laboratorioRouter = express.Router();

laboratorioRouter.get("/", async (req, res) => {
    try {
        const laboratorios = await Laboratorio.findAll();
        res.json(laboratorios);
    } catch (error) {
        console.error("Error fetching laboratorios:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

laboratorioRouter.post("/", async (req, res) => {
    try {
        const { CodLab, razonSocial, direccion, telefono, email, contacto } = req.body;
        const newLaboratorio = await Laboratorio.create({
            CodLab,
            razonSocial,
            direccion,
            telefono,
            email,
            contacto
        });
        res.status(201).json(newLaboratorio);
    } catch (error) {
        console.error("Error creating Laboratorio:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

laboratorioRouter.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { CodLab, razonSocial, direccion, telefono, email, contacto } = req.body;
        const updatedLaboratorio = await Laboratorio.update({
            CodLab,
            razonSocial,
            direccion,
            telefono,
            email,
            contacto
        }, {
            where: { id }
        });
        res.status(200).json(updatedLaboratorio);
    } catch (error) {
        console.error("Error updating Laboratorio:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

laboratorioRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Laboratorio.destroy({
            where: { id }
        });
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting Laboratorio:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

module.exports = laboratorioRouter;

