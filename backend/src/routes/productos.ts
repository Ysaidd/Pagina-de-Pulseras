import { Router } from "express"

const router = Router();

router.get("/productos", (req, res) => {
    res.json({"message": "Lista de productos"})
})


export default router;