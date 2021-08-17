import { Component, ElementRef, ViewChild } from '@angular/core';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'project-guid';
  fileToUpload: File | null = null;

  constructor(private uploadService: UploadService){

  }

  handleFileInput(eventData: any) {
    console.log(eventData);
    const filesSelected = (<HTMLInputElement>eventData.target).files;
    if(filesSelected != null){

      this.fileToUpload = filesSelected.item(0);
        this.uploadService.upload(this.fileToUpload).subscribe(data => {
            console.log('File upload successful !')
          }, error => {
            console.log(error);
          });
    }
  }
  
}
