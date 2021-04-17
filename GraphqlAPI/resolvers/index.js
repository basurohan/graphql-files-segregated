const { sessionResolvers, sessionMutations } = require('./session');
const { getAllSpeakers, getSpeakerById } = require('./speaker');

const resolvers = {
    Query: {
        ...sessionResolvers,
        getAllSpeakers,
        getSpeakerById,
    },
    Mutation: {
        ...sessionMutations,
    },
    SessionOrError: {
        __resolveType(obj) {
            if (obj.code) {
                return 'Error'
            }
            return 'Session'
        }
    }
};

module.exports = resolvers;