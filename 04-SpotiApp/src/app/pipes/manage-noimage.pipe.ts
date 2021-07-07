import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'manageNoimage'
})
export class ManageNoimagePipe implements PipeTransform {
	transform(images: any[]): string {
		if (!images || images.length === 0) return 'assets/img/noimage.png';
		return images[0].url;
	}
}
