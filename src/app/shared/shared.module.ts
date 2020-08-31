import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { PlayerCardComponent } from '@app/shared/components/player-card/player-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, PlayerCardComponent],
  exports: [HeaderComponent, PlayerCardComponent]
})
export class SharedModule {}
