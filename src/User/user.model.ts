import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const User = mongoose.model('User', UserSchema);

// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// @Schema()
// export class User extends Document {
//   @Prop({ required: true })
//   firstname: string;

//   @Prop({ required: true })
//   lastname: string;

//   @Prop({ required: true })
//   email: string;

//   @Prop({ required: true })
//   password: string;
// }

// export const UserSchema = SchemaFactory.createForClass(User);
