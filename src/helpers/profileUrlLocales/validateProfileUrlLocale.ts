import { ProfileUrlLocale } from "../../types";
import { checkIfProfileUrlLocaleLooksValid } from "./checkIfProfileUrlLocaleLooksValid";
import { getAllProfileUrlLocales } from "./getAllProfileUrlLocales";

/**
 * Validates locale profile URL locale against profile URL locale list
 * (whether it exists in the constants object)
 *
 * @param profileUrlLocale Locale name (e.g. 'en-us')
 * @return true if profile URL locale exists, false if not.
 * Throws RangeError if profile URL locale doesn't match regex pattern
 */
export const validateProfileUrlLocale = (profileUrlLocale: string) => {
  const isProfileUrlLocaleValid =
    checkIfProfileUrlLocaleLooksValid(profileUrlLocale);
  const availableProfileUrlLocales = getAllProfileUrlLocales();
  const lowerCaseLocale = profileUrlLocale.toLowerCase() as ProfileUrlLocale;

  if (!isProfileUrlLocaleValid) {
    throw new RangeError(
      `${profileUrlLocale} is not a valid parameter for validateProfileUrlLocale()`
    );
  }

  return availableProfileUrlLocales.includes(lowerCaseLocale);
};
