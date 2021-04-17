const { ApolloServer, ApolloError } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');
const SpeakerAPI = require('./datasources/speakers');
const typeDefs = require('./schema/index');
const resolvers = require('./resolvers/index');

const PORT = process.env.PORT || 4000;

const dataSources = () => ({
    sessionAPI: new SessionAPI(),
    speakerAPI: new SpeakerAPI(),
});

const server = new ApolloServer({
    typeDefs, 
    resolvers, 
    dataSources,
    debug: false, // Stack trace will not be displayed for errors
    formatError: (err) => {
        if (err.extensions.code == 'INTERNAL_SERVER_ERROR') {
            return new ApolloServer('We are having some error', 'ERROR', {token: 'uniquetoen'});
        }
        return err;
    }
    // introspection: false,
    // playground: false,
});

server
    .listen({port: PORT})
    .then(({ url }) => console.log(`graphql server running at ${url}`));
