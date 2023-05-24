"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const resolvers = {
    Query: {
        todos: (_parent, _args, _context, _info) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.todo.findMany();
        }),
    },
    Mutation: {
        createTodo: (_parent, args, _context, _info) => __awaiter(void 0, void 0, void 0, function* () {
            return yield prisma.todo.create({
                data: {
                    title: args.title,
                },
            });
        }),
        updateTodo: (_parent, args, _context, _info) => __awaiter(void 0, void 0, void 0, function* () {
            const id = parseInt(args.id, 10);
            return yield prisma.todo.update({
                where: { id: id },
                data: {
                    title: args.title,
                },
            });
        }),
        deleteTodo: (_parent, args, _context, _info) => __awaiter(void 0, void 0, void 0, function* () {
            const id = parseInt(args.id, 10);
            return yield prisma.todo.delete({
                where: { id: id },
            });
        }),
    },
};
exports.default = resolvers;
