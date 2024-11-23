import { Injectable } from '@angular/core';
import { MailRequest, MailResponse } from '../models/mail';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private apiUrl = 'http://email.trillion.co.ke/mail';

  constructor(private http: HttpClient) { }

  sendMail(request:MailRequest){
    this.formatMail(request).subscribe(
      formattedHtml => {
        request.html = formattedHtml
        this.callMailService(request).subscribe()
      },
      error => {
        console.error('Error formatting email:', error);
      }
    );
  }

  callMailService(request:MailRequest) :Observable<MailResponse>{
    console.log(this.apiUrl)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

   

    
    return this.http.post<MailResponse>(this.apiUrl, request, { headers });
  }
  

  formatMail(mailRequest: MailRequest): Observable<string> {
    // Fetch the HTML template from assets
    return this.http.get('assets/mail.html', { responseType: 'text' }).pipe(
      map((htmlTemplate: string) => {
        // Replace placeholders in the template with actual content from mailRequest
        return htmlTemplate
          .replace('{{from}}', mailRequest.from)
          .replace('{{message}}', mailRequest.html.replaceAll("\n", "<br>"));
      })
    );
  }
}
