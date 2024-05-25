import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/////////////////////////////////////////////// insert user /////////////////////////////////////////////
// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//     const res = await prisma.user.create({
//         data: {
//             username,
//             password,
//             firstName,
//             lastName
//         }
//     })
//     console.log(res)
// }

// insertUser("john", "password", "John", "Doe")


/////////////////////////////////////////////// update user /////////////////////////////////////////////
// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }

// async function updateUser(username: string, {
//     firstName,
//     lastName
// }: UpdateParams) {
//   const res = await prisma.user.update({
//     where: { username },
//     data: {
//       firstName,
//       lastName
//     }
//   });
//   console.log(res);
// }

// updateUser("admin1", {
//     firstName: "new name",
//     lastName: "singh"
// })


/////////////////////////////////////////////// get user /////////////////////////////////////////////
// async function getUser(username: string) {
//     const user = await prisma.user.findFirst({
//       where: {
//           username: username
//       }
//     })
//     console.log(user);
// }
//   
// getUser("admin1");


/////////////////////////////////////////////// get user and todos using joins /////////////////////////////////////////////
async function getTodosAndUserDetails(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            user: true,
            title: true,
            description: true
        }
    });
    console.log(todos);
}

getTodosAndUserDetails(1);