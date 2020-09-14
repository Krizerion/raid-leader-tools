import { Component } from '@angular/core';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'rv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public auth: AuthService) {}
}
