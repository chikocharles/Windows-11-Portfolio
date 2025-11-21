import { Mail, Phone, MapPin, Linkedin, Globe, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";

export const ContactWindow = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Get In Touch</h1>
          <p className="text-muted-foreground">Let's connect and discuss opportunities</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Information */}
        <div className="space-y-4">
          <Card className="p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href="tel:+263717665346" className="font-medium hover:text-primary">
                  (+263) 717665346
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:charliechicco@gmail.com"
                  className="font-medium hover:text-primary"
                >
                  charliechicco@gmail.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">13950 Hatcliffe North</p>
                <p className="font-medium">Harare, Zimbabwe</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Linkedin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/charleschiko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary"
                >
                  /in/charleschiko
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Websites</p>
                <a
                  href="https://geniustechnology.co.zw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-medium hover:text-primary"
                >
                  geniustechnology.co.zw
                </a>
                <a
                  href="https://concentricsolutions.co.zw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-medium hover:text-primary"
                >
                  concentricsolutions.co.zw
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="p-6 border-2">
          <h3 className="text-lg font-semibold mb-4">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Name</label>
              <Input placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <Input type="email" placeholder="your.email@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Subject</label>
              <Input placeholder="What's this about?" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Message</label>
              <Textarea
                placeholder="Your message..."
                rows={5}
                className="resize-none"
              />
            </div>
            <Button className="w-full gap-2" size="lg">
              <Send className="h-4 w-4" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};
