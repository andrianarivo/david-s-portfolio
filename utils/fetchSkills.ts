const fetchSkills = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/getSkills`);
  const { skills } = await res.json();
  return skills;
};

export default fetchSkills;
