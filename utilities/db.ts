import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://kiwa_admin:rFq3MDahW4mrOEkG@cluster0.juncz.gcp.mongodb.net/kiwa?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
let connected: boolean;

db.on("error", () => {
  connected = false;
});

db.once("open", () => {
  connected = true;
});

export default db;
export { connected };
