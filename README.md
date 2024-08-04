# StarCraft2-API

> **This project is no longer maintained or updated. While Battle.net API has been reasonably stable within last few years and that means the library should theoretically continue working for a while, I am no longer able to provide any support or maintenance. In case of bugs or breaking changes, feel free to fork the repo and publish your own updated version.**

Flexible and feature-rich JavaScript / TypeScript library for easy access to StarCraft II Community APIs.

## Install

```bash
npm install starcraft2-api
```

## Quick start

```javascript
const { StarCraft2API } = require("starcraft2-api");

/**
 * Or using TypeScript:
 * import { StarCraft2API } from 'StarCraft2API';
 */

const sc2api = new StarCraft2API({
  region: "us",
  clientId: "client id",
  clientSecret: "client secret",
});

const data = await sc2api.queryProfile({
  regionId: 1,
  realmId: 1,
  profileId: 1084304,
});

console.log(data);
```

## Manual build

```bash
git clone https://github.com/lwojcik/starcraft2-api.git
cd starcraft2-api
npm install
npm run build
```

## Documentation

See [starcraft2-api-docs](https://github.com/lwojcik/starcraft2-api-docs) repo.

## Legal

This project is not authored, affiliated or endorsed in any way by Blizzard Entertainment.

Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

© 2010 Blizzard Entertainment, Inc. All rights reserved. Wings of Liberty is a trademark, and StarCraft and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

© 2013 Blizzard Entertainment, Inc. All rights reserved. Heart of the Swarm and StarCraft are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.
