const types = `
    input SessionInput {
        title: String,
        description: String,
        startsAt: String,
        endsAt: String,
        room: String,
        day: String,
        format: String,
        track: String,
        level: String
        favorite: Boolean
    }

    enum Room {
        EUROPA,
        SOL,
        SATURN
    }

    type Session {
        id: ID!,
        title: String,
        description: String,
        startsAt: String,
        endsAt: String,
        room: Room,
        day: String,
        format: String,
        track: String @deprecated(reason: "Will be miragted to tags..."),
        level: String
        favorite: Boolean
        speakers: [Speaker]
    }

    union SessionOrError = Session | Error
`;

const queries = `
    getAllSessions (
        id: ID,
        title: String,
        description: String,
        startsAt: String,
        endsAt: String,
        room: String,
        day: String,
        format: String,
        track: String,
        level: String
    ): [Session],
    getSessionById(id:ID!): SessionOrError,
`;

const mutations = `
    toggleFavoriteSession(id: ID!): Session,
    addNewSession(session: SessionInput): Session
`;


module.exports = { types, queries, mutations};