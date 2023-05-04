import mongoose from 'mongoose';

// conexao banco Nicolas
// mongoose.connect("mongodb+srv://projetointegrador:xCC7naZ8UPmqcDbA@cluster0.qpcu7sq.mongodb.net/test");

// conexao banco Thais

mongoose.connect("mongodb+srv://thaiscorrea:DCBFmeo0t4eWcSd9@cluster0.ljlyij6.mongodb.net/test");
let db = mongoose.connection;

export default db;