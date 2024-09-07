import Product from "../models/products.js";

export const fetchProducts = async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const fetchProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const product = await Product.findById(id);
		if (!product) {
			return res.status(404).json({ message: `Cannot find the product with the id of ${id}` });
		}
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const createProduct = async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const updateProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
		if (!updatedProduct) {
			res.status(404).json({ message: `Cannot find a product with the id of ${id}` });
		}
		res.status(200).json(updatedProduct);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const deleteProduct = await Product.findByIdAndDelete(id);
		if (!deleteProduct) {
			res.status(404).json({ message: `Cannot find a product with id of ${id}` });
		}
		res.status(200).json(deleteProduct);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
