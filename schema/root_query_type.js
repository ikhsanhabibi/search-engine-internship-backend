const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLList } = graphql;

const JobType = require("./job_type");
const Job = require("../models/job");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    jobs: {
      type: new GraphQLList(JobType),
      resolve() {
        return Job.findAll()
          .then(jobs => {
            return jobs;
          })
          .catch(err => console.log(err));
      }
    },
    job: {
      type: JobType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        return Job.findByPk(args.id)
          .then(job => {
            return job;
          })
          .catch(err => console.log(err));
      }
    }
  })
});

module.exports = RootQuery;
