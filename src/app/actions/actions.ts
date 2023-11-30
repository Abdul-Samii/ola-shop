export const getTheData = async(limit: number) => {
  const data = await fetch(`https://fakestoreapi.com/products/?limit=${limit}`, { next: { revalidate: 1 } });
  return await data.json();
}
