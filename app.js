import express from 'express';

import { PORT } from './config/env.js';

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';


const app = express();

//routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Subscription Tracker API</h1>');
});

app.listen(PORT, () => {
  console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
});

export default app;