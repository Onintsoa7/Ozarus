import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
  extra?: string[] | boolean;
}

@Component({
  selector: 'app-how-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-works.component.html',
  styleUrls: ['./how-works.component.scss']
})



export class HowWorksComponent {

  paste_path = 'assets/icon/paste_purple.png';
  brain_path = 'assets/icon/brain_purple.png';
  forward_path = 'assets/icon/forward_purple.png';
  pdf_path = 'assets/icon/pdf.png';
  twitter_path = 'assets/icon/twitter.png';
  jauge = 'assets/images/jauge.svg';
  distribution = 'assets/images/distribution.svg';
  liquidity = 'assets/images/liquidity.svg';


  steps: Step[] = [
    {
      id: 1,
      title: 'Paste Token Address',
      description: 'Simply paste any Solana token address into our scanner. Our System immediately begins comprehensive analysis.',
      icon: this.paste_path,
    },
    {
      id: 2,
      title: 'AI Analysis & Scoring',
      description: 'Our AI analyzes supply distribution...',
      icon: this.brain_path,
      extra: ['Supply Analysis', 'Holder Patterns', 'Liquidity Depth']
    },
    {
      id: 3,
      title: 'Act & Share',
      description: 'Get actionable insights...',
      icon: this.forward_path,
      extra: true
    }
  ];
  isArray(val: any): val is string[] {
    return Array.isArray(val);
  }

}
