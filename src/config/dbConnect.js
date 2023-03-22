import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://projetointegrador:xCC7naZ8UPmqcDbA@cluster0.qpcu7sq.mongodb.net/test");

let db = mongoose.connection;

export default db;