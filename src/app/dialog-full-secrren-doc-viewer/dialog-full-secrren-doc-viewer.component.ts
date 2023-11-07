import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ApplicationModelService} from "../services/ApplicationModelService";

@Component({
  selector: 'app-dialog-full-secrren-doc-viewer',
  templateUrl: './dialog-full-secrren-doc-viewer.component.html',
  styleUrls: ['./dialog-full-secrren-doc-viewer.component.scss']
})
export class DialogFullSecrrenDocViewerComponent {
  isShowAttachments = this.data.isShowAttachments;
  isInFullScreenViewer = this.data.isInFullScreenViewer;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public applicationModelService: ApplicationModelService) { }

}
