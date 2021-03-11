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
	summaryStart: string
	summaryEnd: string
	model: string
	warranty: string
	processor: string
	os: string
	storage: string
	gpu: string
	gpuUtil: number
	gpuUtilMax: number
	ramUtilMax: number
	style: string
	builtInDisplay: string
	biosVersion: string
	[key: string]: any
}
