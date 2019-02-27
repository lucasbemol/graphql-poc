import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import { Query } from './query'
import { Mutation } from './mutation'

import { postTypes } from './resources/post/post.schema';
import { userTypes } from './resources/user/user.schema';
import { commentTypes } from './resources/comment/comment.schema';

import { userResolvers } from './resources/user/user.resolver';
import { postResolvers } from './resources/post/post.resolver';
import { commentResolvers } from './resources/comment/comment.resolver';

const resolvers = merge(
    userResolvers,
    postResolvers,
    commentResolvers
)

const SchemaDefinition = `
    type Schema {
        query: Query
        mutation: Mutation
    }
`;

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        Query,
        Mutation,
        commentTypes,
        postTypes,
        userTypes
    ],
    resolvers
});