
export interface MailRequest {
    from: string
    subject: string
    text: string
    html: string
}

export interface MailResponse {
    responseMessage: string
    responseCode: string
}