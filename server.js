import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import Product from './models/products.js';
const PORT = 4000;
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('Hello node rest api');
    res.send('Hello rest api');
});

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'There has been an error with fetching the data' });
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'There has been error with finding the product' });
    }
});

app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log('error', error.message);
        res.status(500).json({ message: error.message });
    }
});

app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: `cannot find product with id: ${id}` });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

mongoose
    .connect(
        'mongodb+srv://oybek9508:oybek9508@cluster0.hw8ah.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => {
        console.log('connected to mongodb');
        app.listen(PORT, () => console.log(`Node api is running on port ${PORT}`));
    })
    .catch((error) => {
        console.log('error: ', error);
    });
