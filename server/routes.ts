import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import Mailgun from "mailgun.js";
import FormData from "form-data";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Initialize Mailgun
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || ""
  });

  // Subscribe endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email } = req.body;

      if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        return res.status(400).json({ error: "Invalid email" });
      }

      // Log subscription
      console.log("New subscription from:", email);

      // Send email to admin via Mailgun
      try {
        const mailgunDomain = process.env.MAILGUN_DOMAIN || "sandbox.mailgun.org";
        await mg.messages.create(mailgunDomain, {
          from: "noreply@mate-matrimony.com",
          to: "theishqedit@gmail.com",
          subject: "New Subscription - MATE Matrimony",
          html: `<p>New subscription from: <strong>${email}</strong></p>`,
          text: `New subscription from: ${email}`
        });
      } catch (emailError) {
        console.error("Email sending error:", emailError);
      }

      res.json({ success: true, message: "Subscription successful" });
    } catch (error) {
      console.error("Subscription error:", error);
      res.status(500).json({ error: "Failed to process subscription" });
    }
  });

  return httpServer;
}
