const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://root:root@cluster0.qnmms.mongodb.net/API_rest?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})

module.exports = mongoose