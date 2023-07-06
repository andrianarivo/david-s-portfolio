const fetchSocials = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/getSocials`);
  const { socials } = await res.json();
  return socials;
};

export default fetchSocials;
