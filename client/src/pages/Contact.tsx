import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contact, companyInfo } from "@/content/siteContent";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold mb-4">
            {contact.headline}
          </h1>
          <p className="text-lg text-muted-foreground">
            {contact.subheadline}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-card rounded-xl border border-border card-shadow p-6 sm:p-8 mb-8">
              <h2 className="text-xl font-serif font-semibold mb-6">
                Contact Details
              </h2>
              <div className="space-y-4">
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors card-shadow-hover"
                  data-testid="contact-phone"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{companyInfo.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors card-shadow-hover"
                  data-testid="contact-email"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{companyInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Hours</p>
                    <p className="font-medium text-sm">{companyInfo.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href={companyInfo.trustedPeople}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>View our TrustedPeople profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <h3 className="font-semibold mb-2">Free No-Obligation Survey</h3>
              <p className="text-sm text-muted-foreground">
                We'll visit your home, assess your attic, and give you honest
                advice. No pressure, no sales pitch—just clear, expert guidance.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border card-shadow p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-serif font-semibold mb-2">
                  Thank You!
                </h2>
                <p className="text-muted-foreground">
                  {contact.afterSubmit}
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-serif font-semibold mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  {contact.formIntro}
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">{contact.formFields.name}</Label>
                    <Input
                      id="name"
                      required
                      className="mt-1.5"
                      data-testid="input-name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="email">{contact.formFields.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="mt-1.5"
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">{contact.formFields.phone}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        className="mt-1.5"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">{contact.formFields.address}</Label>
                    <Input
                      id="address"
                      className="mt-1.5"
                      data-testid="input-address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">{contact.formFields.message}</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      className="mt-1.5 resize-none"
                      data-testid="input-message"
                    />
                  </div>

                  <Button type="submit" className="w-full btn-lift" data-testid="submit-button">
                    {contact.submitButton}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
