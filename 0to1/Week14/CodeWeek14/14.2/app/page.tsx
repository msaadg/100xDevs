import axios from "axios";
import { PrismaClient } from "@prisma/client";
import client from "@/db";


async function getUserDetails() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const user = await client.user.findFirst({});
	  return {
      name: user?.username,
      username: user?.username
    }
  }  catch(e) {
    console.log(e);
  }
}

export default async function Home() {
  const userData = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.username}
                </div>
            </div>
        </div>
    </div>
  );
}
