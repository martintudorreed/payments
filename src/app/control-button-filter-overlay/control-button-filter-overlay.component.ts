import { Component, ElementRef, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-control-button-filter-overlay',
  templateUrl: './control-button-filter-overlay.component.html',
  styleUrls: ['./control-button-filter-overlay.component.scss']
})
export class ControlButtonFilterOverlayComponent {

  @ViewChild('overlayTemplate', { static: true }) overlayTemplate!: TemplateRef<any>;

  @ViewChild('containerRef', { static: true }) containerRef!: ElementRef;
  private overlayRef: OverlayRef | null = null;

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {}

  openOverlay() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.containerRef)
      .withPositions([{
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top'
      }]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop'
    });

    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef?.dispose();
      this.overlayRef = null;
    });

    const templatePortal = new TemplatePortal(this.overlayTemplate, this.viewContainerRef);
    this.overlayRef.attach(templatePortal);
  }
}
