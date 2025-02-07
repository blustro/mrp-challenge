/**
 * Data Model Interfaces
 */

import { BaseUser, Address, User } from './user.interface';
import { Users } from './users.interface';

/**
 * In-Memory Store
 */

let Users: Users = {
  1: {
    id: 1,
    email: 'Diana_Oberbrunner80@yahoo.com',
    name: 'Chasity Torphy',
    dateOfBirth: '1965-11-27T18:03:03.256Z',
    phoneNumber: '1-173-967-0467 x50293',
    address: {
      street: '56599 Yost Plains',
      city: 'Lake Justen',
      state: 'Louisiana',
      zipCode: '02308',
      country: 'Jordan',
    },
  },
  2: {
    id: 2,
    email: 'Ethyl.Pagac23@gmail.com',
    name: 'Rowena Sipes',
    dateOfBirth: '2006-11-03T04:35:47.097Z',
    phoneNumber: '1-063-578-7024',
    address: {
      street: '94135 Pollich Way',
      city: 'Araburgh',
      state: 'Oklahoma',
      zipCode: '28184-2383',
      country: 'Guatemala',
    },
  },
  3: {
    id: 3,
    email: 'Lavada.Brown12@yahoo.com',
    name: 'Bradford Connelly',
    dateOfBirth: '1945-07-06T19:23:23.818Z',
    phoneNumber: '708-517-3605 x010',
    address: {
      street: '13951 Kihn Course',
      city: 'Port Sarai',
      state: 'Nevada',
      zipCode: '68307',
      country: 'French Guiana',
    },
  },
  4: {
    id: 4,
    email: 'Glennie_Kris@yahoo.com',
    name: 'Chadd Gulgowski',
    dateOfBirth: '1949-03-29T00:59:47.660Z',
    phoneNumber: '372-683-2252',
    address: {
      street: '273 Kaylah Spurs',
      city: 'Port Keegan',
      state: 'South Carolina',
      zipCode: '55079',
      country: 'Virgin Islands, U.S.',
    },
  },
  5: {
    id: 5,
    email: 'Beaulah96@gmail.com',
    name: 'Cynthia Gleichner',
    dateOfBirth: '2006-12-08T14:21:18.321Z',
    phoneNumber: '(417) 177-1170 x852',
    address: {
      street: '03923 Ari Meadows',
      city: 'New Evansmouth',
      state: 'Utah',
      zipCode: '38709-6716',
      country: 'Italy',
    },
  },
  6: {
    id: 6,
    email: 'Aglae75@hotmail.com',
    name: 'Rebeka Reichert',
    dateOfBirth: '1949-12-13T02:12:44.643Z',
    phoneNumber: '1-885-521-0437 x090',
    address: {
      street: '063 Betsy Mill',
      city: 'New Julesborough',
      state: 'California',
      zipCode: '05179-8221',
      country: 'Bangladesh',
    },
  },
  7: {
    id: 7,
    email: 'Paula.Braun@hotmail.com',
    name: 'Aliya Haag',
    dateOfBirth: '1965-02-03T22:57:42.456Z',
    phoneNumber: '909.250.2738',
    address: {
      street: '8349 Aylin Cove',
      city: 'Carmellafurt',
      state: 'Nevada',
      zipCode: '01244-5245',
      country: 'French Guiana',
    },
  },
  8: {
    id: 8,
    email: 'Aida_Gutkowski@gmail.com',
    name: 'Keith Wilkinson',
    dateOfBirth: '1981-09-11T08:50:53.287Z',
    phoneNumber: '1-588-593-7154',
    address: {
      street: '054 Jeramy Prairie',
      city: 'Fayestad',
      state: 'Alaska',
      zipCode: '54224-7423',
      country: 'Belgium',
    },
  },
  9: {
    id: 9,
    email: 'Palma_Cassin86@gmail.com',
    name: 'Sebastian Weimann',
    dateOfBirth: '1969-05-14T18:16:42.597Z',
    phoneNumber: '1-701-040-4550',
    address: {
      street: '49600 Sydnie Ways',
      city: 'Lake Dudley',
      state: 'Minnesota',
      zipCode: '90704-4359',
      country: 'Montserrat',
    },
  },
  10: {
    id: 10,
    email: 'Damaris_Schoen@yahoo.com',
    name: 'Quinten Leuschke',
    dateOfBirth: '1973-07-17T11:23:22.569Z',
    phoneNumber: '1-631-229-2274 x064',
    address: {
      street: '15666 Ezra Extensions',
      city: 'Schummfurt',
      state: 'Maryland',
      zipCode: '82406-8095',
      country: 'Hong Kong',
    },
  },
  11: {
    id: 11,
    email: 'Janet.Trantow60@hotmail.com',
    name: 'Bryon Schneider',
    dateOfBirth: '1955-07-25T17:18:54.566Z',
    phoneNumber: '496-375-6717 x034',
    address: {
      street: '58268 Josefina Burg',
      city: 'South Isac',
      state: 'Oklahoma',
      zipCode: '05098',
      country: 'Saint Martin',
    },
  },
  12: {
    id: 12,
    email: 'Brady.Hand@yahoo.com',
    name: 'Lauriane Green',
    dateOfBirth: '2012-03-21T21:19:53.699Z',
    phoneNumber: '1-629-136-4878 x92492',
    address: {
      street: '64401 Fritsch Lights',
      city: 'North Magnusside',
      state: 'New York',
      zipCode: '52033-4483',
      country: 'Timor-Leste',
    },
  },
  13: {
    id: 13,
    email: 'Taylor37@yahoo.com',
    name: 'Rosario McGlynn',
    dateOfBirth: '2001-08-06T09:46:03.509Z',
    phoneNumber: '1-289-882-6436 x1237',
    address: {
      street: '777 Zachariah Loaf',
      city: 'North Briana',
      state: 'Vermont',
      zipCode: '47294',
      country: 'New Caledonia',
    },
  },
  14: {
    id: 14,
    email: 'Mohammad_Kulas@hotmail.com',
    name: 'Hermina Lesch',
    dateOfBirth: '1905-09-11T08:14:52.998Z',
    phoneNumber: '670.332.7259 x9754',
    address: {
      street: '10060 Lyla Vista',
      city: 'Port Garry',
      state: 'Arkansas',
      zipCode: '13444',
      country: 'Pakistan',
    },
  },
  15: {
    id: 15,
    email: 'Elaina_Price@hotmail.com',
    name: 'Jackie Langworth',
    dateOfBirth: '1990-07-07T22:37:44.201Z',
    phoneNumber: '(986) 763-0642',
    address: {
      street: '750 Kulas Shoals',
      city: 'Lake Alejandrinton',
      state: 'Nebraska',
      zipCode: '90040-2807',
      country: 'Anguilla',
    },
  },
  16: {
    id: 16,
    email: 'Jeramy_Nader89@yahoo.com',
    name: 'Steve Kovacek',
    dateOfBirth: '1977-11-18T21:41:01.895Z',
    phoneNumber: '1-930-855-8593 x2900',
    address: {
      street: '853 Schultz Land',
      city: 'Lake Chasityshire',
      state: 'Kansas',
      zipCode: '99865-0268',
      country: 'Serbia',
    },
  },
  17: {
    id: 17,
    email: 'Marisol68@hotmail.com',
    name: 'Stanton Glover',
    dateOfBirth: '1912-04-10T04:12:44.630Z',
    phoneNumber: '(683) 457-0356',
    address: {
      street: '09666 Foster Spur',
      city: 'Lake Natside',
      state: 'Idaho',
      zipCode: '78399-3579',
      country: 'Luxembourg',
    },
  },
  18: {
    id: 18,
    email: 'Dahlia_Simonis@hotmail.com',
    name: 'Joanne Kshlerin',
    dateOfBirth: '2005-09-27T17:53:44.058Z',
    phoneNumber: '108.567.1081',
    address: {
      street: '92501 Cristal Manors',
      city: 'Ritchieton',
      state: 'Minnesota',
      zipCode: '07562-8213',
      country: 'Republic of Korea',
    },
  },
  19: {
    id: 19,
    email: 'Juwan.Collins20@yahoo.com',
    name: 'Juston McLaughlin',
    dateOfBirth: '1967-04-15T19:05:45.323Z',
    phoneNumber: '(291) 041-8093',
    address: {
      street: '6241 Kovacek Village',
      city: 'East Ludwig',
      state: 'South Carolina',
      zipCode: '29726',
      country: 'Falkland Islands (Malvinas)',
    },
  },
  20: {
    id: 20,
    email: 'Neva43@yahoo.com',
    name: 'Alexander Mayert',
    dateOfBirth: '1977-01-09T14:31:05.641Z',
    phoneNumber: '1-801-902-2711',
    address: {
      street: '57625 Hannah Islands',
      city: 'South Caitlyn',
      state: 'Tennessee',
      zipCode: '78502-3178',
      country: 'Republic of Korea',
    },
  },
  21: {
    id: 21,
    email: 'Kennith.Bashirian11@yahoo.com',
    name: 'Augusta Dietrich',
    dateOfBirth: '1946-05-10T01:00:35.198Z',
    phoneNumber: '624.102.9466 x500',
    address: {
      street: '2373 Clyde Park',
      city: 'North Carliton',
      state: 'California',
      zipCode: '93729',
      country: 'Mongolia',
    },
  },
  22: {
    id: 22,
    email: 'Tracy_Kshlerin@hotmail.com',
    name: 'Deven Greenholt',
    dateOfBirth: '1969-03-02T18:39:17.280Z',
    phoneNumber: '1-790-278-2882',
    address: {
      street: '641 Amanda Plains',
      city: 'West Anitashire',
      state: 'Michigan',
      zipCode: '85556',
      country: 'Antigua and Barbuda',
    },
  },
  23: {
    id: 23,
    email: 'Kobe14@gmail.com',
    name: 'Narciso Cole',
    dateOfBirth: '2008-09-13T15:59:14.445Z',
    phoneNumber: '1-442-516-8940 x8626',
    address: {
      street: '81013 Strosin Parks',
      city: 'Donnellview',
      state: 'Alaska',
      zipCode: '22569-3094',
      country: 'Trinidad and Tobago',
    },
  },
  24: {
    id: 24,
    email: 'Devon_Leffler@hotmail.com',
    name: 'Florine Wyman',
    dateOfBirth: '1914-05-17T08:35:38.288Z',
    phoneNumber: '1-752-643-9006 x43227',
    address: {
      street: '0855 Josianne Lakes',
      city: 'Croninhaven',
      state: 'Indiana',
      zipCode: '04839',
      country: 'Mayotte',
    },
  },
  25: {
    id: 25,
    email: 'Kay.Anderson71@yahoo.com',
    name: 'Gail Nienow',
    dateOfBirth: '2016-07-13T00:49:25.924Z',
    phoneNumber: '530.163.6023 x19117',
    address: {
      street: '6053 Angela Shore',
      city: 'Zemlakshire',
      state: 'Oregon',
      zipCode: '34781',
      country: 'Costa Rica',
    },
  },
  26: {
    id: 26,
    email: 'Judah_Olson86@hotmail.com',
    name: 'Russ Hauck',
    dateOfBirth: '1900-02-15T04:06:48.005Z',
    phoneNumber: '465-919-2904',
    address: {
      street: '2230 Ryan Mill',
      city: 'Port Donavon',
      state: 'Washington',
      zipCode: '15407-8335',
      country: 'Wallis and Futuna',
    },
  },
  27: {
    id: 27,
    email: 'Judson_Schumm@gmail.com',
    name: 'Imogene Emard',
    dateOfBirth: '1952-12-15T10:49:53.801Z',
    phoneNumber: '646.567.5283',
    address: {
      street: '49828 Emanuel Fall',
      city: 'Jimmyland',
      state: 'Arizona',
      zipCode: '33544',
      country: 'Hungary',
    },
  },
  28: {
    id: 28,
    email: 'Kennith_Hane@gmail.com',
    name: 'Nolan Champlin',
    dateOfBirth: '1947-07-31T18:35:42.791Z',
    phoneNumber: '1-756-884-2481 x981',
    address: {
      street: '884 Gottlieb Common',
      city: 'Howardland',
      state: 'Washington',
      zipCode: '77740',
      country: 'Central African Republic',
    },
  },
  29: {
    id: 29,
    email: 'Imogene.Olson@hotmail.com',
    name: 'Norbert Veum',
    dateOfBirth: '1959-04-18T12:50:40.902Z',
    phoneNumber: '1-317-928-2290 x02537',
    address: {
      street: '92321 Martin Junctions',
      city: 'Port Timmy',
      state: 'Tennessee',
      zipCode: '03810',
      country: 'Senegal',
    },
  },
  30: {
    id: 30,
    email: 'Sonia_Bashirian@yahoo.com',
    name: 'Candido Schmeler',
    dateOfBirth: '2013-02-12T08:44:54.088Z',
    phoneNumber: '(927) 200-5475 x3073',
    address: {
      street: '1398 Maggio Lakes',
      city: 'East Seanport',
      state: 'South Carolina',
      zipCode: '77801',
      country: 'Bangladesh',
    },
  },
  31: {
    id: 31,
    email: 'Bettye_Mraz@yahoo.com',
    name: 'Brionna Deckow',
    dateOfBirth: '1980-11-23T17:39:15.167Z',
    phoneNumber: '226.634.0049 x040',
    address: {
      street: '212 Dennis Junction',
      city: 'Riceview',
      state: 'Illinois',
      zipCode: '93474-8308',
      country: 'Zimbabwe',
    },
  },
  32: {
    id: 32,
    email: 'Arnoldo.Wisozk17@gmail.com',
    name: 'Sigmund Koch',
    dateOfBirth: '1959-10-30T22:32:00.687Z',
    phoneNumber: '(743) 524-5165',
    address: {
      street: '33629 Sanford Drive',
      city: 'North Craigview',
      state: 'Arkansas',
      zipCode: '35569-1403',
      country: 'Burkina Faso',
    },
  },
  33: {
    id: 33,
    email: 'Lorenzo_Pouros42@hotmail.com',
    name: 'Kamron Altenwerth',
    dateOfBirth: '2008-10-20T06:42:02.474Z',
    phoneNumber: '944-081-5292',
    address: {
      street: '24007 Sigmund Park',
      city: 'Port Erwin',
      state: 'Mississippi',
      zipCode: '09378-5616',
      country: 'Pakistan',
    },
  },
  34: {
    id: 34,
    email: 'Hershel23@hotmail.com',
    name: 'Ramiro Effertz',
    dateOfBirth: '1950-03-05T05:19:17.638Z',
    phoneNumber: '699.382.3897 x9069',
    address: {
      street: '464 Demond Springs',
      city: 'South Bernadinemouth',
      state: 'Vermont',
      zipCode: '64607',
      country: 'Cuba',
    },
  },
  35: {
    id: 35,
    email: 'Jeanette.Wintheiser2@gmail.com',
    name: 'Joany Howe',
    dateOfBirth: '2009-04-18T21:56:31.899Z',
    phoneNumber: '740.776.7877 x717',
    address: {
      street: '136 Keeley Crescent',
      city: 'South Albertha',
      state: 'Tennessee',
      zipCode: '29819',
      country: "Lao People's Democratic Republic",
    },
  },
  36: {
    id: 36,
    email: 'Eladio.Emmerich@gmail.com',
    name: 'Chyna Kuhlman',
    dateOfBirth: '1917-11-27T23:18:20.682Z',
    phoneNumber: '762-755-2638 x056',
    address: {
      street: '38346 Jaylen Falls',
      city: 'Port Thelma',
      state: 'Kentucky',
      zipCode: '96896',
      country: 'Russian Federation',
    },
  },
  37: {
    id: 37,
    email: 'Ethan.Bahringer@gmail.com',
    name: 'Tyrese Rippin',
    dateOfBirth: '2002-01-03T12:54:26.008Z',
    phoneNumber: '(946) 002-0136 x036',
    address: {
      street: '315 Beatty Islands',
      city: 'Adelaton',
      state: 'Oregon',
      zipCode: '68075',
      country: 'Hungary',
    },
  },
  38: {
    id: 38,
    email: 'Enola.Shanahan98@yahoo.com',
    name: 'Brandyn Kirlin',
    dateOfBirth: '1936-05-29T18:42:46.059Z',
    phoneNumber: '137.862.6746 x37068',
    address: {
      street: '94726 Wyman Locks',
      city: 'West Eduardoland',
      state: 'Alaska',
      zipCode: '12704-6169',
      country: 'Cuba',
    },
  },
  39: {
    id: 39,
    email: 'Rocky.Eichmann@hotmail.com',
    name: 'Rex Abshire',
    dateOfBirth: '2016-09-09T04:00:02.774Z',
    phoneNumber: '(161) 789-1438 x6678',
    address: {
      street: '45567 Gutmann Street',
      city: 'Wintheiserland',
      state: 'Georgia',
      zipCode: '32791',
      country: 'Faroe Islands',
    },
  },
  40: {
    id: 40,
    email: 'Mireya.Dibbert82@hotmail.com',
    name: 'Melvin Mante',
    dateOfBirth: '1928-03-31T17:34:56.352Z',
    phoneNumber: '(439) 018-3062 x69777',
    address: {
      street: '9010 Suzanne Gateway',
      city: 'Mantemouth',
      state: 'Montana',
      zipCode: '65722',
      country: 'Latvia',
    },
  },
  41: {
    id: 41,
    email: 'Laverna_Will@hotmail.com',
    name: 'Lela Gusikowski',
    dateOfBirth: '1930-06-02T23:28:24.704Z',
    phoneNumber: '632-626-0881',
    address: {
      street: '0339 Cruickshank Wells',
      city: 'North Brandyn',
      state: 'Wyoming',
      zipCode: '76385',
      country: 'Bahrain',
    },
  },
  42: {
    id: 42,
    email: 'Keara28@yahoo.com',
    name: 'Jedediah Price',
    dateOfBirth: '2006-11-17T13:45:56.430Z',
    phoneNumber: '1-896-345-2812',
    address: {
      street: '484 Paxton Ports',
      city: 'Zemlakmouth',
      state: 'Arkansas',
      zipCode: '09068-6932',
      country: 'Central African Republic',
    },
  },
  43: {
    id: 43,
    email: 'Delaney62@hotmail.com',
    name: 'May Skiles',
    dateOfBirth: '1924-10-09T01:56:12.624Z',
    phoneNumber: '542.814.3120 x29876',
    address: {
      street: '4868 Beaulah River',
      city: 'Lake Tomasa',
      state: 'Maine',
      zipCode: '89778',
      country: 'Isle of Man',
    },
  },
  44: {
    id: 44,
    email: 'Claudia92@gmail.com',
    name: 'Annabell Morar',
    dateOfBirth: '1972-12-15T16:37:28.432Z',
    phoneNumber: '711.590.0552',
    address: {
      street: '85929 Anissa Underpass',
      city: 'East Mozell',
      state: 'Missouri',
      zipCode: '14577-3723',
      country: 'Eritrea',
    },
  },
  45: {
    id: 45,
    email: 'Earline.Bauch77@hotmail.com',
    name: 'Giovanny Emard',
    dateOfBirth: '1933-08-14T15:11:47.018Z',
    phoneNumber: '(207) 690-3498',
    address: {
      street: '481 Flatley Dam',
      city: 'Haagport',
      state: 'Minnesota',
      zipCode: '18792',
      country: 'Norway',
    },
  },
  46: {
    id: 46,
    email: 'Caesar_Torp18@hotmail.com',
    name: 'Pearl Heller',
    dateOfBirth: '2013-12-10T03:55:33.240Z',
    phoneNumber: '(636) 932-8783',
    address: {
      street: '0206 Aniyah Key',
      city: 'Hauckfurt',
      state: 'Georgia',
      zipCode: '41588-2269',
      country: 'Hungary',
    },
  },
  47: {
    id: 47,
    email: 'Tabitha_Paucek@hotmail.com',
    name: 'Rhett Raynor',
    dateOfBirth: '1926-06-26T03:07:28.172Z',
    phoneNumber: '(746) 626-0143 x1556',
    address: {
      street: '79656 Tavares Meadows',
      city: 'New Dantehaven',
      state: 'Delaware',
      zipCode: '48159-7102',
      country: 'Bolivia',
    },
  },
  48: {
    id: 48,
    email: 'Camilla.Harris91@hotmail.com',
    name: 'Elyse Beahan',
    dateOfBirth: '2015-12-30T12:50:32.649Z',
    phoneNumber: '155.165.2183 x6530',
    address: {
      street: '635 Pouros Passage',
      city: 'Lake Maymieville',
      state: 'Washington',
      zipCode: '57160',
      country: 'Solomon Islands',
    },
  },
  49: {
    id: 49,
    email: 'Karen.Willms@hotmail.com',
    name: 'Kayleigh Leannon',
    dateOfBirth: '1944-03-03T01:41:37.253Z',
    phoneNumber: '701.364.1534 x4365',
    address: {
      street: '8594 Maddison Knolls',
      city: 'Kozeychester',
      state: 'Louisiana',
      zipCode: '95832',
      country: 'Virgin Islands, British',
    },
  },
  50: {
    id: 50,
    email: 'Una_Leuschke61@hotmail.com',
    name: 'Daniella Stehr',
    dateOfBirth: '1940-07-18T07:35:27.141Z',
    phoneNumber: '896-283-9973 x0083',
    address: {
      street: '376 Boyer Loaf',
      city: 'Schowalterville',
      state: 'Connecticut',
      zipCode: '22933-3258',
      country: 'Botswana',
    },
  },
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<User[]> => Object.values(Users);

export const find = async (id: number): Promise<User> => Users[id];

export const create = async (newUser: BaseUser): Promise<User> => {
  const id = new Date().valueOf();

  Users[id] = {
    id,
    ...newUser,
  };

  return Users[id];
};

export const update = async (id: number, userUpdate: BaseUser): Promise<User | null> => {
  const user = await find(id);

  if (!user) {
    return null;
  }

  Users[id] = { id, ...userUpdate };

  return Users[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const user = await find(id);

  if (!id) {
    return null;
  }

  delete Users[id];
};
