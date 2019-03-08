import * as graphqlField from 'graphql-fields';
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
            console.log(graphqlField(info));
            return db.getAllUsers();
        }
    },

    Mutation: {
        createUser: (parent, args, context, info: GraphQLResolveInfo) => {
            const newUser = Object.assign({id: db.getAllUsers().length + 1,}, args.input);
            db.createUser(newUser);
            return newUser;
        },

        updateUser: (parent, args, context, info: GraphQLResolveInfo) => {
            const userUpdated = db.updateUser(args.id, args.input);
            return userUpdated;
        },

        deleteUser: (parent, args, context, info: GraphQLResolveInfo) => {
            db.deleteUser(args.id);
            return true;
        }

    }

};