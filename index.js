const {
  PeopleProPlatform,
  PeopleProAccessory,
  PeopleProAllAccessory,
} = require('./src');

/* Register platform and accessories, set global variables */
module.exports = (homebridge) => {
  global.Service = homebridge.hap.Service;
  global.Characteristic = homebridge.hap.Characteristic;
  global.Formats = homebridge.hap.Formats || Characteristic.Formats;
  global.Perms = homebridge.hap.Perms || Characteristic.Perms;
  global.Units = homebridge.hap.Units || Characteristic.Units;

  Characteristic.Formats = Characteristic.Formats || Formats;
  Characteristic.Perms = Characteristic.Perms || Perms;
  Characteristic.Units = Characteristic.Units || Units;

  // eslint-disable-next-line global-require
  global.FakeGatoHistoryService = require('fakegato-history')(homebridge);

  PeopleProPlatform.setHomebridge(homebridge);

  homebridge.registerPlatform('homebridge-people-pro', 'PeoplePro', PeopleProPlatform);
  homebridge.registerAccessory('homebridge-people-pro', 'PeopleProAccessory', PeopleProAccessory);
  homebridge.registerAccessory('homebridge-people-pro', 'PeopleProAllAccessory', PeopleProAllAccessory);
};
