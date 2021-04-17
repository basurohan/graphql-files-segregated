const Session = require('./Session');
const Speaker = require('./Speaker');
const CustomError = require('./CustomError');

const { gql } = require('apollo-server');

const types = [];
const queries = [];
const mutations = [];

const schemas = [
    Session,
    Speaker,
    CustomError,
];

schemas.forEach(schema => {
    if (schema.types !== undefined)
        types.push(schema.types);
    if (schema.queries !== undefined)
        queries.push(schema.queries);
    if (schema.mutations !== undefined)
        mutations.push(schema.mutations);
})


const typeDefs = gql`
    ${types.join('\n')},
    type Query {
        ${queries.join('\n')}
    },
    type Mutation {
        ${mutations.join('\n')}
    }
`;

module.exports = typeDefs;
