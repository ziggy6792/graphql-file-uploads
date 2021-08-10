import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { buildSchema } from 'type-graphql';
import { graphqlUploadExpress } from 'graphql-upload';

// import { createConnection } from "typeorm";

import { RegisterResolver } from './modules/user/Register';
import { ProfilePictureResolver } from './modules/user/ProfilePicture';

const main = async () => {
  // await createConnection();

  const schema = await buildSchema({
    resolvers: [RegisterResolver, ProfilePictureResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  const app = Express();
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('server started on http://localhost:4000/graphql');
  });
};

main();
