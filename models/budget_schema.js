const mongoose =  require("mongoose")

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true,
        minlength: 6
    }
}, { collection: 'mybudget'})

module.exports = mongoose.model('budget_schema', budgetSchema)