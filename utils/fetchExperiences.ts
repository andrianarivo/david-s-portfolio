const fetchExperiences = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/getExperiences`);
  const { experiences } = await res.json();
  return experiences;
};

export default fetchExperiences;
