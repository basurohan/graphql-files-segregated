const _ = require('lodash');

const getAllSpeakers = async (parents, args, context, info) => {
    const { dataSources } = context;
    return await dataSources.speakerAPI.getSpeakers();
};

const getSpeakerById = async (parent, args, context, info) => {
    const { dataSources } = context;
    const { id } = args;
    return await dataSources.speakerAPI.getSpeakerById(id);
};

const sessions = (parent, args, context, info) => {
    const { dataSources } = context;
    const sessionList = dataSources.sessionAPI.getSessions();
    return sessionList.filter(session => {
        return _.filter(parent.sessions, {id: session.id});
    });
};


module.exports = { getAllSpeakers, getSpeakerById };