import { IEnumToArray } from './constants'
import { routesName } from '@/router/index'

export enum CurrencyCode {
  CNY = 1,
  VND = 2,
  THB = 3
}
export enum jiraTicket {
  QQ = 0,
  SP = 1,
  BD = 2,
  MP = 3,
  BSP = 4,
  MSP = 5
}

export enum qatFlow {
  'Setting Tickets' = 0,
  'Deployment Info' = 1,
  Deploy = 2,
  'List Apps' = 3,
  'List Nginx' = 4,
  'List Fluent Id' = 5,
  'List Static File' = 6
}

export function EnumToArray(o: any): IEnumToArray[] {
  return Object.entries(o)
    .filter((x) => typeof x[1] === 'number')
    .map((value) => ({ id: value[1] as number, name: value[0] }))
}

export const jiraTicketOptions: IEnumToArray[] = EnumToArray(jiraTicket)
