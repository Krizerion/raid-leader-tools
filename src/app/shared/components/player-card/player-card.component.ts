import { Component, Input } from '@angular/core';

@Component({
  selector: 'rv-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent {
  @Input() name: string;
  @Input() class: string;
  @Input() spec: string;
  @Input() role: string;
}
