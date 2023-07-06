const fetchPageInfo = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/getPageInfo`);
  const { pageInfo } = await res.json();
  return pageInfo;
};

export default fetchPageInfo;
