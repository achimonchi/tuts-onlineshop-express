const express = require("express");

const router = express.Router();

const {
    authSignUp
} = require("./../controllers/auth.controllers")

router.post("/signUp", authSignUp);
router.post("/signIn");

module.exports = router;