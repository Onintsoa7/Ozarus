import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-holders-audit',
  standalone: true,
  templateUrl: './holders-audit.component.html',
  styleUrls: ['./holders-audit.component.scss'],
})
export class HoldersAuditComponent implements AfterViewInit {
  @ViewChild('holderCanvas') holderCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const { Chart, registerables } = await import('chart.js');
    Chart.register(...registerables, ChartDataLabels);

    // Plugin custom pour tracer les lignes
    const calloutLines = {
      id: 'calloutLines',
      afterDraw(chart: any) {
        const { ctx } = chart;
        const meta = chart.getDatasetMeta(0);
        ctx.save();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;

        meta.data.forEach((arc: any) => {
          const angle = arc.startAngle + (arc.endAngle - arc.startAngle) / 2;
          const r = arc.outerRadius;

          // Bord du donut
          const startX = chart.width / 2 + Math.cos(angle) * r;
          const startY = chart.height / 2 + Math.sin(angle) * r;

          // Fin de la ligne (un peu plus loin dehors)
          const endX = chart.width / 2 + Math.cos(angle) * (r + 40);
          const endY = chart.height / 2 + Math.sin(angle) * (r + 40);

          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.stroke();
        });

        ctx.restore();
      },
    };
    const calloutLabels = {
      id: 'calloutLabels',
      afterDraw(chart: any) {
        const { ctx } = chart;
        const meta = chart.getDatasetMeta(0);
        const colors = chart.data.datasets[0].backgroundColor as string[];

        ctx.save();
        ctx.font = 'bold 12px Arial';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        meta.data.forEach((arc: any, index: number) => {
          const angle = arc.startAngle + (arc.endAngle - arc.startAngle) / 2;
          const r = arc.outerRadius;

          // Point au bord du donut
          const startX = chart.width / 2 + Math.cos(angle) * r;
          const startY = chart.height / 2 + Math.sin(angle) * r;

          const midX = chart.width / 2 + Math.cos(angle) * (r + 20);
          const midY = chart.height / 2 + Math.sin(angle) * (r + 20);
          // Point final plus loin
          const endX = chart.width / 2 + Math.cos(angle) * (r + 30);
          const endY = chart.height / 2 + Math.sin(angle) * (r + 30);

          ctx.strokeStyle = colors[index];
          ctx.lineWidth = 2;

          // Ligne
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.lineWidth = 1;
          ctx.stroke();

          // Texte
          const label = chart.data.labels?.[index] as string;
          const value = chart.data.datasets[0].data[index];
          ctx.fillText(
            `${label}: ${value}%`,
            endX + Math.cos(angle) * 20,
            endY + Math.sin(angle) * 20
          );
        });

        ctx.restore();
      },
    };
    new Chart(this.holderCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Top 10', 'Top 11-50', 'Top 51-100', 'Others'],
        datasets: [
          {
            data: [30, 28.7, 23.6, 17.7],
            backgroundColor: ['#9333ea', '#06b6d4', '#22c55e', '#f59e0b'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: '60%',
        layout: {
          padding: 50   // ajoute de l’espace autour
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
          datalabels: { display: false }, // désactiver plugin datalabels
        },
      },
      plugins: [calloutLabels], // utiliser plugin custom
    });
  }
}
