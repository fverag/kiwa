import mongoose from 'mongoose';
import { MONGODB_CONNECT } from '../_constants';

mongoose.connect(MONGODB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
let connected: boolean;

db.on('error', () => {
  connected = false;
});

db.once('open', () => {
  connected = true;
});

export default db;
export { connected as connect };
