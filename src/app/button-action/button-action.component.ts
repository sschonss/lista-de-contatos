import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.css'],
})
export class ButtonActionComponent {
  @Input() texto: string = '';
  @Input() link: string[] = [];
  @Input() funcaoClick?: Function;

  constructor() {}
}
