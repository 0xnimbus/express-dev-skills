var express = require('express');
var router = express.Router();
// var express = require('express');
// var router = express.Router();
var skillsController = require('../controllers/skill')

const Skill = require("../models/dev-skills")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   let skills = Skill.getSkills()
//   res.render("index", {skills: Skill.getSkills()})
// });

router.get('/', skillsController.index );

router.get('/addskill', function(req, res, next) {
  res.render('addskill');
});

router.post('/add', skillsController.addSkill )

router.delete('/:id', skillsController.deleteSkill )

module.exports = router;
