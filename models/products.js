import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please, enter the title of the product'],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
