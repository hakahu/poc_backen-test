require('dotenv').config(); // Lädt die Umgebungsvariablen aus der .env Datei

const { Keystone } = require('@keystonejs/keystone');
const { Password, Text, Checkbox } = require('@keystonejs/fields'); // Hier wird Text importiert
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { GraphQLApp } = require('@keystonejs/app-graphql');

const keystone = new Keystone({
  name: 'POC_BACKEND_KEYSTONE',
  adapter: new MongooseAdapter({ mongoUri: 'mongodb+srv://backend-test:Test123@backend-test.dayvnzs.mongodb.net/' }),
  cookieSecret: process.env.COOKIE_SECRET || 'fallback-cookie-secret',
});

keystone.createList('User', {
  fields: {
    name: { type: Text },
    email: { type: Text, isUnique: true },
    password: { type: Password },
    isAdmin: { type: Checkbox },
  },
});

module.exports = {
    keystone,
    apps: [
      new GraphQLApp(),
      new AdminUIApp({
        enableDefaultRoute: true,
      }),
    ],
};