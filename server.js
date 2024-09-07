import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import Product from "./models/products.js";
import productRoutes from "./routes/products.js";

const PORT = 4000;
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/products", productRoutes);

mongoose
	.connect("mongodb+srv://oybek9508:oybek9508@cluster0.hw8ah.mongodb.net/Node-API?retryWrites=true&w=majority")
	.then(() => {
		console.log("connected to mongodb");
		app.listen(PORT, () => console.log(`Node api is running on port ${PORT}`));
	})
	.catch((error) => {
		console.log("error: ", error);
	});
