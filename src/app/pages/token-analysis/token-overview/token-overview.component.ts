import { Component } from '@angular/core';

@Component({
  selector: 'app-token-overview',
  imports: [],
  templateUrl: './token-overview.component.html',
  styleUrl: './token-overview.component.scss'
})
export class TokenOverviewComponent {
  bitcoin = "assets/images/bitcoin.png";
  pdf = "assets/icon/pdf.svg";
  reload = "assets/icon/reload.svg";
  copy_icon = "assets/icon/copy_icon.svg";
  market_cap = "assets/icon/market_cap.svg";
  liquidity = "assets/icon/liquidity.svg";
  control = "assets/icon/control.svg";
}
