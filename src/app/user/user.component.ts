import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { from } from "rxjs";
import { GitService } from '../services/git.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	userForm: FormGroup = this.builder.group({
		username: ['', Validators.required]
	});

	loading: boolean = true;
	userFound: boolean;
	username: string;
	name: string;
	location: string;
	photourl: string;
	userurl: string;
	reposurl: string;
	repos: any;
	followers: number;
	following: number;

	constructor(
		private builder: FormBuilder,
		private route: ActivatedRoute,
		private gitService: GitService,
		private router: Router
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.username = params.username;
		});
		this.findUser(this.username);
		this.findRepos(this.username);	
	}

	searchUser(username: string): void {
		this.router.navigate([`/user/${username}`]);
	}

	findUser(username: string): void {
		this.loading = true;
		from(this.gitService.getUser(username))
		.subscribe(res => {
			this.username = res.data.login;
			this.photourl = res.data.avatar_url;
			this.name = res.data.name;
			this.location = res.data.location;
			this.reposurl = res.data.repos_url;
			this.userurl = res.data.html_url;
			this.followers = res.data.followers;
			this.following = res.data.following;

			this.userFound = true;
		}, e => this.userFound = false);
		this.loading = false;
	}

	findRepos(username: string): void {
		this.loading = true;
		from(this.gitService.getRepos(username))
		.subscribe(res => {
			this.repos = res.data;
		});
		this.loading = false;
	}

}
