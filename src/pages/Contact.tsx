import Layout from "@/components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="container-narrow py-12">
        <h1 className="editorial-headline mb-4">Contact</h1>
        <p className="body-text text-muted-foreground max-w-2xl mb-10">
          For orders, enquiries, or assistance, please reach out using the information below. 
          We aim to respond to all messages within one business day.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border-subtle pt-10">
          {/* Order Enquiries */}
          <div>
            <h2 className="uppercase-label text-foreground mb-4">Orders</h2>
            <p className="body-text text-muted-foreground mb-4">
              To place an order, click the "Order via WhatsApp" button on any book page, 
              or contact us directly:
            </p>
            <dl className="text-sm space-y-3">
              <div>
                <dt className="text-muted-foreground">WhatsApp</dt>
                <dd>
                  <a href="https://wa.me/1234567890" className="text-link">
                    +1 (234) 567-890
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a href="mailto:orders@aldinepress.com" className="text-link">
                    orders@aldinepress.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* General Enquiries */}
          <div>
            <h2 className="uppercase-label text-foreground mb-4">General Enquiries</h2>
            <p className="body-text text-muted-foreground mb-4">
              For partnership opportunities, publishing enquiries, or general questions:
            </p>
            <dl className="text-sm space-y-3">
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a href="mailto:info@aldinepress.com" className="text-link">
                    info@aldinepress.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Address */}
        <div className="border-t border-border-subtle mt-12 pt-10">
          <h2 className="uppercase-label text-foreground mb-4">Address</h2>
          <address className="text-sm text-muted-foreground not-italic leading-relaxed">
            Aldine Press<br />
            123 Publisher's Row<br />
            London, EC1A 1BB<br />
            United Kingdom
          </address>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
