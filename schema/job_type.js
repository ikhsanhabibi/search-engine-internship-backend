const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql;

const JobType = new GraphQLObjectType({
  name: "JobType",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    company: { type: GraphQLString },
    city: { type: GraphQLString },
    country: { type: GraphQLString },
    type: { type: GraphQLString },
    summary: { type: GraphQLString },
    email: { type: GraphQLString },
    website: { type: GraphQLString },
    source: { type: GraphQLString },
    postedDate: { type: GraphQLString }
  })
});

module.exports = JobType;
