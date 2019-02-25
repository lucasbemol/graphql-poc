import { GraphQLResolveInfo } from "graphql";

export const userResolvers = {

    User: {
        posts: (parent, args, context, info: GraphQLResolveInfo) => {
            // parent.id
        }
    },

    Query: {
        users: (parent, args, context, info: GraphQLResolveInfo) => {

        }
    },

    Mutation: {
        createUser: (parent, args, context, info: GraphQLResolveInfo) => {

        },

        updateUser: (parent, args, context, info: GraphQLResolveInfo) => {

        },

        deleteUser: (parent, args, context, info: GraphQLResolveInfo) => {

        }

    }

};