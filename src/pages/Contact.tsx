import Layout from "@/components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="container-narrow py-6">
        <h1 className="catalogue-title mb-2">Contact</h1>
        <p className="text-sm text-muted-foreground max-w-lg mb-4">
          For orders or enquiries, please reach out below.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-border-subtle pt-4">
          {/* Order Enquiries */}
          <div>
            <p className="section-label mb-2">Orders</p>
            <p className="text-sm text-muted-foreground mb-3">
              To place an order, use the WhatsApp button on any book page, or contact:
            </p>
            <dl className="text-xs space-y-1.5">
              <div className="flex gap-2">
                <dt className="text-muted-foreground w-16">WhatsApp</dt>
                <dd><a href="https://wa.me/1234567890">+1 (234) 567-890</a></dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-muted-foreground w-16">Email</dt>
                <dd><a href="mailto:orders@aldinepress.com">orders@aldinepress.com</a></dd>
              </div>
            </dl>
          </div>

          {/* General Enquiries */}
          <div>
            <p className="section-label mb-2">General</p>
            <p className="text-sm text-muted-foreground mb-3">
              For partnerships or publishing enquiries:
            </p>
            <dl className="text-xs space-y-1.5">
              <div className="flex gap-2">
                <dt className="text-muted-foreground w-16">Email</dt>
                <dd><a href="mailto:info@aldinepress.com">info@aldinepress.com</a></dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Address */}
        <div className="border-t border-border-subtle mt-4 pt-4">
          <p className="section-label mb-2">Address</p>
          <address className="text-xs text-muted-foreground not-italic leading-relaxed">
            Aldine Press, 123 Publisher's Row, London EC1A 1BB
          </address>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
