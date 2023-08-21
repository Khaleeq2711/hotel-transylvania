const express = require('express');
const mongoose = require('mongoose');
// const Message = require('./messageSchema');
const Room = require('./roomSchema');
const cors = require('cors');
const {connectToDb , getDb} = require('./db');
const { ObjectId }  = require('mongodb')
const roomRoutes = require('./routes/room');
const signUpRoutes = require('./routes/signup');
// Create Express app
const app = express();
app.use(express.json());


mongoose.connect('mongodb+srv://badar191:sUWq8a3Ziqyvhhow@cluster0.0thtj3l.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.use('/api/rooms' , roomRoutes)
app.use('/api/signup', signUpRoutes)


app.listen(3000, () => {
  console.log('app listening on port 3000')
})














// After creating the app instance
//  app.use(cors());


// Connect to MongoDB
// let db
// connectToDb((err) => {
//   if (!err) {
//     app.listen(3000, () => {
//       console.log('app listening on port 3000')
//     })
//     db = getDb();
//   }
// })



  

// Define routes
// Add your routes here

// Start the server

// app.get('/books' , (req, res) => {
//   let books = []

//   db.collection('rooms')
//     .find()  //cursor, toArray, forEach
//     .sort({ author: 1 })
//     .forEach(book => books.push(book))
//     .then(() => {
//       res.status(200).json(books)
//     })
//     .catch(() => {
//       res.status(500).json({error: 'Could not fetch the documents' });
//     })
// })

// app.get('/books/: id', (req, res) => {
//   if (ObjectId.isValid(req.params.id)) {
//     db.collection('rooms')
//     .findOne({_id: ObjectId(req.params.id) })
//     .then(doc => {
//       res.status(200).json(doc);
//     })
//     .catch(() => {
//       res.status(500).json({error: 'Could not fetch the documents' });
//     })
//   }
//   else {
//     res.status(500).json({error: 'Not a valid Id' });
//   }
  
// })


// app.post('/books', (req, res) => {
//     const room = req.body;
//     db.collection('rooms')
//     .insertOne(room)
//     .then(result => {
//       res.status(201).json(result)
//     })
//     .catch((err) => {
//       res.status(500).json({err: 'Could not create a document'});
//     });

// });


  // app.post('/rooms', async (req, res) => {
  //   const { name, email, cnic } = req.body;
  
  //   try {
  //     const newRoom = await Room.create({name, email, cnic})
  //     res.status(201).json(newRoom)
  //   }
  //   catch(error) {
  //     res.status(500).json({error: error.message });
  //   }
  // });
    
    
    // const newRoom = new Room({
    //   name,
    //   email,
    //   cnic
    // });
  
    // newRoom.save()
    //   .then(() => {
    //     res.status(201).json({ success: true, message: 'Room Booked successfully' });
    //   })
    //   .catch((error) => {
    //     res.status(500).json({ success: false, error: error.message });
    //   });
 
  