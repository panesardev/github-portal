import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-repo-list',
	templateUrl: './repo-list.component.html',
	styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

	@Input() repos: any[];

	constructor(
		private router: Router
	) { }

	ngOnInit(): void { }
	
	viewRepo(index: number): void {
		localStorage['repo'] = JSON.stringify(this.repos[index]);
		this.router.navigate(['/repository']);
	}

}
