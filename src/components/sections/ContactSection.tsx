import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/SocialLinks";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-charcoal">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-caption">Contact</p>
              <h2 className="text-editorial-lg text-foreground">
                Begin a <span className="text-gradient-navy">Conversation</span>
              </h2>
            </div>
            
            <div className="line-accent" />
            
            <p className="text-body-lg">
              For inquiries regarding artist representation, stage production, 
              or private event management, we welcome your correspondence.
            </p>

            <p className="text-body">
              All communications are handled with the utmost discretion. 
              Initial consultations are conducted on a confidential basis.
            </p>

            {/* Social Links */}
            <SocialLinks className="justify-center lg:justify-start gap-5 pt-2" iconSize={20} />
          </div>

          {/* Right Column - Contact Details */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="p-6 border border-border">
                <p className="text-caption mb-2">Location</p>
                <p className="text-foreground">Trivandrum, Kerala, India</p>
              </div>

              <div className="p-6 border border-border">
                <p className="text-caption mb-2">Email</p>
                <a 
                  href="mailto:zerionnetworkofficial@gmail.com" 
                  className="text-foreground hover:text-primary transition-colors duration-300"
                >
                  zerionnetworkofficial@gmail.com
                </a>
              </div>

              <div className="p-6 border border-border">
                <p className="text-caption mb-2">Inquiries</p>
                <p className="text-muted-foreground text-sm">
                  For artist bookings and production inquiries, please include 
                  event details and preferred timeline in your correspondence.
                </p>
              </div>
            </div>

            <Button variant="hero" className="w-full" asChild>
              <a href="mailto:zerionnetworkofficial@gmail.com">Send Inquiry</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
