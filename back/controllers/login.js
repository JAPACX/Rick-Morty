
const userLogin = require('../utils/users')


const login = (req, res) => {
    const { email, password } = req.params;
    const dataAccess = userLogin[0]
    
    if (dataAccess.email === email && dataAccess.password === password) {
        return res.status(200).send({access: `true`});
    } else {
        return res.status(200).send({access: `false`});
    }
    

};


module.exports = login;