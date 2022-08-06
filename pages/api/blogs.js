import { createBlog } from "../../lib/redis";

export default async function handler(req, res) {
  const id = await createBlog(req.body);
  console.log(id);
  res.status(200).json({ id });
}
