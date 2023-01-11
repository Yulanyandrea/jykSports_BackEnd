import product from './api/product';
import user from './api/user';
import { Application } from 'express';
import LocalAuth from './auth/local';

function routes(app:Application) {
  app.use('/api/users', user);
  app.use('/api/products',product);

  // authentication routes
  app.use('/auth/local',LocalAuth)

}

export default routes;
