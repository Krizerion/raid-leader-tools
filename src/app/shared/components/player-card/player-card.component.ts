import { Component, Input, OnInit } from '@angular/core';
import { getBackgroundColorByClassName } from '@app/shared/utils/class-spec-utils';

@Component({
  selector: 'rv-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Input() name: string;
  @Input() className: string = 'Demon Hunter';
  // @Input() specName: string;
  // @Input() roleName: string;
  @Input() classImage: string;
  @Input() specImage: string;
  @Input() roleImage: string;

  public cssBackgroundClass = '';

  ngOnInit() {
    this.setClassColor();
  }

  setClassColor() {
    this.cssBackgroundClass = getBackgroundColorByClassName(this.className);
  }
}
