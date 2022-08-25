const skills = [
    {id: 1, skillName: "HTML", skillDesc: "Can code in HTML"},
    {id: 2, skillName: "JS", skillDesc: "Can code in JS"},
    {id: 3, skillName: "CSS", skillDesc: "Can code in CSS"}
]

module.exports = {
    getSkills, 
    getOne, 
    addOne,
    deleteOne
}

function getSkills(){
    return skills
} 

function getOne(id) {
    return skills.find(skill => skill.name === parseInt(id))
}

function addOne(info){
    let id = Math.floor(Math.random()*100) + 1
    info.id = id  
    skills.push(info)
    console.log(info)
    console.log(skills)
}

function deleteOne(id) {
    let deleteId = skills.indexOf(skill => skill.id === parseInt(id))
    skills.splice(deleteId,1)
}