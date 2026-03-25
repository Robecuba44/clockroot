import { Component, OnInit, Input, inject } from '@angular/core';
import { EyrieBot } from '../models/eyrie';
import { BotService } from '../bot.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-eyrie',
  templateUrl: './eyrie.component.html',
  styleUrls: ['./eyrie.component.scss'],
  standalone: false,
})
export class EyrieComponent implements OnInit {
  botService = inject(BotService);
  translateService = inject(TranslateService);

  @Input() public bot: EyrieBot;

  ngOnInit() {
    this.bot.customData.buildings = this.bot.customData.buildings || [];
  }

  modifySuitCard(suit, diff = 1) {
    this.bot.customData.decree[suit] = Math.max(
      this.bot.customData.decree[suit] + diff,
      0,
    );

    this.botService.saveBots();
  }

  toggleBuilding(index) {
    this.bot.customData.buildings[index] =
      !this.bot.customData.buildings[index];

    this.botService.saveBots();
  }
}
