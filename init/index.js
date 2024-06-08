const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://Nitesh:Nitesh%40123@cluster0.6tifeca.mongodb.net/";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "662d0ceb4cb32535ddc2ee40",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
