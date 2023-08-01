import { Component, Input } from '@angular/core';

import { ApiService } from '../services/api.service';
import { IPost } from '../models/post.model';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;

  posts: IPost[] = [];
  // Get the User appropriately
  user: IUser = { new_api: true };
  constructor(private apiService: ApiService) {}

  getEntities() {
    this.apiService.call(this.user, 'Post', 'getAll').subscribe(data => this.posts = data);
  }
}
