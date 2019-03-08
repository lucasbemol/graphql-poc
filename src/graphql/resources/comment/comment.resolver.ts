import { GraphQLResolveInfo } from "graphql";
import * as db from "../../../db";



export const commentResolvers = {

    Comment: {
        user: (parent, args, context, info: GraphQLResolveInfo) => {
            return context.dataloaders.userLoader.load({key: parent.user_id, info});
            //   return db.getUser(parent.user_id);
        },

        post: (parent, args, context, info: GraphQLResolveInfo) => {
            return context.dataloaders.postLoader.load({key: parent.post_id, info});
            //   return db.getPost(parent.post_id);
        }
    },

    Query: {
        commentsByPost: (parent, args, context, info: GraphQLResolveInfo) => {
            return db.getCommentsByPost(args.post);
        }
    },

    Mutation: {
        createComment: (parent, args, context, info: GraphQLResolveInfo) => {
          const newComment = Object.assign({id: db.getAllComments().length + 1,}, args.input);
          db.createComment(newComment);
          return newComment;
        },

        updateComment: (parent, args, context, info: GraphQLResolveInfo) => {
            const commentUpdated = db.updateComment(args.id, args.input);
            return commentUpdated;
        },

        deleteComment: (parent, args, context, info: GraphQLResolveInfo) => {
            db.deleteComment(args.id);
            return true;
        }

    }

};