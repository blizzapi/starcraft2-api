import { BlizzAPIOptions, RegionIdAsNumberOrString } from "blizzapi";

export type StarCraft2APIOptions = BlizzAPIOptions;

export interface League {
  seasonId: number | string;
  queueId: number | string;
  teamType: number | string;
  leagueId: number | string;
}

export interface PlayerObject {
  regionId: RegionIdAsNumberOrString;
  realmId: number | string;
  profileId: number | string;
  locale?: string;
}
