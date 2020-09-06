import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GitService } from '../services/git.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
	userForm: FormGroup = this.builder.group({
		username: ['', Validators.required]
	});
	repoForm: FormGroup = this.builder.group({
		reponame: ['', Validators.required]
	});

	constructor(
		private builder: FormBuilder,
		private router: Router,
		private git: GitService
	) { }

	async findRepo() {
		const res = await this.git.getRepo(this.repoForm.value.reponame);
		localStorage['repo'] = JSON.stringify(res.data.items[0]);
		this.router.navigate(['/repository']);
	}

	findUser(): void {
		this.router.navigate([`/user/${this.userForm.value.username}`]);
	}

}
