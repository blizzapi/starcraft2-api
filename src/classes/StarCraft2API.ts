import {
  BlizzAPI,
  RegionIdAsNumberOrString,
  Locale,
  QueryOptions,
} from "blizzapi";
import * as helpers from "../helpers";
import { PlayerObject, League, StarCraft2APIOptions } from "../types";

export class StarCraft2API extends BlizzAPI {
  private timeoutMs: number;

  constructor(options: StarCraft2APIOptions) {
    super(options);
    this.timeoutMs = options.timeoutMs || 10000;
  }

  queryStaticProfileData(
    regionId: RegionIdAsNumberOrString,
    locale?: Locale,
    options?: QueryOptions
  ): Promise<object> {
    const queryLocale =
      locale || BlizzAPI.getDefaultLocaleNameForRegionId(regionId);
    return this.query(`/sc2/static/profile/${regionId}?locale=${queryLocale}`, {
      timeout: this.timeoutMs,
      ...options,
    });
  }

  queryProfileMetadata(
    playerObject: PlayerObject,
    locale?: Locale,
    options?: QueryOptions
  ): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    const queryLocale =
      locale || BlizzAPI.getDefaultLocaleNameForRegionId(regionId);
    return this.query(
      `/sc2/metadata/profile/${regionId}/${realmId}/${profileId}?locale=${queryLocale}`,
      {
        timeout: this.timeoutMs,
        ...options,
      }
    );
  }

  queryProfile(
    playerObject: PlayerObject,
    locale?: Locale,
    options?: QueryOptions
  ): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    const queryLocale =
      locale || BlizzAPI.getDefaultLocaleNameForRegionId(regionId);
    return this.query(
      `/sc2/profile/${regionId}/${realmId}/${profileId}?locale=${queryLocale}`,
      {
        timeout: this.timeoutMs,
        ...options,
      }
    );
  }

  queryLadderSummary(
    playerObject: PlayerObject,
    locale?: Locale,
    options?: QueryOptions
  ): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    const queryLocale =
      locale || BlizzAPI.getDefaultLocaleNameForRegionId(regionId);
    return this.query(
      `/sc2/profile/${regionId}/${realmId}/${profileId}/ladder/summary?locale=${queryLocale}`,
      {
        timeout: this.timeoutMs,
        ...options,
      }
    );
  }

  queryPlayerLadder(
    playerObject: PlayerObject,
    ladderId: number | string,
    locale?: Locale,
    options?: QueryOptions
  ): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    const queryLocale =
      locale || BlizzAPI.getDefaultLocaleNameForRegionId(regionId);
    return this.query(
      `/sc2/profile/${regionId}/${realmId}/${profileId}/ladder/${ladderId}?locale=${queryLocale}`,
      {
        timeout: this.timeoutMs,
        ...options,
      }
    );
  }

  queryGrandmasterLeaderboard(
    regionId: RegionIdAsNumberOrString,
    options?: QueryOptions
  ): Promise<object> {
    return this.query(`/sc2/ladder/grandmaster/${regionId}`, {
      timeout: this.timeoutMs,
      ...options,
    });
  }

  queryLeagueData(league: League, options?: QueryOptions): Promise<object> {
    const { seasonId, queueId, teamType, leagueId } = league;
    return this.query(
      `/data/sc2/league/${seasonId}/${queueId}/${teamType}/${leagueId}`,
      {
        timeout: this.timeoutMs,
        ...options,
      }
    );
  }

  querySeason(
    regionId: RegionIdAsNumberOrString,
    options?: QueryOptions
  ): Promise<object> {
    return this.query(`/sc2/ladder/season/${regionId}`, {
      timeout: this.timeoutMs,
      ...options,
    });
  }

  queryPlayerAccount(
    accountId: number | string,
    options?: QueryOptions
  ): Promise<object> {
    return this.query(`/sc2/player/${accountId}`, {
      timeout: this.timeoutMs,
      ...options,
    });
  }

  queryLegacyProfile(
    playerObject: PlayerObject,
    options?: QueryOptions
  ): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    return this.query(
      `/sc2/legacy/profile/${regionId}/${realmId}/${profileId}`,
      {
        timeout: this.timeoutMs,
        ...options,
      }
    );
  }

  queryLegacyLadders(
    playerObject: PlayerObject,
    options?: QueryOptions
  ): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    return this.query(
      `/sc2/legacy/profile/${regionId}/${realmId}/${profileId}/ladders`,
      {
        timeout: this.timeoutMs,
        ...options,
      }
    );
  }

  queryLegacyMatchHistory(
    playerObject: PlayerObject,
    options?: QueryOptions
  ): Promise<object> {
    const { regionId, realmId, profileId } = playerObject;
    return this.query(
      `/sc2/legacy/profile/${regionId}/${realmId}/${profileId}/matches`,
      {
        timeout: this.timeoutMs,
        ...options,
      }
    );
  }

  queryLegacyLadder(
    regionId: RegionIdAsNumberOrString,
    ladderId: number | string,
    options?: QueryOptions
  ): Promise<object> {
    return this.query(`/sc2/legacy/ladder/${regionId}/${ladderId}`, {
      timeout: this.timeoutMs,
      ...options,
    });
  }

  queryLegacyAchievements(
    regionId: RegionIdAsNumberOrString,
    options?: QueryOptions
  ): Promise<object> {
    return this.query(`/sc2/legacy/data/achievements/${regionId}`, {
      timeout: this.timeoutMs,
      ...options,
    });
  }

  queryLegacyRewards(
    regionId: RegionIdAsNumberOrString,
    options?: QueryOptions
  ): Promise<object> {
    return this.query(`/sc2/legacy/data/rewards/${regionId}`, {
      timeout: this.timeoutMs,
      ...options,
    });
  }

  static getAllProfileUrlLocales = helpers.getAllProfileUrlLocales;

  static checkIfProfileUrlLocaleLooksValid =
    helpers.checkIfProfileUrlLocaleLooksValid;

  static validateProfileUrlLocale = helpers.validateProfileUrlLocale;

  static checkIfProfileUrlLooksValid = helpers.checkIfProfileUrlLooksValid;

  static validateProfileUrl = helpers.validateProfileUrl;

  static checkIfProfileIdLooksValid = helpers.checkIfProfileIdLooksValid;

  static unpackProfileUrl = helpers.unpackProfileUrl;

  static constructProfileUrl = helpers.constructProfileUrl;

  static profileUrlRegex = () => helpers.profileUrlRegex;

  static profileUrlLocaleRegex = () => helpers.profileUrlLocaleRegex;
}
