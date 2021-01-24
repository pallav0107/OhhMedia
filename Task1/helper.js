
const { roles, users } = require("./constants");

const subordinates  =  (id) => {
    const result = [];
    let usersIds = [];
    let tempResult =[];
  
        usersIds = roles.filter(p => p.Parent == Number(id)).map(q => q.Id);
        usersIds.forEach(a => tempResult.push(users.filter(p =>  Number(a) ==  Number(p.Id))));
        tempResult.forEach(p => result.push(p));
        usersIds = tempResult;
 
    
    return result;
}

module.exports = {
    subordinates
};