import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'unit',
})
export class UnitPipe implements PipeTransform {
	transform(value: any, unit: string): any {
		return value.toString() + unit
	}
}
