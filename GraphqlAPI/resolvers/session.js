const { ApolloError } = require('apollo-server-errors');
const _ = require('lodash');

const getAllSessions = (parent, args, context, info) => {
    const { dataSources } = context;
    return dataSources.sessionAPI.getSessions(args);
};

const getSessionById = (parent, args, context, info) => {
    const { dataSources } = context;
    const { id } = args;
    return dataSources.sessionAPI.getSessionById(id);
};

const speakers = async (parent, args, context, info) => {
  const { dataSources } = context;
  try {
    const speakersList = await dataSources.speakerAPI.getSpeakers();
      return speakersList.filter(speaker => {
        return _.filter(parent.speakers, {id: speaker.id});
    });
  } catch (err) {
    return new ApolloError('Unable to retrieve speakers', 'SPEAKERAPIERROR', {token: 'uniquetoke'});
  }
};

const Room = {
  EUROPA: 'Europa',
  SOL: 'Sol',
  SATURN: 'Saturn',
};

const toggleFavoriteSession = async (parent, args, context, info) => {
  const { dataSources } = context;
  const { id } = args;
  return dataSources.sessionAPI.toggleFavoriteSession(id);
};

const addNewSession = (parent, args, context, info) => {
  const { dataSources } = context;
  return dataSources.sessionAPI.addSession(args);
};

const sessionResolvers = {
  getAllSessions, 
  getSessionById,
};

const sessionMutations = {
  toggleFavoriteSession,
  addNewSession
};

module.exports = { sessionResolvers, sessionMutations };