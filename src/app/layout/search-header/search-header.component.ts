import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-header',
  imports: [FormsModule],
  templateUrl: './search-header.component.html',
  styleUrl: './search-header.component.scss'
})
export class SearchHeaderComponent {
  contractAddress = '';
  logo = "assets/icon/logo.svg";
  onScan() {
    console.log('Scanning:', this.contractAddress);
  }
}
