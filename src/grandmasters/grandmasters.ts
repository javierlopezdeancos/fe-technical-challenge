export type GrandmasterUsername = string

export type Granmaster = {
  player_id: number,
  avatar: string,
  "@id": string,
  url: string,
  username: GrandmasterUsername,
  title: string,
  followers: number,
  country: string,
  last_online: number,
  joined: number,
  status: string,
  is_streamer: boolean,
  verified: boolean,
  league: string,
  streaming_platforms: string[]
}
