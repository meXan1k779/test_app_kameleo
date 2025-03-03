export enum Type {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT"
}

export enum Status {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

export interface Site {
  id: number;
  url: string;
}

export interface Test {
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteId: number;
  site: string;
}

export const STATUS_ORDER = {
  ASC: ['ONLINE', 'PAUSED', 'STOPPED', 'DRAFT'],
  DESC: ['DRAFT', 'STOPPED', 'PAUSED', 'ONLINE']
} as const;

export enum SortType {
  ASK = 'asc',
  DESC = 'desc'
}