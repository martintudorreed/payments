import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
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
export class ControlDocumentViewerComponent implements AfterViewInit, OnInit{
  @Input() paymentStatusId: number = -1;
  @Input() isShowAttachments: boolean = true;
  @Input() isInFullScreenViewer: boolean = false;
  browserWindowWidthValue: number | null = null;
  isDragging: boolean = false;
  @Input() isViewAttachment: boolean = true;

  viewerURLString: string = 'http://payments.tult.co.nz/assets/docs/pdfs/invoice.pdf'
  activeDocument: number = 0;

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.applicationModelService.browserWindowWidth$.subscribe((width: number | null) => {
      this.browserWindowWidthValue = width;
    });
    if(!this.isViewAttachment) {
      this.applicationModelService.isDocumentViewerCollapsed$.next(true);
    }
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
      this.viewerURLString = 'http://payments.tult.co.nz/assets/docs/pdfs/invoice.pdf';
      console.log(this.viewerURLString);
    } else {
      this.viewerURLString = 'http://payments.tult.co.nz/assets/docs/pdfs/tsandcs.pdf'
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
