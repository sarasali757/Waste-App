import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
@Component({
  selector: 'app-test-login',
  templateUrl: './test-login.component.html',
  styles: []
})
export class TestLoginComponent implements OnInit {

  constructor(public test:AuthService) { }

  ngOnInit(): void {
  }

}
