import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import usersRoutes from './routes/users.js';
import postsRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const PORT = 5000;
app.use(bodyParser.json());

app.use('/api/v1/users',usersRoutes);
app.use('/api/v1/posts',postsRoutes);

app.get('/', (req,res) => res.send('If you want to try out the api use /api/v1/posts'));

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);