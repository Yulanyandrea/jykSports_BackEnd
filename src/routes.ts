import product from './api/product';
import user from './api/user';
import { Application } from 'express';
import LocalAuth from './auth/local';
import upload from './api/upload';

function routes(app:Application) {
  app.use('/api/users', user);
  app.use('/api/products',product);
  app.use('/api/upload', upload);

  // authentication routes
  app.use('/auth/local',LocalAuth)

}

export default routes;
