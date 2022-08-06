import { Client, Entity, Schema, Repository } from "redis-om";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class Blog extends Entity {}
let schema = new Schema(
  Blog,
  {
    title: { type: "string" },
    description: { type: "string", textSearch: true },
  },
  {
    dataStructure: "JSON",
  }
);

export async function createBlog(data) {
  await connect();

  const repository = new Repository(schema, client);

  const blog = repository.createEntity(data);

  const id = await repository.save(blog);
  return id;
}

export async function getBlog(id) {
  await connect();

  const repository = new Repository(schema, client);
  return repository.fetch(id);
}

export async function createIndex() {
  await connect();

  const repository = new Repository(schema, client);
  await repository.createIndex();
}

export async function searchBlogs(q) {
  await connect();

  const repository = new Repository(schema, client);

  const blogs = await repository
    .search()
    .where("title")
    .equals(q)
    .or("description")
    .matches(q)
    .return.all();

  return blogs;
}
