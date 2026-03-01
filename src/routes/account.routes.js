const express = require("express")
const {authMiddleware} = require("../middleware/auth.middleware")
const {createAccountController, getUserAccountController, getAccountBalanceController} = require("../controllers/account.controller")

const router = express.Router();


/**
 * -POST /api/account/
 * - Create a new account
 * Protected Route
*/


router.post("/",authMiddleware , createAccountController);


/**
 * -GET /api/accounts/
 * GET all acccount of the logged-in user account
 * protected Route
*/

router.get("/accounts", authMiddleware, getUserAccountController)


/**
 *- GET /api/accounts/balance/:accountId 
*/

router.get("/accounts/balance/:accountId", authMiddleware, getAccountBalanceController);



module.exports = router;