import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css'],
})
export class BackButtonComponent {
  @Input() link: string | any[] = ['/'];

  constructor(private router: Router) { }

  navigateBack(): void {
    this.router.navigate([this.link]);
  }
}
