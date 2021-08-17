import {HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UploadService {

    SERVER_URL:string = 'http://localhost:5000/api/guid/upload';

    constructor(private httpClient: HttpClient){ 

    }

    upload(file: File | null){
        const formData: FormData = new FormData();

        formData.append('file', file as Blob, file?.name);
    
        return this.httpClient
            .post(this.SERVER_URL, formData, {
                reportProgress: true,
                observe: 'events'
              });

    }
}