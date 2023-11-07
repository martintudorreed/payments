import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-control-serach-input',
  templateUrl: './control-serach-input.component.html',
  styleUrls: ['./control-serach-input.component.scss']
})
export class ControlSerachInputComponent {
  @Input() placeholderText: string = 'Search'
}
