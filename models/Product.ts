import mongoose, { Schema, model, Model} from 'mongoose';
import { IProduct } from '../interfaces';

const productSchema = new Schema({
    description: { type: String,required: false },
    images: [{ type: String }],
    price: { type: Number, required: true, default: 0 },
    title: { type: String, required: true },
    link: { type: String, required: true },
    category: { type: String, required: true },
},{
    timestamps: true
});


// TODO: CREAR INDICE DE MONGO
productSchema.index({ title:'text', category:'text' });

const  Product:Model<IProduct>= mongoose.models.Product || model('Product', productSchema );

export default Product;
