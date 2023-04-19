export const checkIfProfileIdLooksValid = (profileId: number | string) =>
  Number(profileId) > 0 &&
  profileId.toString() === parseInt(profileId as string, 10).toString();
