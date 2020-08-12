import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.sass'],
  providers: [DataService]
})
export class AccountInfoComponent implements OnInit {
  constructor(readonly dataService: DataService, readonly cookieService: CookieService) {}

  ngOnInit(): void {}
}
