const getGrandMastersApi = async () => {
  const response = await fetch('https://api.chess.com/pub/titled/GM');

  if (!response.ok) {
    throw new Error('Failed to fetch grand masters');
  }

  return response.json();
};

export default getGrandMastersApi;
