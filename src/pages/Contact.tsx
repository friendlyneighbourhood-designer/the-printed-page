import { Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="container-wide py-12">
        <h1 className="section-heading">Contact Us</h1>
        <p className="section-subheading">We'd love to hear from you</p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 border border-border bg-background outline-none focus:border-navy transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-border bg-background outline-none focus:border-navy transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 border border-border bg-background outline-none focus:border-navy transition-colors resize-none" placeholder="Your message..." />
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed">Have questions about an order or need help finding the perfect book? Our team is here to assist you.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-navy mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:hello@bookpyramid.com" className="text-muted-foreground hover:text-foreground">hello@bookpyramid.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-navy mt-1" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <a href="https://wa.me/1234567890" className="text-muted-foreground hover:text-foreground">+1 234 567 890</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-navy mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">123 Literary Lane<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
