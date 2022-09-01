import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { verifyPassword } from '../../../utilities/auth';
import { connectToDatabase } from '../../../utilities/db';

export default NextAuth({
  // SETTING SESSION TO STORE JWT
  session: {
    jwt: true,
  },

  providers: [
    // SETTING PROVIDERS TO CREDENTIALS
    Providers.Credentials({
      async authorize(credentials) {
        //CONNECT TO DB, LOOK FOR USER THAT MATCHES TO CREDENTIAL EMAIL
        const client = await connectToDatabase();

        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        // USE VERIFY TO COMPARE HASHED TO INPUT
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Could not log you in!');
        }

        client.close();

        return { email: user.email };
      },
    }),
  ],
});
