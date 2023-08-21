const signUp = require('../signupSchema');


//create room
const createSignUp = async (req, res) => {
    console.log('errrrrorooooorr')
    const { fname, sname, dateofbirth, phonenumb, gender, password, email, cnic } = req.body;
  
    try {
      const newSignUp = await signUp.create({ fname, sname, dateofbirth, phonenumb, gender, password, email, cnic})
      res.status(201).json(newSignUp)
    }
    catch(error) {
      res.status(500).json({error: error.message });
    }
}

module.exports = {createSignUp }