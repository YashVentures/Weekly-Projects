const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://joan1234:joan1234@cluster1.k51tm.mongodb.net/blackoffer?retryWrites=true&w=majority");

const todoSchema = mongoose.Schema({
    title: {
        type: String,  // Use Mongoose's String type
        required: true // You can add validations like 'required' if needed
    },
    description: {
        type: String,  // Use Mongoose's String type
        required: true // Optional: add validations
    },
    completed: {
        type: Boolean,  // Use Mongoose's Boolean type
        default: false
    }
});

const Todo = mongoose.model('todos', todoSchema);  // Make sure the model name starts with an uppercase letter
module.exports = {
    Todo  // Export the model correctly
};
