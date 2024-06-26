import {
  Component,
  OnDestroy,
  OnInit,
  computed,
  effect,
  signal,
} from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.scss',
})
export class PropertiesPageComponent implements OnInit, OnDestroy {
  counter = signal(10);
  user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });
  fullName = computed(
    () => `${this.user().first_name} ${this.user().last_name}`
  );

  userChangedEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()} `);
  });

  ngOnInit(): void {
    // setInterval(() => {
    //   this.counter.update((current) => current + 1);
    //   // if ( this.counter() == 15 )
    //   //   this.userChangedEffect.destroy();
    // }, 1000);
  }

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }

  onFieldUpdated(field: keyof User, value: string) {
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    this.user.update((current) => ({
      ...current,
      [field]: value,
    }));
  }
}
