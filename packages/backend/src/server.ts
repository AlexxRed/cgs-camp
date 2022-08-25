import bodyParser from 'body-parser';
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import logger from 'morgan';

import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import axios from 'axios';
import AppRouter from './routes';
import connectDB from './config/database';

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
const router = new AppRouter(app);
// Connect to MongoDB
connectDB();

// Express configuration
app.use(logger(formatsLogger));
app.use(cors());
app.set('port', process.env.PORT || 4200);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use((err, res) => {
//   res.status(500).json({ err });
// });

router.init();

// TODO: Move that to model GraphQL
const schema = buildSchema(`
  type Query {
    todos: String
  }
`);

// TODO: Create graphQL controller
const rootValue = {
  todos: async () => {
    // TODO: Create http service for that
    const todos = await axios.get('http://localhost:5000/api/todos');
    return todos.data;
  }
};

// TODO: Move that to router init function ONLY AFTER MAIN PART OF APP
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);

const port = app.get('port');
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;
