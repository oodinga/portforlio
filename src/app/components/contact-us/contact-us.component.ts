import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MailService } from '../../services/mail.service';
import { MailRequest } from '../../models/mail';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm: FormGroup

  constructor(private mailService: MailService, private fb:FormBuilder){
    this.contactForm=fb.group({
        email: ['', [Validators.required, Validators.email]],
        subject: ['', [Validators.required]],
        message: ['', [Validators.required, this.noHtmlValidator]],
    })
  }

  noHtmlValidator(control: any) {
    const htmlPattern = /<\/?[a-z][\s\S]*>/i;  // Regex pattern for HTML tags
    const hasHtml = htmlPattern.test(control.value);
    return hasHtml ? { hasHtml: true } : null;  // If it has HTML tags, return error object
  }

  getControlError(controlName: string, errorName: string) {
    return this.contactForm.get(controlName)?.hasError(errorName);
  }

  handleSubmit() {

    if(this.contactForm.valid){
   var email: MailRequest = {
    from: this.contactForm.value.email+"",
    subject: this.contactForm.value.subject+"",
    text: this.contactForm.value.message+"",
    html: this.contactForm.value.message+""
   }

   this.mailService.sendMail(email)
   this.contactForm.reset()
  }
   
  }


}
