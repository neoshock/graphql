import schema from './schema'

var express = require('express');
var { graphqlHTTP } = require('express-graphql');

var app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(3000, () => console.log('Now browse to localhost:3000/graphql'));