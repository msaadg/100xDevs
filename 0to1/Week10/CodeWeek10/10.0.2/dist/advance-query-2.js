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
const prisma = new client_1.PrismaClient({
    log: ['info', 'query']
});
// Pagination on LeetCode - show only the first 10 problems on the first page and so on
// SELECT * FROM question OFFSET 0 LIMIT 10;
// SELECT * FROM question OFFSET 10 LIMIT 10;
// SELECT * FROM question OFFSET 20 LIMIT 10;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield prisma.post.findMany({
            take: 3, // LIMIT
            skip: 10, // OFFSET
        });
        console.log(res);
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("done");
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
