// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "@/models/User";
import type { NextApiRequest, NextApiResponse } from "next";


async function getUsers() {
  const users = await User.findAll()
  return {users}
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>,
) {
  const {users} = await getUsers();
  res.status(200).json(users);
}
