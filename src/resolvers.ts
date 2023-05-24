import { PrismaClient } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";

const prisma = new PrismaClient();

type Resolver = (
  parent: any,
  args: any,
  context: any,
  info: GraphQLResolveInfo
) => any;

const resolvers = {
  Query: {
    todos: async (
      _parent: any,
      _args: any,
      _context: any,
      _info: GraphQLResolveInfo
    ): Promise<any> => {
      return await prisma.todo.findMany();
    },
  },
  Mutation: {
    createTodo: async (
      _parent: any,
      args: { title: string },
      _context: any,
      _info: GraphQLResolveInfo
    ): Promise<any> => {
      return await prisma.todo.create({
        data: {
          title: args.title,
        },
      });
    },
    updateTodo: async (
      _parent: any,
      args: { id: string; title: string },
      _context: any,
      _info: GraphQLResolveInfo
    ): Promise<any> => {
      const id = parseInt(args.id, 10);
      return await prisma.todo.update({
        where: { id: id },
        data: {
          title: args.title,
        },
      });
    },
    deleteTodo: async (
      _parent: any,
      args: { id: string },
      _context: any,
      _info: GraphQLResolveInfo
    ): Promise<any> => {
      const id = parseInt(args.id, 10);
      return await prisma.todo.delete({
        where: { id: id },
      });
    },
  },
};

export default resolvers;
