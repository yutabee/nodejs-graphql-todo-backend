"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const TodoType = new graphql_1.GraphQLObjectType({
    name: "Todo",
    fields: {
        id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
        title: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        completed: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean) },
        createdAt: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
    },
});
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        todos: {
            type: new graphql_1.GraphQLList(TodoType),
            resolve() {
                return prisma.todo.findMany();
            },
        },
    },
});
const RootMutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createTodo: {
            type: TodoType,
            args: {
                title: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            },
            resolve(_parent, args) {
                return prisma.todo.create({
                    data: {
                        title: args.title,
                        completed: false,
                    },
                });
            },
        },
        updateTodo: {
            type: TodoType,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
                title: { type: graphql_1.GraphQLString },
            },
            resolve(_parent, args) {
                return prisma.todo.update({
                    where: { id: parseInt(args.id, 10) },
                    data: {
                        title: args.title,
                    },
                });
            },
        },
        deleteTodo: {
            type: TodoType,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
            },
            resolve(_parent, args) {
                return prisma.todo.delete({
                    where: { id: parseInt(args.id, 10) },
                });
            },
        },
    },
});
exports.default = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});
