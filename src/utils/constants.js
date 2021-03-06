export const STATE_CODES = {
  TT: "India",
  AN: "Andaman and Nicobar Islands",
  AP: "Andhra Pradesh",
  AR: "Arunachal Pradesh",
  AS: "Assam",
  BR: "Bihar",
  CH: "Chandigarh",
  CT: "Chhattisgarh",
  DN: "Dadra and Nagar Haveli & Daman",
  DL: "Delhi",
  GA: "Goa",
  GJ: "Gujarat",
  HR: "Haryana",
  HP: "Himachal Pradesh",
  JK: "Jammu and Kashmir",
  JH: "Jharkhand",
  KA: "Karnataka",
  KL: "Kerala",
  LA: "Ladakh",
  LD: "Lakshadweep",
  MP: "Madhya Pradesh",
  MH: "Maharashtra",
  MN: "Manipur",
  ML: "Meghalaya",
  MZ: "Mizoram",
  NL: "Nagaland",
  OR: "Odisha",
  PY: "Puducherry",
  PB: "Punjab",
  RJ: "Rajasthan",
  SK: "Sikkim",
  TN: "Tamil Nadu",
  TG: "Telangana",
  TR: "Tripura",
  UP: "Uttar Pradesh",
  UT: "Uttarakhand",
  WB: "West Bengal",
};

export const COVID_PARAMS = [
  { code: "confirmed", name: "Confirmed" },
  { code: "recovered", name: "Recovered" },
  { code: "tested", name: "Tested" },
];

const tableFields = [
  { key: "confirmed", value: "Confirmed" },
  { key: "recovered", value: "Recovered" },
  { key: "tested", value: "Tested" },
];

export const HOME_TABLE_CL = [
  { key: "name", value: "State/UT" },
  ...tableFields,
];
export const STATE_TABLE_CL = [
  { key: "name", value: "District/City" },
  ...tableFields,
];
