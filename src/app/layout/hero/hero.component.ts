import { Component } from '@angular/core';
// import { TokenScannerService } from '../../services/token-scanner.service';
// import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  tokenAddress: string = '';
  search_path = 'assets/icon/search.png';
  card_gift_card_path = 'assets/icon/gift.png';
  play_card_path = 'assets/icon/play.png';
  kyc_path = 'assets/icon/person_kyc.png';
  dark_mode_path = 'assets/icon/dark_mode.png';
  gift_purple_path = 'assets/icon/gift_purple.png';

  constructor(
    // private tokenScanner: TokenScannerService,
    // public themeService: ThemeService
  ) {}

  scanNow() {
    // if (this.tokenAddress.trim()) {
    //   this.tokenScanner.scanToken(this.tokenAddress.trim());
    // }
  }

  toggleDarkMode() {
    // this.themeService.toggleDarkMode();
  }
}
