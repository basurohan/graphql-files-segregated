const types = `
    type Speaker {
        id: ID!,
        bio: String,
        name: String,
        sessions: [Session]
    }
`;

const queries = `
    getAllSpeakers: [Speaker],
    getSpeakerById(id:ID!): Speaker,
`;


module.exports = { types, queries };