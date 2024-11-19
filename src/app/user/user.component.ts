import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core'; //Input = Decorator; input= special function

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter(); // "select" ist ein Event, das wir auslösen können, es wird als property für die funktion onSelectUser() verwendet

  select = output<string>(); // generic type feature (<string>) behebt das Problem, dass der Typ nicht erkannt wird

  
  // avatar = input<string>('');
  // name = input.required<string>(); // wenn man es wie oben als required haben möchte

  get imagePath() {
    return '../../assets/users/' + this.avatar;
  }
  // imagePath = computed(() => {
  //   return '../../assets/users/' + this.avatar();
  // });

  onSelectUser() {
    this.select.emit(this.id);
  }
}
