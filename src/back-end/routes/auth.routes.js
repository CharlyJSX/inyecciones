import { Express } from "express";
import { Router } from "express";
import { matchData } from "express";

router = Router();

router.post("/register", (req, res) => {
    req = matchData(req);
    res.send({data:req})
});

module.export = router;