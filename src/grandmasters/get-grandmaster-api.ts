import { type Granmaster, type GrandmasterUsername } from './grandmasters';

async function getGrandMasterApi(userName?: GrandmasterUsername): Promise<Granmaster> {
  if (!userName) {
    throw new Error(`no found username, failed to fetch grandmaster details`);
  }

  const response = await fetch(`https://api.chess.com/pub/player/${userName}`);

  if (!response.ok) {
    throw new Error('Failed to fetch grandmaster details');
  }

  return response.json();
};

export default getGrandMasterApi;
