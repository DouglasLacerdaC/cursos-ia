import { Resend as ResendLib } from 'resend';

export const Resend = new ResendLib(process.env.RESEND_KEY);
