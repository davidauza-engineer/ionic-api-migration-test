import { Component, Input } from '@angular/core';

import { ApiService } from '../services/api.service';
import { IPost } from '../models/post.model';
import { IUser } from '../models/user.model';
import { ApiResolverService } from '../services/api-resolver.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;
  @Input() user: IUser | undefined;

  posts: IPost[] = [];
  constructor(private apiService: ApiService, private apiResolverService: ApiResolverService) {}

  getEntities() {
    if (this.user) {
      this.apiService.call(this.user, 'Post', 'getAll').subscribe(data => {
        if (this.user) {
          this.posts = this.apiResolverService.call(this.user, data, 'allPosts');
        }
      });
    }
  }
}
