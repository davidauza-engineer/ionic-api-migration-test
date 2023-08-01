import { Component } from '@angular/core';

import { IUser } from '../models/user.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // Get the User from appropriate
  user: IUser = { new_api: false };

  constructor() {}

}
