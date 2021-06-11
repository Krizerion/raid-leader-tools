import { Component, Input } from '@angular/core';
import { getBackgroundColorByClassName } from '@app/shared/utils/class-spec-utils';

@Component({
  selector: 'rlt-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent {
  @Input() centerText = '';
  @Input() className = '';
  @Input() topRightImgSrc = '';
  @Input() bottomRightImgSrc = '';
  @Input() leftImageSrc = '';
  @Input() leftText = '';

  public getBackgroundColorByClassName = getBackgroundColorByClassName;
}
