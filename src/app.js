const express  = require("express")
const cookieParser = require("cookie-parser")


const app = express();

app.use(express.json());
app.use(cookieParser());


/**
 * - Routes
*/

const accountRouter = require("./routes/account.routes");
const authRouter = require("./routes/auth.routes")
const transactionRoutes = require("./routes/transaction.routes")






/**
 * - Use Routes
*/


app.use("/api/account",accountRouter);
app.use("/api/auth",authRouter);
app.use("/api/transactions",transactionRoutes);
app.use("/api",accountRouter);
module.exports = app;