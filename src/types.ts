import {
  BlizzAPIOptions,
  RegionIdAsNumberOrString,
  Sc2RealmAsNumberOrString,
} from "blizzapi";

export type StarCraft2APIOptions = BlizzAPIOptions;

export interface League {
  seasonId: number | string;
  queueId: number | string;
  teamType: number | string;
  leagueId: number | string;
}

export interface PlayerObject {
  regionId: RegionIdAsNumberOrString;
  realmId: Sc2RealmAsNumberOrString;
  profileId: number | string;
  locale?: string;
}
