const { ApolloServer, gql } = require('apollo-server');

// Define your GraphQL schema
const typeDefs = gql`
  type DataPoint {
    year: Int
    gdp: Float
    name: String
  }

  type Query {
    data: [DataPoint]
  }
`;

// Provide fake data for the chart
const fakeData = [
  { year: 2015, gdp: 2.3, name: 'Organizing routes' },
  { year: 2016, gdp: 3.1, name: 'Organizing routes' },
  { year: 2017, gdp: 4.2, name: 'Organizing routes' },
  { year: 2018, gdp: 5.8, name: 'Organizing routes' },
  { year: 2019, gdp: 7.5, name: 'Organizing routes' },
  { year: 2015, gdp: 1.5, name: 'Monitor delivery operations' },
  { year: 2016, gdp: 2.2, name: 'Monitor delivery operations' },
  { year: 2017, gdp: 3.2, name: 'Monitor delivery operations' },
  { year: 2018, gdp: 4.6, name: 'Monitor delivery operations' },
  { year: 2019, gdp: 6.1, name: 'Monitor delivery operations' },
];

// Provide a resolver for the "data" query
const resolvers = {
  Query: {
    data: () => fakeData,
  },
};

// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`GraphQL server running at ${url}`);
});
