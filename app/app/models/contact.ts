import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Navn er påkrevd."],
    trim: true,
    minLength: [2, "Navn må være minst 2 bokstaver."],
    maxLength: [25, "Navn må være mindre enn 25 tegn."],
  },
  email: {
    type: String,
    required: [true, "Epost er påkrevd."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Ugyldig epost."],
  },
  message: {
    type: String,
    required: [true, "Melding er påkrevd."],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
