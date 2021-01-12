import { Component } from '@angular/core';
import firebase from 'firebase/app';
import {API_KEY, DOMAIN, PROJECT_ID} from 'config.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-book-app';

  constructor() {
    const config = {
      apiKey: API_KEY,
      authDomain: DOMAIN,
      databaseURL: 'https://bookshelves-3d570.firebaseio.com',
      projectId: PROJECT_ID,
      storageBucket: 'angular-book-app-cc52c.appspot.com',
      messagingSenderId: '453731174730'
    };
    firebase.initializeApp(config);
  }

}
