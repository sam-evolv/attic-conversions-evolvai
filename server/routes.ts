import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getResendClient } from "./resend";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, address, message } = req.body;

      // Validate required fields
      if (!name || !email) {
        return res.status(400).json({ 
          success: false, 
          error: "Name and email are required" 
        });
      }

      // Get Resend client
      const { client, fromEmail } = await getResendClient();

      // Send notification email to the business
      await client.emails.send({
        from: fromEmail,
        to: "info@atticconversions.ie",
        replyTo: email,
        subject: `New Quote Request from ${name}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Address:</strong> ${address || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message || 'No message provided'}</p>
        `,
      });

      // Send confirmation email to the customer
      await client.emails.send({
        from: fromEmail,
        to: email,
        subject: "Thank you for contacting Attic Conversions",
        html: `
          <h2>Thank you for your enquiry, ${name}!</h2>
          <p>We've received your request for a quote and will be in touch within 24 hours.</p>
          <p>In the meantime, if you have any urgent questions, please call us at <strong>086 317 5893</strong>.</p>
          <br>
          <p>Best regards,</p>
          <p><strong>The Attic Conversions Team</strong></p>
          <p>Family-run specialists since 1995</p>
        `,
      });

      res.json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to send message. Please try calling us directly." 
      });
    }
  });

  return httpServer;
}
