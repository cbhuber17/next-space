import host from "./api_route";

export async function loadPosts() {
  const res = await fetch(`${host}/api/content`);
  const data = await res.json();

  return data;
}
