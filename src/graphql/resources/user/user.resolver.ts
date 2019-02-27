import { GraphQLResolveInfo } from "graphql";
import * as db from "../../../db";



export const userResolvers = {

    User: {
        posts: (parent, args, context, info: GraphQLResolveInfo) => {
            return db.getPostsByUserId(parent.id);
        }
    },

    Query: {
        users: (parent, args, context, info: GraphQLResolveInfo) => {
            return db.getAllUsers();
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