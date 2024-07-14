import { PrismaClient } from "@repo/db/client";
const prisma = new PrismaClient();

export default function Home() {
  return (
    <div className="bg-sky-600">
        hi there
    </div>
  );
}
