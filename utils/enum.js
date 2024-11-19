export const THEME_TYPE = {
  theme1: '30ku4radr2z81nzkktzn',
  theme2: '6rhjgsgbp7yeqhq80p6q',
  theme3: 'guvp397l8etj1qyr0is4',
  theme4: 'snb4vfytglrqkc89crlq',
  theme5: 'skafav6qk31v4igcwpgp',
  theme6: 'l8etjdr2z8p7yeqv6qk',
  theme7: 'BI55jo0sGeC3mtp7V1kO',
  theme8: 'rOVE8B1C0HhjZe9yndvh',
  theme9: 'cf8g3c2j8m0e6l5riyax',
  theme10: 'iamzvejapwxcmerislj0',
  theme11: '8sa44zdutvf9drnqgzxk',
  theme12: '40ku5rbes3y92mylluym',
  theme13: '51lv6dcft2z83ozmmxzn',
};

export const PAYMENTSTATUS = {
  canceled: 'CANCELED',
  processing: 'PROCESSING',
  requires_action: 'REQUIRES ACTION',
  requires_capture: 'REQUIRES CAPTURE',
  requires_confirmation: 'REQUIRES CONFIRMATION',
  requires_payment_method: 'REQUIRES PAYMENT METHOD',
  succeeded: 'SUCCEEDED',
};

export const DefaultOptionValueByCountry = {
  UnitedStates: 'Select State',
  Canada: 'Select Province',
  UnitedKingdom: 'Select Region',
};

export const SubscriptionType = {
  PREMIUM: 'premium',
};

export const LOCATIONOPTIONS = [
  { name: 'Funeral Home', value: 'funeral_home', searchByAddressEnabled: true },
  { name: 'Church', value: 'church', searchByAddressEnabled: false },
  {
    name: 'Reception Hall',
    value: 'reception_hall',
    searchByAddressEnabled: false,
  },
  { name: 'Hospital', value: 'hospital', searchByAddressEnabled: true },
  {
    name: 'Business',
    value: 'businessName',
    searchByAddressEnabled: false,
  },
  { name: 'Home', value: 'home', searchByAddressEnabled: false },
  { name: 'Apartment', value: 'apartment', searchByAddressEnabled: false },
  { name: 'Hotel', value: 'hotel', searchByAddressEnabled: false },
  { name: 'School', value: 'school', searchByAddressEnabled: false },
  { name: 'Other', value: 'other', searchByAddressEnabled: false },
];

export const OCCASSIONOPTIONS = [
  {
    name: 'Anniversary',
    value: 'restaurant',
    message: "Happy Anniversary! Here's to another year of love and happiness.",
  },
  {
    name: 'Birthday',
    value: 'restaurant',
    message: 'Wishing you a very special birthday!',
  },
  {
    name: 'Congratulations',
    value: 'congratulations',
    message: 'Congratulations! I am so proud of you!',
  },
  {
    name: 'Get Well',
    value: 'getwell',
    message: 'Our thoughts are with you. Recover quickly!',
  },
  {
    name: 'Good Luck',
    value: 'goodluck',
    message: 'Best of luck.',
  },
  {
    name: 'Housewarming',
    value: 'housewarming',
    message: 'Congratulations on your new home.',
  },
  {
    name: "I'm Sorry",
    value: 'sorry',
    message: 'I am truly sorry. Please accept my apologies.',
  },
  {
    name: 'Just Because',
    value: 'justbecause',
    message: "You are in my thoughts, and I thought I'd let you know.",
  },
  {
    name: 'Love and Romance',
    value: 'loveandromance',
    message:
      'Next to you is exactly where I want to be, every single day. Love you!',
  },
  {
    name: 'New Baby',
    value: 'baby',
    message: 'Congratulations on your new bundle of joy! So happy for you.',
  },
  {
    name: 'New Job',
    value: 'newjob',
    message: 'Congratulations on your new job.',
  },
  {
    name: 'Retirement',
    value: 'retirement',
    message: 'May your retirement be as rewarding as your years of hard work.',
  },
  {
    name: 'Sympathy',
    value: 'sympathy',
    message: 'My thoughts are with you and your family.',
  },
  {
    name: 'Thank You',
    value: 'thankyou',
    message: "It's the perfect time to say thank you for everything!",
  },
  {
    name: 'Thinking of You',
    value: 'thinkingofyou',
    message: 'Just a friendly little hello from me to you.',
  },
  {
    name: 'Other',
    value: 'other',
    message: 'Thinking of you!',
  },
];

export const NumberFormatePreviewOptions = {
  'English - Canada': 'en-CA',
  'English - Australia': 'en-AU',
  'English - United Kingdom': 'en-GB',
  'English - United States': 'en-US',
  'Italian (Italiano) - Italy': 'it-IT',
};

export const repeatOptions = [
  {
    name: 'Yearly',
  },
  {
    name: 'Monthly',
  },
  {
    name: 'Once',
  },
];

export const ReminderDaysBeforeOptions = [
  {
    name: 'Same day',
    value: 0,
  },
  {
    name: '1',
    value: 1,
  },
  {
    name: '2',
    value: 2,
  },
  {
    name: '3',
    value: 3,
  },
  {
    name: '4',
    value: 4,
  },
  {
    name: '5',
    value: 5,
  },
  {
    name: '6',
    value: 6,
  },
  {
    name: '7',
    value: 7,
  },
  {
    name: '8',
    value: 8,
  },
  {
    name: '9',
    value: 9,
  },
  {
    name: '10',
    value: 10,
  },
];

export const OrderServiceFeeFixedAmount = 5.99;
export const OrderServiceFeeFixedPercentage = 4;

export const themeGroups = {
  group1: [THEME_TYPE.theme2, THEME_TYPE.theme4],
  group2: [
    THEME_TYPE.theme1,
    THEME_TYPE.theme6,
    THEME_TYPE.theme10,
    THEME_TYPE.theme11,
    THEME_TYPE.theme12,
    THEME_TYPE.theme13,
  ],
  group3: [
    THEME_TYPE.theme3,
    THEME_TYPE.theme5,
    THEME_TYPE.theme7,
    THEME_TYPE.theme8,
    THEME_TYPE.theme9,
  ],
};