import { IEndpoint } from 'src/app/dashboard/models/i-endpoint'

export class Endpoint {
	public cpuUtil: number = 0
	public ramUtil: number = 0
	public ram: number = 0
	public storageRemaining: number = 0
	public batteryRuntime: number = 0
	public batteryHealth: number = 0
	public age: number = 0
	public csat: number = 0
	public serviceTag: string = ''
	public assetTag: string = ''
	public appFailures: number = 0
	public osFailures: number = 0
	public hostName: string = ''
	public summaryStart: Date = new Date()
	public summaryEnd: Date = new Date()
	public model: string = ''
	public warranty: string = ''
	public processor: string = ''
	public os: string = ''
	public storage: string = ''
	public gpu: string = ''
	public gpuUtil: number = 0
	public gpuUtilMax: number = 0
	public ramUtilMax: number = 0
	public style: string = ''
	public builtInDisplay: string = ''
	public biosVersion: string = ''

	constructor(iEndpoint?: IEndpoint) {
		this.cpuUtil = iEndpoint?.cpuUtil || 0
		this.ramUtil = iEndpoint?.ramUtil || 0
		this.ram = iEndpoint?.ram || 0
		this.storageRemaining = iEndpoint?.storageRemaining || 0
		this.batteryRuntime = iEndpoint?.batteryRuntime || 0
		this.batteryHealth = iEndpoint?.batteryHealth || 0
		this.age = iEndpoint?.age || 0
		this.csat = iEndpoint?.csat || 0
		this.serviceTag = iEndpoint?.serviceTag || ''
		this.assetTag = iEndpoint?.assetTag || ''
		this.appFailures = iEndpoint?.appFailures || 0
		this.osFailures = iEndpoint?.osFailures || 0
		this.hostName = iEndpoint?.hostName || ''
		this.summaryStart = new Date(iEndpoint?.summaryStart || new Date())
		this.summaryEnd = this.getSummaryEndDate(iEndpoint?.summaryEnd)
		this.model = iEndpoint?.model || ''
		this.warranty = iEndpoint?.warranty || ''
		this.processor = iEndpoint?.processor || ''
		this.os = iEndpoint?.os || ''
		this.storage = iEndpoint?.storage || ''
		this.gpu = iEndpoint?.gpu || ''
		this.gpuUtil = iEndpoint?.gpuUtil || 0
		this.gpuUtilMax = iEndpoint?.gpuUtilMax || 0
		this.ramUtilMax = iEndpoint?.ramUtilMax || 0
		this.style = iEndpoint?.style || ''
		this.builtInDisplay = iEndpoint?.builtInDisplay || ''
		this.biosVersion = iEndpoint?.biosVersion || ''
	}

	getSummaryEndDate(summaryEnd?: string) {
		let dt = new Date(summaryEnd || new Date())
		dt.setHours(dt.getHours() + 2)
		return dt
	}

	[key: string]: any
}
