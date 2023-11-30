export const getTheData = async(lim: number) => {
  const data = await fetch(`https://fakestoreapi.com/products/?limit=${lim}`, { next: { revalidate: 1 } });
  return await data.json();
}
