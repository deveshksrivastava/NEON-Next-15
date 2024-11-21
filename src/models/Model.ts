
import mongoose, { Schema, model, models, Document } from 'mongoose';

interface IPager extends Document {
  name: string;
  models: string;
  price: number;
  isElectric: boolean;
}

const pagerSchema = new Schema<IPager>({
  name: { type: String, required: true },
  models: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  isElectric: { type: Boolean, required: true },
});

const Pager = models.Pager || model<IPager>('Pager', pagerSchema);

export default Pager;