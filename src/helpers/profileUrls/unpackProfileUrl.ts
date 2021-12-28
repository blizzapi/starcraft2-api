import { checkIfProfileUrlLooksValid } from "./checkIfProfileUrlLooksValid";
import { profileUrlRegex } from "./profileUrlRegex";
import { PlayerObject } from "../../types";

export const unpackProfileUrl = (
  url: string,
  includeLocale?: boolean
): PlayerObject | Record<string, unknown> => {
  const urlIsValid = checkIfProfileUrlLooksValid(url);

  if (!urlIsValid) return {};

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const profileUrl = url.match(profileUrlRegex)![0];
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const profileDataArray = profileUrlRegex.exec(profileUrl)!;

  return {
    ...(includeLocale && { locale: profileDataArray[1] }),
    regionId: profileDataArray[2],
    realmId: profileDataArray[3],
    profileId: profileDataArray[4],
  };
};
