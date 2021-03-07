export interface IEndpoint {
  cpuUtil: number;
  ramUtil: number;
  ram: number;
  storageRemaining: number;
  batteryRuntime: number;
  batteryHealth: number;
  age: number;
  csat: number;
  serviceTag: string;
  assetTag: string;
  appCrashes: number;
  systemCrashes: number;
  hostName: string;
  summaryStart: Date;
  summaryEnd: Date;
  [key: string]: any;
}
