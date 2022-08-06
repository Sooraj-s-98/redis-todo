export default function BlogForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    console.log(formData);

    const res = await fetch("/api/blogs", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title" className="form-label">
        Make
      </label>
      <input name="title" type="text" className="form-control" />

      <label htmlFor="description" className="form-label">
        Description
      </label>
      <textarea name="description" type="text" className="form-control" />

      <button className="btn btn-primary" type="submit">
        Create Blog
      </button>
    </form>
  );
}
