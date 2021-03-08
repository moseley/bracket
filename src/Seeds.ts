export interface TeamParams {
  id: string
  seed: 1 | 2 | 3 | 4 | 5 | 6 | 7
  conference: string
  city: string
  name: string
  logo: string
}

export const teams: TeamParams[] = [
  {
    id: 'BAL',
    seed: 5,
    conference: 'afc',
    city: 'Baltimore',
    name: 'Ravens',
    logo: 'bal.svg'
  },
  {
    id: 'BUF',
    seed: 2,
    conference: 'afc',
    city: 'Buffalo',
    name: 'Bills',
    logo: 'buf.svg'
  },
  {
    id: 'CHI',
    seed: 7,
    conference: 'nfc',
    city: 'Chicago',
    name: 'Bears',
    logo: 'chi.svg'
  },
  {
    id: 'CLE',
    seed: 6,
    conference: 'afc',
    city: 'Cleveland',
    name: 'Browns',
    logo: 'cle.svg'
  },
  {
    id: 'GB',
    seed: 1,
    conference: 'nfc',
    city: 'Green Bay',
    name: 'Packers',
    logo: 'gb.svg'
  },
  {
    id: 'IND',
    seed: 7,
    conference: 'afc',
    city: 'Indianapolis',
    name: 'Colts',
    logo: 'ind.svg'
  },
  {
    id: 'KC',
    seed: 1,
    conference: 'afc',
    city: 'Kansas City',
    name: 'Chiefs',
    logo: 'kc.svg'
  },
  {
    id: 'LAR',
    seed: 6,
    conference: 'nfc',
    city: 'Los Angeles',
    name: 'Rams',
    logo: 'lar.svg'
  },
  {
    id: 'NO',
    seed: 2,
    conference: 'nfc',
    city: 'New Orleans',
    name: 'Saints',
    logo: 'no.svg'
  },
  {
    id: 'PIT',
    seed: 3,
    conference: 'afc',
    city: 'Pittsburgh',
    name: 'Steelers',
    logo: 'pit.svg'
  },
  {
    id: 'SEA',
    seed: 3,
    conference: 'nfc',
    city: 'Seattle',
    name: 'Seahawks',
    logo: 'sea.svg'
  },
  {
    id: 'TB',
    seed: 5,
    conference: 'nfc',
    city: 'Tampa Bay',
    name: 'Buccaneers',
    logo: 'tb.svg'
  },
  {
    id: 'TEN',
    seed: 4,
    conference: 'afc',
    city: 'Tennessee',
    name: 'Titans',
    logo: 'ten.svg'
  },
  {
    id: 'WAS',
    seed: 4,
    conference: 'nfc',
    city: 'Washington',
    name: 'Football Team',
    logo: 'was.svg'
  }
]

export const teamByConferenceSeed = (
  conference: 'afc' | 'nfc',
  seed: 1 | 2 | 3 | 4 | 5 | 6 | 7
): TeamParams => {
  return teams.find(
    (team) => team.conference === conference && team.seed === seed
  ) as TeamParams
}

export const teamById = (id: string) => teams.find((team) => team.id === id)

export interface SeedParams {
  afc1: string
  afc2: string
  afc3: string
  afc4: string
  afc5: string
  afc6: string
  afc7: string
  nfc1: string
  nfc2: string
  nfc3: string
  nfc4: string
  nfc5: string
  nfc6: string
  nfc7: string
}

export const seeds: SeedParams = {
  afc1: 'KC',
  afc2: 'BUF',
  afc3: 'PIT',
  afc4: 'TEN',
  afc5: 'BAL',
  afc6: 'CLE',
  afc7: 'IND',
  nfc1: 'GB',
  nfc2: 'NO',
  nfc3: 'SEA',
  nfc4: 'WAS',
  nfc5: 'TB',
  nfc6: 'LAR',
  nfc7: 'CHI'
}

export const seedKey = (
  conference: 'afc' | 'nfc',
  seed: 1 | 2 | 3 | 4 | 5 | 6 | 7
): keyof SeedParams => {
  return `${conference}${seed}` as keyof SeedParams
}

export interface FieldsParams {
  superBowl: string
  afcConference: string
  nfcConference: string
  afcDivisional1: string
  afcDivisional2: string
  nfcDivisional1: string
  nfcDivisional2: string
  afcWildCard1: string
  afcWildCard2: string
  afcWildCard3: string
  nfcWildCard1: string
  nfcWildCard2: string
  nfcWildCard3: string
}

export const matchKey = (
  round: 'WildCard' | 'Divisional' | 'Conference' | 'SuperBowl',
  conference: 'afc' | 'nfc',
  match: 1 | 2 | 3
): keyof FieldsParams => {
  if (round === 'SuperBowl') {
    return 'superBowl'
  }
  if (round === 'Conference') {
    return `${conference}${round}` as keyof FieldsParams
  }
  return `${conference}${round}${match}` as keyof FieldsParams
}

export const initialFields: FieldsParams = {
  superBowl: '',
  afcConference: '',
  nfcConference: '',
  afcDivisional1: '',
  afcDivisional2: '',
  nfcDivisional1: '',
  nfcDivisional2: '',
  afcWildCard1: '',
  afcWildCard2: '',
  afcWildCard3: '',
  nfcWildCard1: '',
  nfcWildCard2: '',
  nfcWildCard3: ''
}
