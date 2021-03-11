import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'unit',
})
export class UnitPipe implements PipeTransform {
	transform(value: any, unit: string): any {
		if (!unit || !value) return
		return value.toString() + unit
	}
}
