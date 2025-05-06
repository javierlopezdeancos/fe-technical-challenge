import { type GrandmasterPlayerName } from './grandmasters';

type GetGrandMastersApiResponse = {
  players: GrandmasterPlayerName[];
}

async function getGrandMastersApi(): Promise<GetGrandMastersApiResponse> {
  const response = await fetch('https://api.chess.com/pub/titled/GM');

  if (!response.ok) {
    throw new Error('Failed to fetch grand masters');
  }

  return response.json();
};

export default getGrandMastersApi;
