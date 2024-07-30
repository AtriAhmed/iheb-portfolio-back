const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    name: String,
    position: String,
    date: String,
    description: String,
    showInCV: Boolean,
    image: String,
});

module.exports = mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema, "experience");