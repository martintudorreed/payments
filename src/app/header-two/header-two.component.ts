import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ApplicationModelService} from "../services/ApplicationModelService";

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss']
})
export class HeaderTwoComponent {
  constructor(public router: Router,
              public applicationModelService: ApplicationModelService) {
  }
}
