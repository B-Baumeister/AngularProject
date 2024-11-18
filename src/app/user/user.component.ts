import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar); // statt get imagePath benutzen wir jetzt "computed"
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    //  this.selectedUser = DUMMY_USERS[randomIndex]; // das ist wird nicht mehr gebraucht, weil wir über set es jetzt updaten
  }
  //jetzt wird jedes mal ein neuer user geladen und ein neues image laden, sobald der button angeklickt wird; der randomindex wird dabei überschrieben
}
