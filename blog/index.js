import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";


const PORT = 5000 || process.env.PORT
mongoose
    .connect('mongodb+srv://bvtkvl:194852Si@cluster0.rv8o9hw.mongodb.net/?retryWrites=true&w=majority')
    .then(()=> {
        console.log('DB ok')
    })
    .catch((err) => {
        console.log('DB in not ok', err)
    });

const app = express();

app.use(express.json());
app.get('/',
    (req, res) => {
        res.send('111HHi');
})

app.post('/auth/login',
    (req, res) => {
        console.log(req.body)

        const token = jwt.sign({
            email: req.body.email,
            fullName: "Богдан"
        }, 'secretkey');

        res.json({
            success: true,
            token,
        })
    })

app.listen(PORT, (err) => {
    if(err){
        return console.log(err);
    }

    console.log('Server OK')
})