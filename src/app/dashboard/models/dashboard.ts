export class Dashboard {
  constructor(
    public avgUtilCpu_count: number = 0,
    public avgUtilRam_count: number = 0,
    public systemCrashes_count: number = 0,
    public ram_count: number = 0,
    public storageRemaining_count: number = 0,
    public batteryRuntime_count: number = 0,
    public age_count: number = 0,
    public total_devices: number = 0,
    public avgUtilCpu_avg: number = 0,
    public avgUtilRam_avg: number = 0,
    public ram_avg: number = 0,
    public batteryRuntime_avg: number = 0,
    public storageRemaining_avg: number = 0,
    public systemCrashes_avg: number = 0,
    public age_avg: number = 0,
    public csat_avg: number = 0
  ) {}
}
