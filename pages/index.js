import BlogForm from "../lib/BlogForm";
import SearchForm from "../lib/SearchForm";

export default function Home(props) {
  return (
    <main>
      <h1>Create a Blog</h1>
      <BlogForm />
      <hr />
      <h1>Find a Blog</h1>
      <SearchForm />
    </main>
  );
}
