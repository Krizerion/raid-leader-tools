import { Component, Input, OnInit } from '@angular/core';
import { getBackgroundColorByClassName } from '@app/shared/utils/class-spec-utils';

@Component({
  selector: 'rv-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Input() centerText = '';
  @Input() className = '';
  @Input() topRightImgSrc = '';
  @Input() bottomRightImgSrc = '';
  @Input() leftImageSrc = '';
  @Input() leftText = '';

  public cssBackgroundClass = '';

  ngOnInit(): void {
    this.cssBackgroundClass = getBackgroundColorByClassName(this.className);
  }
}
