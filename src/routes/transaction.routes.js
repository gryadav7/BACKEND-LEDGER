const {Router} = require('express')
const {createInitialFundsTransaction} = require("../controllers/transaction.controller")
const { createTransaction} = require("../controllers/transaction.controller")
const authMiddleware = require('../middleware/auth.middleware')
const transactionRoutes = Router();

/**
 * POST /api/transaction
 * create a new transaction
*/


// console.log(createAccountController)
// console.log(createInitialFundsTransaction)

transactionRoutes.post("/",authMiddleware.authMiddleware,createTransaction);

/**
 * -POST /api/transactions/system/initial-funds
 * Create initial funds transaction from system user
*/

transactionRoutes.post("/system/initial-funds" , authMiddleware.authSystemUserMiddleware, createInitialFundsTransaction)


module.exports = transactionRoutes;
