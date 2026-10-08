# Drill Motors website

A five-page car dealership website created by Kevin Lombombe for WEDE5020 web development coursework (Portfolio of Evidence, Part 3).

## Project purpose

Practice building a business website with HTML, CSS and JavaScript: navigation, vehicle listings, promotional content, contact form controls and page metadata. This is a coursework prototype; it is not an operational dealership service.

## Pages

| File | Purpose |
| --- | --- |
| Homepage.html | Business introduction and newsletter interface |
| About us.html | Business history, sample reviews and video reference |
| Products.html | Vehicle brand catalogue |
| Deals.html | Promotional offers |
| Contact.html | Contact details and enquiry interface |
| poeStyle.css | Shared styling and media queries |
| poescript.js | Original coursework interaction code |

## Run locally

Download this folder, open a terminal here and run:

```bash
python3 -m http.server 8000
```

On Windows, you can use `py -m http.server 8000`.

Open http://localhost:8000/Homepage.html in a browser. No database or build step is included.

## Skills demonstrated

- Creating and linking multiple HTML pages.
- Sharing CSS across pages and using media queries.
- Writing JavaScript for browser interactions.
- Adding titles, descriptions and form controls.
- Documenting a website through successive coursework stages.

## Portfolio preparation changes

- Replaced absolute Windows media paths with relative `pictures/` references.
- Corrected stylesheet references to match `poeStyle.css` on case-sensitive systems.
- Replaced contact phone numbers and email addresses with demo details and removed the ID-number field.
- Added setup instructions and an honest record of remaining work.

The uploaded source attachments have been preserved. The Word coursework report was reviewed to establish context; it is not included in this public source folder.

## Known limitations

- All referenced images have been supplied and added. `tour.mp4` is still missing, so the virtual tour cannot play.
- `action_page.php` is referenced but was not supplied; search has no working backend.
- The original JavaScript references missing elements and undefined variables, and includes conflicting validation functions. Interactions need repair and browser testing.
- Contact markup uses `form1` rather than a standard form. Booking, comments and newsletter delivery are not implemented or verified.
- Some HTML uses deprecated or invalid markup; accessibility and small-screen layout need further work.
- An external Google Form and Font Awesome stylesheet are referenced. Their availability and ownership have not been verified.
- Business descriptions, customer reviews, offers and contact details are coursework content and have not been independently verified.

## Next improvements

1. Add `pictures/tour.mp4` and record image and video credits.
2. Correct HTML structure and rebuild form validation using existing field IDs.
3. Make prototype submissions clearly indicate that no enquiry is sent.
4. Test navigation, browser console errors, keyboard access and mobile layout.
5. Add screenshots and a short account of what was learned.
