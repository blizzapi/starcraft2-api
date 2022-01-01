import { constructProfileUrl } from "../../../src/helpers/profileUrls/constructProfileUrl";
import playerObjects from "../../__testData__/playerObjects.json";
import invalidPlayerObjects from "../../__testData__/invalidPlayerObjects.json";
import { PlayerObject, ProfileUrlLocale } from "../../../src/types";

describe("constructProfileUrl", () => {
  (playerObjects as PlayerObject[]).forEach((playerObject) => {
    it("should match snapshot for valid player object", () => {
      expect(constructProfileUrl(playerObject)).toMatchSnapshot();
    });
  });

  invalidPlayerObjects.forEach((invalidPlayerObject) => {
    it("should match snapshot for invalid player object", () => {
      expect(
        constructProfileUrl(invalidPlayerObject as PlayerObject)
      ).toMatchSnapshot();
    });
  });

  (playerObjects as PlayerObject[]).forEach((playerObject) => {
    it("should match snapshot for valid player object and valid locale", () => {
      expect(
        constructProfileUrl(playerObject, "en-us" as ProfileUrlLocale)
      ).toMatchSnapshot();
    });
  });

  (playerObjects as PlayerObject[]).forEach((playerObject) => {
    it("should match snapshot for valid player object and invalid locale", () => {
      expect(
        constructProfileUrl(playerObject, "invalidLocale" as ProfileUrlLocale)
      ).toMatchSnapshot();
    });
  });
});
