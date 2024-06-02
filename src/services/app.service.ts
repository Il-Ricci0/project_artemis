import { Injectable } from '@angular/core';
import { User } from '../app/models/user.model';
import { Player } from '../app/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }

  public currentUser: User = new User();
  public players: Player[] = [];
}
