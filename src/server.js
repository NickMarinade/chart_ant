const { ApolloServer, gql } = require('apollo-server');

// Define your GraphQL schema
const typeDefs = gql`
  type DataPoint {
    year: Int
    number: Float
  }

  type DataObject {
    name: String
    data: [DataPoint]
  }

  type Query {
    data: [DataObject]
  }
`;

// Provide fake data for the chart
const fakeData = [
  {
    name: 'Total Packages Delivered',
    data: [
      { year: 2020, number: 50000 },
      { year: 2021, number: 80000 },
      { year: 2022, number: 110000 },
      { year: 2023, number: 150000 },
    ],
  },
  {
    name: 'Total Distance',
    data: [
      { year: 2020, number: 200000 },
      { year: 2021, number: 250000 },
      { year: 2022, number: 300000 },
      { year: 2023, number: 350000 },
    ],
  },
  {
    name: 'Total Earnings',
    data: [
      { year: 2020, number: 60000 },
      { year: 2021, number: 90000 },
      { year: 2022, number: 120000 },
      { year: 2023, number: 180000 },
    ],
  },
  {
    name: 'Total Drivers',
    data: [
      { year: 2020, number: 45000 },
      { year: 2021, number: 55000 },
      { year: 2022, number: 70000 },
      { year: 2023, number: 90000 },
    ],
  },
  {
    name: 'Total Clients',
    data: [
      { year: 2020, number: 35000 },
      { year: 2021, number: 40000 },
      { year: 2022, number: 50000 },
      { year: 2023, number: 60000 },
    ],
  },
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
