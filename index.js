import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import usersRoutes from './routes/users.js';
import postsRoutes from './routes/posts.js';

const app = express();
const PORT = 5000;
const CONNECTION_URL = 'mongodb+srv://dbAdmin:dbAdminPassword@cbplog.f5gfm.mongodb.net/<dbname>?retryWrites=true&w=majority';

app.use(bodyParser.json());

app.use('/users',usersRoutes);
app.use('/posts',postsRoutes);

app.get('/', (req,res) => res.send('Hello from Homepage'));

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);