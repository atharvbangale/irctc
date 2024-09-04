const cors = require('cors'); 
const express = require('express')
const app = express();
require('./DB/Conn');
const Train = require('./MODEL/trains');
const Traveler = require('./MODEL/traveler');
const News = require('./MODEL/news');
const User = require('./MODEL/userSchema');
const PersonalDetail = require('./MODEL/personalDetail');
const Address = require('./MODEL/address')
const bodyParser = require("body-parser");
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
PORT = 3002;

const allowedOrigins = ['http://localhost:3001', 'http://localhost:3000'];

app.use(cors({
  origin: allowedOrigins,
}));




app.get('/' , (req,res)=>{
    res.send({message:"Hello world"});
});

// ---------------------------------------------------------
app.get('/api/get_train', (req, res) => {
    Train.find({})
      .then(found => res.send(found))
      .catch(err => {
        console.error(err);
        res.status(500).send('Internal Server Error');
      });
  });
app.post('/api/add_train' ,(req,res)=>{
    const newTrain = new Train(req.body);
    console.log(newTrain)
    newTrain.save()
      .then(train => res.json(train))
      .catch(error => res.status(400).json({ message: error.message }));
})
// ----------------------------------------------------------------


app.get('/api/search_trains', (req, res) => {
  const { source, destination } = req.query;
  
  Train.find({ source: source, destination: destination })
    .then(found => {
      res.json(found);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: err.message });
    });
});

app.get('/api/get_train/:id', (req, res) => {
  const id = req.params.id;
  Train.findById(id)
    .then(found => res.send(found))
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});



//traveler schema 
app.post('/api/travelers', async (req, res) => {
  try {
    const newTravelers = req.body;
    
    if (!Array.isArray(newTravelers)) {
      throw new Error('Invalid request data. Expected an array.');
    }
    
    const savedTravelers = await Promise.all(newTravelers.map(traveler => new Traveler(traveler).save()));
    res.status(201).json(savedTravelers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/get_travelers', async (req, res) => {
  try {
    const travelers = await Traveler.find();
    res.status(200).json(travelers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.delete('/api/delete_travelers', async (req, res) => {
  try {
    const result = await Traveler.deleteMany({});
    res.status(200).json({ message: `${result.deletedCount} documents deleted` });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/add_news' ,(req,res)=>{
  const newNews = new News(req.body);
  
  newNews.save()
    .then(news => res.json(news))
    .catch(error => res.status(400).json({ message: error.message }));
})

// ---------------------------------------------------------
app.get('/api/get_news', (req, res) => {
  News.find({})
    .then(found => res.send(found))
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});

// Delete a news item by ID
app.delete('/api/delete_news/:id', (req, res) => {
  const { id } = req.params;
  News.findByIdAndDelete(id)
    .then(() => res.send('News item deleted successfully'))
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});


//user



// POST API for creating new personal detail
app.post('/api/personal-details', (req, res) => {
  const newPersonalDetail = new PersonalDetail({
    firstName: req.body.firstName || '',
    middleName: req.body.middleName || '',
    lastName: req.body.lastName || '',
    occupation: req.body.occupation || '',
    dob: req.body.dob || '',
    email: req.body.email || '',
    gender: req.body.gender || '',
    imageLink: req.body.imageLink || '',
    mobileNumber: req.body.mobileNumber || '',
    password:req.body.password || ''
  });

  newPersonalDetail.save()
    .then(detail => res.json(detail))
    .catch(err => console.log(err));
});

// GET API for fetching all personal details
app.get('/api/personal-details', (req, res) => {
  PersonalDetail.find({})
    .then(details => res.send(details))
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});

// POST API for user login
app.post('/api/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  PersonalDetail.findOne({ email: email })
    .then(user => {
      if (!user) {
        res.status(404).send('User not found');
      } else if (user.password !== password) {
        res.status(401).send('Incorrect password');
      } else {
        res.status(200).send('Login successful');
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});



// Delete a news item by ID
app.delete('/api/personal-details/:id', (req, res) => {
  const { id } = req.params;
  PersonalDetail.findByIdAndDelete(id)
    .then(() => res.send('News item deleted successfully'))
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});

// Delete a train item by ID
app.delete('/api/get_train/:id', (req, res) => {
  const { id } = req.params;
  Train.findByIdAndDelete(id)
    .then(() => res.send('News item deleted successfully'))
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});





app.listen(PORT ,()=>{
    console.log(`server start successfully at //localhost:${PORT}//`);
})
