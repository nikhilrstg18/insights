export interface IEndpoint {
	cpuUtil: number
	ramUtil: number
	ram: number
	storageRemaining: number
	batteryRuntime: number
	batteryHealth: number
	age: number
	csat: number
	serviceTag: string
	assetTag: string
	appFailures: number
	osFailures: number
	hostName: string
	summaryStart: Date
	summaryEnd: Date
	model: string
	[key: string]: any
}
