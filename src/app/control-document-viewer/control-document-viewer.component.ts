import { Component, Input, AfterViewInit } from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import { DialogFullSecrrenDocViewerComponent } from "../dialog-full-secrren-doc-viewer/dialog-full-secrren-doc-viewer.component";

@Component({
  selector: 'app-control-document-viewer',
  templateUrl: './control-document-viewer.component.html',
  styleUrls: ['./control-document-viewer.component.scss']
})
export class ControlDocumentViewerComponent implements AfterViewInit{
  @Input() paymentStatusId: number = -1;
  @Input() isShowAttachments: boolean = true;
  @Input() isInFullScreenViewer: boolean = false;
  browserWindowWidthValue: number | null = null;
  isDragging: boolean = false;
  isViewAttachment: boolean = true;

  viewerURLString: string = 'http://localhost:4402/assets/docs/pdfs/invoice.pdf'
  activeDocument: number = 0;

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  ngAfterViewInit() {
    this.applicationModelService.browserWindowWidth$.subscribe((width: number | null) => {
      this.browserWindowWidthValue = width;

    });
  }

  doDragEnter() {
    this.isDragging = !this.isDragging
  }

  doDragLeave() {
    this.isDragging = !this.isDragging
  }

  doToggleAttachmentViewer() {
    this.isViewAttachment = !this.isViewAttachment;
    this.applicationModelService.isDocumentViewerCollapsed$.next(!this.applicationModelService.isDocumentViewerCollapsed$.getValue());
  }

  doLoadDocument(ind: number) {
    if (ind === 0) {
      this.viewerURLString = 'http://localhost:4402/assets/docs/pdfs/invoice.pdf';
      console.log(this.viewerURLString);
    } else {
      this.viewerURLString = 'http://localhost:4402/assets/docs/pdfs/tsandcs.pdf'
      console.log(this.viewerURLString);
    }
    this.activeDocument = ind;
    if (!this.isViewAttachment) {
      this.dialog.open(DialogFullSecrrenDocViewerComponent, {
        maxWidth: '98%',
        minWidth: '98%',
        minHeight: '96vh',
        maxHeight: '98%',
        panelClass: 'ifm-dialog',
        autoFocus: false,
        data: {
          isShowAttachments: false,
          isInFullScreenViewer: true,
        }
      });
    }
  }

}
