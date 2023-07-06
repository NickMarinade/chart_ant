const { ApolloServer, gql } = require('apollo-server');

// Define GraphQL schema
const typeDefs = gql`
  type DataPoint {
    delivery: Int
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

const fakeData = [
  {
    name: 'Total Distance',
    data: [
      { delivery: 123, number: 120 },
      { delivery: 124, number: 330 },
      { delivery: 125, number: 450 },
      { delivery: 126, number: 100 },
    ],
  },
  {
    name: 'Total Stops Made',
    data: [
      { delivery: 123, number: 2 },
      { delivery: 124, number: 4 },
      { delivery: 125, number: 4 },
      { delivery: 126, number: 1 },
    ],
  },
  {
    name: 'Total Time Spent',
    data: [
      { delivery: 123, number: 2 },
      { delivery: 124, number: 4 },
      { delivery: 125, number: 8 },
      { delivery: 126, number: 2 },
    ],
  },
  {
    name: 'Average Time Spent Between Stops',
    data: [
      { delivery: 123, number: 0 }, // Placeholder value, will be calculated
      { delivery: 124, number: 0 }, // Placeholder value, will be calculated
      { delivery: 125, number: 0 }, // Placeholder value, will be calculated
      { delivery: 126, number: 0 }, // Placeholder value, will be calculated
    ],
  },
  {
    name: 'Average Distance Between Stops',
    data: [
      { delivery: 123, number: 0 }, // Placeholder value, will be calculated
      { delivery: 124, number: 0 }, // Placeholder value, will be calculated
      { delivery: 125, number: 0 }, // Placeholder value, will be calculated
      { delivery: 126, number: 0 }, // Placeholder value, will be calculated
    ],
  },
];

// resolver for the "data" query
const resolvers = {
  Query: {
    data: () => {
      // Calculate the average time spent per stop
      fakeData[3].data.forEach((dataPoint, index) => {
        const totalTimeSpent = fakeData[2].data[index].number;
        const totalStopsMade = fakeData[1].data[index].number;
        const averageTimePerStop = totalTimeSpent / totalStopsMade;
        fakeData[3].data[index].number = averageTimePerStop;
      });

      fakeData[4].data.forEach((dataPoint, index) => {
        const totalDistance = fakeData[0].data[index].number;
        const totalStopsMade = fakeData[1].data[index].number;
        const averageDistanceBetweenStops = totalDistance / (totalStopsMade);
        fakeData[4].data[index].number = averageDistanceBetweenStops;
      });

      return fakeData;
    },
  },
};

// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`GraphQL server running at ${url}`);
});
