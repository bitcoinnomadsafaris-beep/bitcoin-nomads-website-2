# Bitcoin Nomads Website

A responsive, static website starter for Bitcoin Nomads that welcomes both Bitcoiners and non-Bitcoiners. Built with plain HTML, CSS and JavaScript so it can be deployed as a Render Static Site without a build step.

## Included
- Responsive dark charcoal design with Bitcoin Nomads orange (`#FE5400`) accents
- Cinematic travel photography and visual destination explorer
- Destination filters for mountains, coast, waterfalls/forests and wildlife
- Hiking, private tours, camping/weekend getaways and airport transfer services
- Trip enquiry form with front-end validation and WhatsApp handoff
- Mobile navigation and accessible form labels
- Render Blueprint file (`render.yaml`)

## Before launch
1. Open `script.js`.
2. Replace `REPLACE_WITH_YOUR_WHATSAPP_NUMBER` with the business WhatsApp number in international format, digits only (for example, Kenya numbers start with `254`, without `+` or spaces).
3. If you have an official logo file, replace the simple text/SVG mark in `index.html` with your logo.
4. Confirm all copy, service details, contact details and images. Images currently load from Unsplash and therefore require internet access.
5. Add your actual social media links if you want them in the footer.

## Preview locally
Open `index.html` in a browser. No package installation is needed.

## Deploy on Render
1. Create a new GitHub repository, for example `bitcoin-nomads-website`.
2. Upload all files and folders from this project to the repository root.
3. Sign in to Render and choose **New + → Static Site**.
4. Connect the repository.
5. Use:
   - **Build Command:** leave blank
   - **Publish Directory:** `.`
6. Create the Static Site. Render will provide an `onrender.com` URL.
7. To connect `bitcoinomads.africa`, open the site's **Settings → Custom Domains**, add the domain, then follow the DNS records Render displays at your domain registrar. Wait for DNS verification and TLS provisioning.

The included `render.yaml` can also be used with Render Blueprints if preferred.

## Enquiry form behaviour
The form validates fields in the browser and then prepares a WhatsApp message. It does not save customer enquiries to a database. Add the real WhatsApp number before launch. If you prefer form submissions to be stored or sent by email, connect a form provider or add a backend endpoint.

## Brand notes
- Orange: `#FE5400`
- Charcoal: `#363636` / site background uses a deeper charcoal `#161616`
- The uploaded brand guide lists Acra Majora 3. The current layout uses Manrope and DM Sans as web-safe Google Fonts alternatives until you confirm that Acra Majora 3 is licensed/available for web embedding.
