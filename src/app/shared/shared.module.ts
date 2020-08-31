import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { PlayerCardComponent } from '@app/shared/components/player-card/player-card.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, PlayerCardComponent],
  exports: [HeaderComponent, PlayerCardComponent, NzSelectModule, NzModalModule]
})
export class SharedModule {}
