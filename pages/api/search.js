import { searchBlogs } from "../../lib/redis";

export default async function handler(req, res) {
  const q = req.query.q;
  const blogs = await searchBlogs(q);
  res.status(200).json({ blogs });
}
