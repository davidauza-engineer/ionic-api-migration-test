import { Component } from '@angular/core';

import { IUser } from '../models/user.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // Get the User from appropriate
  user: IUser = { new_api: true };

  constructor() {}

}
