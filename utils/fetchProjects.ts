const fetchProjects = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/getProjects`);
  const { projects } = await res.json();
  return projects;
};

export default fetchProjects;
