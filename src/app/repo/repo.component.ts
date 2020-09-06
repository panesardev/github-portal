import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-repo',
	templateUrl: './repo.component.html',
	styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

	repo: any;
	repoDate: string;

	constructor() { }
	
	ngOnInit(): void {
		this.repo = JSON.parse(localStorage['repo']);
		const date: Date = new Date(this.repo.created_at);
		this.repoDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
	}

	goBack(): void {
		window.history.back();
	}

}
