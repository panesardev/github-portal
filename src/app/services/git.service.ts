import { Injectable } from '@angular/core';
import { Octokit  } from '@octokit/rest';

@Injectable({ providedIn: 'root' })
export class GitService {
	constructor() { }

	getRepos(username: string): Promise<any> {
		return this.octokit.repos.listForUser({
			username,
			type: 'all',
			sort: 'created',
		});
	}

	getRepo(name: string): Promise<any> {
		return this.octokit.search.repos({ q: `${name} in:name` });
	}

	getUser(username: string) {
		return this.octokit.users.getByUsername({ username });
	}

	private get octokit(): Octokit {
		return new Octokit();
	}

}
