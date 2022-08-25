const { getSkills, addOne, deleteOne } = require("../models/dev-skills");


function index(req, res) {
    let skills = getSkills()
    console.log(skills)
    res.render('index.ejs', {skills})
}

function addSkill(req,res) {
 console.log(req.body)
 addOne(req.body)
    return res.redirect("/skills")
}

function deleteSkill (req, res, next) {
    deleteOne(req.params.id)
    res.redirect('/skills')
}

module.exports = {
    index,
    addSkill,
    deleteSkill
}

