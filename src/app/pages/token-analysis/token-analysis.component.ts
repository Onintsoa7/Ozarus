import { Component } from '@angular/core';
import { SearchHeaderComponent } from "../../layout/search-header/search-header.component";
import { TokenOverviewComponent } from './token-overview/token-overview.component';
import { HoldersAuditComponent } from "./holders-audit/holders-audit.component";
import { NetworkVizualisationComponent } from "./network-vizualisation/network-vizualisation.component";
import { SmallFooterComponent } from "../../layout/small-footer/small-footer.component";

@Component({
  selector: 'app-token-analysis',
  imports: [SearchHeaderComponent, TokenOverviewComponent, HoldersAuditComponent, NetworkVizualisationComponent, SmallFooterComponent],
  templateUrl: './token-analysis.component.html',
  styleUrl: './token-analysis.component.scss'
})
export class TokenAnalysisComponent {

}
