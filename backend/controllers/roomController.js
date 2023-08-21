
const signUp = require('../signupSchema');


app.post('/api/data',  async (req, res) => {


  const { fname, sname, dateofbirth, phonenumb, gender, password, email, cnic } = req.body;
  let newSignUp;

  try {
    newSignUp = await signUp.create({ fname, sname, dateofbirth, phonenumb, gender, password, email, cnic });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
    return; // Add return statement to prevent further execution
  }
  res.status(201).json(newSignUp);
});