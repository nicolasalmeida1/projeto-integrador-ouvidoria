import mongoose from 'mongoose';

// conexao banco Nicolas
// mongoose.connect("mongodb+srv://projetointegrador:xCC7naZ8UPmqcDbA@cluster0.qpcu7sq.mongodb.net/test");

// conexao banco Thais
mongoose.connect("mongodb+srv://thaiscorrea:HWLp7VltFkehaJ5l@cluster0.bvnnzxm.mongodb.net/test");

let db = mongoose.connection;

export default db;