// interface User {
// 	name: string;
// 	age: number;
// }

// function sumOfAge(user1: User, user2: User) {
//   return user1.age + user2.age;
// };

// // Example usage
// const result = sumOfAge({
// 	name: "harkirat",
// 	age: 20
// }, {
// 	name: "raman",
// 	age: 21
// });
// console.log(result); // Output: 41


//////////////////////////////////////////// Pick ////////////////////////////////////////////
// interface User {
// 	id: number;
// 	name: string;
// 	email: string;
// 	createdAt: Date;
// }
  
// // For a profile display, only pick `name` and `email`
// type UserProfile = Pick<User, 'name' | 'email'>;

// const displayUserProfile = (user: UserProfile) => {
// console.log(`Name: ${user.name}, Email: ${user.email}`);
// };

//////////////////////////////////////////// Partial ////////////////////////////////////////////
// interface User {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// };

// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// type UpdatePropsOptional = Partial<UpdateProps>

// function updateUser(updatedProps: UpdatePropsOptional) {
//     // hit the database tp update the user
// }
// updateUser({})

//////////////////////////////////////////// Readonly ////////////////////////////////////////////
// interface Config {
// 	readonly endpoint: string;
// 	readonly apiKey: string;
// }

// const config: Readonly<Config> = {
// endpoint: 'https://api.example.com',
// apiKey: 'abcdef123456',
// };

// // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

//////////////////////////////////////////// Record ////////////////////////////////////////////
// interface User {
// id: number;
// name: string;
// }

// type Users = Record<string, User>;

// const users: Users = {
// 'abc123': { id: 123, name: 'John Doe' },
// 'xyz789': { id: 789, name: 'Jane Doe' },
// };

// console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

//////////////////////////////////////////// Map ////////////////////////////////////////////
// interface User {
// 	id: number;
// 	name: string;
// }

// // Initialize an empty Map
// const usersMap = new Map<string, User>();

// // Add users to the map using .set
// usersMap.set('abc123', { id: 123, name: 'John Doe' });
// usersMap.set('xyz789', { id: 789, name: 'Jane Doe' });

// // Accessing a value using .get
// console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }

//////////////////////////////////////////// Exclude ////////////////////////////////////////////
// type Event1 = 'click' | 'scroll' | 'mousemove';
// type ExcludeEvent = Exclude<Event1, 'scroll'>; // 'click' | 'mousemove'

// const handleEvent = (event: ExcludeEvent) => {
//   console.log(`Handling event: ${event}`);	
// };

// handleEvent('click'); // OK

//////////////////////////////////////////// Zod ////////////////////////////////////////////
import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

export type finalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: finalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);