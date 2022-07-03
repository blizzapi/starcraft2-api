import {
  BlizzAPIOptions,
  RegionIdAsNumberOrString,
  Sc2RealmAsNumberOrString,
} from "blizzapi";

export * from "blizzapi";

export interface StarCraft2APIOptions extends BlizzAPIOptions {
  timeoutMs?: number;
}

export enum QueueIdAsNumber {
  WoL1v1 = 1,
  WoL2v2 = 2,
  WoL3v3 = 3,
  WoL4v4 = 4,
  HotS1v1 = 101,
  HotS2v2 = 102,
  HotS3v3 = 103,
  HotS4v4 = 104,
  LotV1v1 = 201,
  LotV2v2 = 202,
  LotV3v3 = 203,
  LotV4v4 = 204,
  LotVArchon = 206,
}

export enum QueueIdAsString {
  WoL1v1 = "1",
  WoL2v2 = "2",
  WoL3v3 = "3",
  WoL4v4 = "4",
  HotS1v1 = "101",
  HotS2v2 = "102",
  HotS3v3 = "103",
  HotS4v4 = "104",
  LotV1v1 = "201",
  LotV2v2 = "202",
  LotV3v3 = "203",
  LotV4v4 = "204",
  LotVArchon = "206",
}

export type QueueId = QueueIdAsNumber | QueueIdAsString;

export enum TeamTypeAsNumber {
  Arranged = 0,
  Random = 1,
}

export enum TeamTypeAsString {
  Arranged = "0",
  Random = "1",
}

export type TeamType = TeamTypeAsNumber | TeamTypeAsString;

export enum LeagueIdAsNumber {
  Bronze = 0,
  Silver = 1,
  Gold = 2,
  Platinum = 3,
  Diamond = 4,
  Master = 5,
  Grandmaster = 6,
}

export enum LeagueIdAsString {
  Bronze = "0",
  Silver = "1",
  Gold = "2",
  Platinum = "3",
  Diamond = "4",
  Master = "5",
  Grandmaster = "6",
}

export type LeagueId = LeagueIdAsNumber | LeagueIdAsString;

export interface League {
  seasonId: number | string;
  queueId: QueueId;
  teamType: TeamType;
  leagueId: LeagueId;
}

export enum ProfileUrlLocale {
  EnUs = "en-us",
  EsMx = "es-mx",
  PtBr = "pt-br",
  DeDe = "de-de",
  EnGb = "en-gb",
  EsEs = "es-es",
  FrFr = "fr-fr",
  ItIt = "it-it",
  PlPl = "pl-pl",
  RuRu = "ru-ru",
}

export interface PlayerObject {
  regionId: RegionIdAsNumberOrString;
  realmId: Sc2RealmAsNumberOrString;
  profileId: number | string;
  locale?: string;
}
