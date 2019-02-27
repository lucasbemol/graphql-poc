import { GraphQLResolveInfo } from "graphql";
import * as db from "../../../db";



export const postResolvers = {

    Post: {
        comments: (parent, args, context, info: GraphQLResolveInfo) => {
          return db.getCommentsByPost(parent.id);
        }
    },

    Query: {
        posts: (parent, args, context, info: GraphQLResolveInfo) => {
            return db.getAllPosts();
        }
    },

    Mutation: {
        createPost: (parent, args, context, info: GraphQLResolveInfo) => {
          const newPost = Object.assign({id: db.getAllPosts().length + 1,}, args.input);
          db.createUser(newPost);
          return newPost;
        },

        updatePost: (parent, args, context, info: GraphQLResolveInfo) => {
            const postUpdated = db.updatePost(args.id, args.input);
            return postUpdated;
        },

        deletePost: (parent, args, context, info: GraphQLResolveInfo) => {
            db.deletePost(args.id);
            return true;
        }

    }

};