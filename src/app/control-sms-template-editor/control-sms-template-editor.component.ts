import {Component, Input} from '@angular/core';
import {LocalDataService} from "../services/local-data.service";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationModelService} from "../services/ApplicationModelService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-control-sms-template-editor',
  templateUrl: './control-sms-template-editor.component.html',
  styleUrls: ['./control-sms-template-editor.component.scss']
})
export class ControlSmsTemplateEditorComponent {
  @Input() customerName: string =' ';
  @Input() invoiceAmmount: number = 0;
  @Input() paymentTransactionExpiry: string ='01/01/2032';
  @Input() paymentTransactionNumber: string ='xxxxx'

  charsInSMS: number = 0;

  templates = this.localDataService.smsTemplateData;
  sectionContent = this.templates[0].smsTemplateContent;

  constructor(private localDataService: LocalDataService,
              public dialog: MatDialog,
              public applicationModelService: ApplicationModelService,
              private _snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit(): void {
    // Initialize charsInSMS with the length of sectionContent
    this.charsInSMS = this.countCharacters(this.sectionContent);
  }


  countCharacters(content: string): number {
    const div = document.createElement('div');
    div.innerHTML = content;
    return div.textContent?.length || 0;
  }

  setSectionContent(newContent: string): void {
    this.sectionContent = newContent;
    this.charsInSMS = this.countCharacters(newContent);
  }


  ngAfterViewInit() {
    this.doCountChars();
  }

  doBlur(ev: any) {
    this.doCountChars();
  }

  insertText(val: string) {

  }

  doCountChars() {
    return this.sectionContent.length;
  }

  doKeyUp(ev: any) {
    let content = (ev.target as HTMLElement).textContent || "";
    this.charsInSMS = content.length;
  }
}
