import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {

	constructor() { }

	toggle(): void {
		document.getElementById('nav').classList.toggle('show');
	}

}
