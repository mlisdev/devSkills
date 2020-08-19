const skills = [
    { id: 25430, skill: 'HTML', competent: true }, 
    { id: 25431, skill: 'CSS', competent: true }, 
    { id: 25432, skill: 'Javscript', competent: true }, 
    { id: 25433, skill: 'Ruby on Rails', competent: false }, 
    { id: 25434, skill: 'Python', competent: false}, 
];

module.exports = {
    getAll, 
    getOne, 
    create, 
    deleteOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill){
    skill.id = Date.now() % 1000000; 
    skill.competent = false; 
    skills.push(skill); 
}; 

function deleteOne(skillId){ 
    const idx = skills.findIndex(skill => skill.id === parseInt(skillId)); 
    skills.splice(idx, 1); 
}