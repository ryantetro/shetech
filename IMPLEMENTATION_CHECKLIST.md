# Implementation Checklist (Workbook Row Traceability)

Legend: `✅ done` `⏳ open` `⚠️ pending external`

## Cydni follow-up batch (latest requests)
- ✅ Privacy Policy internal legal-review notes removed from the public page copy.
- ✅ About Sponsors old-site `Meet our Sponsors` CTA removed; temporary company list hidden until final logos arrive.
- ✅ Homepage hero buttons updated to `Join student board` and `Apply for Internships` with provided Google Form links.
- ✅ Homepage Explorer Day section keeps content but removes the `Secure Your Spot` CTA card.
- ✅ Homepage Explorer Day pink-section lunch bullet removed.
- ✅ Navigation top label changed from `Tech Careers` to `Content`.
- ✅ Navigation dropdown item renamed from `Tech Workshops` to `Tech Careers`.
- ✅ Tech Workshops page button changed to `Explore Careers` and links to `https://she-tech-pathways.vercel.app/` in a new tab.
- ✅ Tech Workshops temporary Jill placeholder section removed.
- ✅ Footer email updated to `shetech@womentechcouncil.com`.
- ✅ Footer description text updated to `Inspiring the next generation through hands-on experiences, mentorship, and real-world opportunities.`
- ✅ Footer Twitter removed.
- ✅ Contact Us Twitter icon/link removed.
- ✅ Board Members page removed and removed from navigation.
- ✅ Host SheTech Day all three chapter CTAs now link to `https://forms.gle/LTFTDv2Yor2n2KbSA`.
- ✅ Entrepreneur Apprenticeship all three visible CTA buttons now use `https://forms.gle/bEv7Nt6npbAKxYWTA`.
- ✅ Scholarships `View Opportunities` now links to `https://ushe.edu/state-scholarships-aid/` and the current opportunities section is removed.
- ✅ WTC College Interns hero `Apply Now` now links to `https://forms.gle/2hgrnz4dpRhgfqBZ9`.
- ✅ Summer Internship CTA text changed from `Sign Up` to `Apply Now`.
- ✅ Companies Sponsor both `Become a Sponsor` buttons now link to `https://forms.gle/VTTkoX29foLuocgk8`.
- ✅ Companies Host Internship top/bottom button text updated to `Host an Internship Session` and both now link to the provided Google Form.
- ✅ Explorer Day page now uses the 2027 registration form, the plain SheTech logo in the hero, and no hero date badge.
- ✅ Teachers Register Your Students page date/countdown removed from hero.
- ✅ Teachers Register Your Students bottom CTA updated to the 2027 registration form.
- ✅ Sign Up for Information submit now opens a prefilled mailto to `kristin@womentechcouncil.com`.
- ✅ Arizona, Idaho, and Colorado chapter hero dates/buttons removed as requested.
- ✅ About Sponsors logo section hidden until final logos are ready.

## Row-by-row status
| Row | Status | Request | Implemented In | Notes |
|---|---|---|---|---|
| 2 | ✅ | Homepage gallery carousel | `src/app/page.tsx`, `src/components/home/ExplorerGallerySection.tsx` | Shared gallery section added on homepage. |
| 3 | ✅ | Footer plain SheTech logo | `src/components/layout/Footer.tsx` | Uses `/logo.png`. |
| 5 | ✅ | Remove lunch mention (Explorer Day) | `src/components/home/ExplorerDaySection.tsx` | Lunch bullet removed from the homepage pink Explorer Day section. |
| 6 | ✅ | View Schedule button anchors to schedule | `src/app/students/explorer-day/page.tsx` | Uses `#event-schedule`. |
| 7 | ✅ | Remove `Lunch &` from schedule | `src/app/students/explorer-day/page.tsx` | Schedule text updated. |
| 8 | ✅ | Register Free points to Google Form | `src/app/students/explorer-day/page.tsx` | Updated to the new 2027 SheTech registration form. |
| 9 | ✅ | Remove Download Full Guide button | `src/app/students/explorer-day/page.tsx` | Button removed. |
| 10 | ✅ | Secure Your Spot points to Google Form | `src/app/students/explorer-day/page.tsx` | Updated to the new 2027 SheTech registration form. |
| 11 | ✅ | Remove Terms; add Privacy Policy page route | `src/components/layout/Footer.tsx`, `src/app/privacy-policy/page.tsx` | Terms removed, privacy page live. |
| 12 | ✅ | Footer Facebook link | `src/components/layout/Footer.tsx` | Added. |
| 13 | ✅ | Footer Instagram link | `src/components/layout/Footer.tsx` | Added. |
| 14 | ✅ | Footer Twitter/X link | `src/components/layout/Footer.tsx` | Superseded by latest request: Twitter removed from footer. |
| 15 | ✅ | Footer LinkedIn link | `src/components/layout/Footer.tsx` | Added. |
| 16 | ✅ | Footer YouTube link | `src/components/layout/Footer.tsx` | Added. |
| 17 | ✅ | Footer Programs: Explorer Day | `src/components/layout/Footer.tsx` | Added route. |
| 18 | ✅ | Footer Programs: Student Board | `src/components/layout/Footer.tsx` | Added route. |
| 19 | ✅ | Footer Programs: Media Internship | `src/components/layout/Footer.tsx` | Added route. |
| 20 | ✅ | Footer Programs: Summer Internship | `src/components/layout/Footer.tsx` | Added route. |
| 21 | ⚠️ | Footer Resources: Newsroom destination | `src/components/layout/Footer.tsx` | Placeholder `#newsroom` + `data-link-pending="footer-newsroom"`. |
| 22 | ✅ | Footer Resources: Scholarships | `src/components/layout/Footer.tsx` | Added route. |
| 23 | ✅ | Footer Resources: Partners | `src/components/layout/Footer.tsx` | Added route. |
| 24 | ✅ | Footer Resources: About Us | `src/components/layout/Footer.tsx` | Added route. |
| 25 | ✅ | Footer Join Newsletter destination | `src/components/layout/Footer.tsx` | Updated to `https://forms.gle/fobfk6VhPzqoUKzQA`. |
| 26 | ✅ | Homepage Become a Mentor fix | `src/components/home/HeroSection.tsx` | Superseded by latest request: now `Apply for Internships` with provided Google Form link. |
| 27 | ✅ | Mentor virtual training dates 12/13 | `src/app/companies/mentor/page.tsx` | Dates updated. |
| 28 | ✅ | Media Internship Apply form | `src/app/students/media-internship/page.tsx` | `forms.gle` URL set. |
| 29 | ✅ | Summer Internship Sign Up form | `src/app/students/summer-internship/page.tsx` | `forms.gle` URL set. |
| 30 | ⚠️ | Summer Internship annual success photo swap | `src/app/students/summer-internship/page.tsx` | Temporary image in place; pending Dropbox asset. Marked `data-asset-pending="summer-internship-impact-photo"`. |
| 31 | ✅ | Leadership Board application form | `src/app/students/leadership-board/page.tsx` | `forms.gle` URL set. |
| 32 | ✅ | Get Directions to Google Maps | `src/components/home/ExplorerDaySection.tsx` | Maps URL set. |
| 33 | ✅ | Clubs Start a Club form | `src/app/students/clubs/page.tsx` | `forms.gle` URL set. |
| 34 | ⏳ | Clubs Contact Us behavior validation | `src/app/students/clubs/page.tsx` | Needs manual mailto verification on both contacts. |
| 35 | ✅ | Scholarships Energy Workforce link | `src/app/students/scholarships/page.tsx` | Superseded by latest request: opportunities list removed and replaced by external USHE opportunities page. |
| 36 | ✅ | Scholarships High School link | `src/app/students/scholarships/page.tsx` | Superseded by latest request: opportunities list removed and replaced by external USHE opportunities page. |
| 37 | ✅ | Entrepreneur Apprenticeship CTA text | `src/app/students/entrepreneur-apprenticeship/page.tsx` | `Apply Now` -> `Join Waitlist`. |
| 38 | ✅ | Entrepreneur Apprenticeship CTA text (2nd button) | `src/app/students/entrepreneur-apprenticeship/page.tsx` | Updated. |
| 39 | ✅ | WTC Interns Learn More anchor | `src/app/students/wtc-college-interns/page.tsx` | Jumps to details section. |
| 40 | ✅ | `Stay Connected` title rename | `src/app/students/wtc-college-interns/page.tsx` | Updated to `More About This Opportunity`. |
| 41 | ✅ | WTC Interns bottom CTA text + link | `src/app/students/wtc-college-interns/page.tsx` | `Sign Up for SheTech Info` + form URL. |
| 43 | ✅ | `Alumnae` -> `Alumni` | `src/app/students/wtc-college-interns/page.tsx` | Updated. |
| 45 | ✅ | Companies Sponsor top CTA destination | `src/app/companies/sponsor/page.tsx` | Updated to `https://forms.gle/VTTkoX29foLuocgk8`. |
| 46 | ✅ | Companies Sponsor bottom CTA destination | `src/app/companies/sponsor/page.tsx` | Updated to `https://forms.gle/VTTkoX29foLuocgk8`. |
| 47 | ✅ | Volunteer top CTA form | `src/app/companies/volunteer/page.tsx` | Form URL set. |
| 48 | ✅ | Volunteer bottom CTA form | `src/app/companies/volunteer/page.tsx` | Form URL set. |
| 49 | ✅ | Host Internship: Host an Intern destination | `src/app/companies/host-internship/page.tsx` | Updated to provided Google Form and button text adjusted. |
| 50 | ✅ | Host Internship: Contact Us to Host destination | `src/app/companies/host-internship/page.tsx` | Updated to provided Google Form and button text adjusted. |
| 51 | ✅ | TechBuzz featured story to 2026 article | `src/app/media-hub/techbuzz-articles/page.tsx` | Updated. |
| 52 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 53 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 54 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 55 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 56 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 57 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 58 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 59 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 60 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 61 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 62 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 63 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 64 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 65 | ✅ | TechBuzz duplicate list item | `src/app/media-hub/techbuzz-articles/page.tsx` | De-duplicated intentionally. |
| 66 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 67 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 68 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 69 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 70 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 71 | ✅ | TechBuzz yearly tile list item | `src/app/media-hub/techbuzz-articles/page.tsx` | Included. |
| 72 | ✅ | Student Demos: remove watch CTA, tilted tiles | `src/app/media-hub/student-demos/page.tsx` | Implemented. |
| 73 | ✅ | Student Demos: embedded YouTube video | `src/app/media-hub/student-demos/page.tsx` | Added iframe embed section. |
| 74 | ✅ | Tech Workshops button destination | `src/app/media-hub/tech-workshops/page.tsx` | Updated to `https://she-tech-pathways.vercel.app/` with new-tab behavior. |
| 75 | ✅ | Main nav text `Tech Careers` | `src/lib/constants/navigation.ts` | Superseded by latest request: top-level label now `Content`. |
| 76 | ✅ | Tech Workshops sticker header text | `src/app/media-hub/tech-workshops/page.tsx` | Updated to `Skills for Future Tech Careers`. |
| 77 | ✅ | Tech Workshops body copy replacement | `src/app/media-hub/tech-workshops/page.tsx` | Updated. |
| 78 | ✅ | Jill section placeholder | `src/app/media-hub/tech-workshops/page.tsx` | Placeholder block removed so the page ends after the main hero/content section. |
| 79 | ✅ | Host SheTech Day: Apply to Start CTA | `src/app/chapters/host-shetech-day/page.tsx` | Updated to `https://forms.gle/LTFTDv2Yor2n2KbSA`. |
| 80 | ✅ | Host SheTech Day: Convert Your Community CTA | `src/app/chapters/host-shetech-day/page.tsx` | Updated to `https://forms.gle/LTFTDv2Yor2n2KbSA`. |
| 81 | ✅ | Host SheTech Day: Apply to Become CTA | `src/app/chapters/host-shetech-day/page.tsx` | Updated to `https://forms.gle/LTFTDv2Yor2n2KbSA`. |
| 82 | ✅ | Arizona: Register your students destination | `src/app/chapters/arizona/page.tsx` | Register button removed per latest request. |
| 83 | ✅ | Idaho: Sign Up Here destination | `src/app/chapters/idaho/page.tsx` | Hero buttons removed per latest request. |
| 84 | ✅ | Idaho: Learn More destination | `src/app/chapters/idaho/page.tsx` | Hero buttons removed per latest request. |
| 85 | ✅ | Colorado: Register your students destination | `src/app/chapters/colorado/page.tsx` | Hero buttons removed per latest request. |
| 86 | ✅ | Colorado: Learn More destination | `src/app/chapters/colorado/page.tsx` | Hero buttons removed per latest request. |
| 87 | ⚠️ | About Sponsors: Become a Sponsor destination | `src/app/about/sponsors/page.tsx` | Mailto fallback + `data-link-pending="about-sponsors-become"`. |
| 88 | ✅ | About Sponsors: Meet Our Sponsors destination | `src/app/about/sponsors/page.tsx` | Old-site CTA removed; page is waiting on final logo assets before adding sponsor content back below the hero. |
| 89 | ✅ | Contact page social links match footer | `src/app/about/contact-us/page.tsx` | Twitter removed from contact/footer per latest request. |
| 90 | ✅ | Summer Internship `Ideate` -> `Brainstorm` | `src/app/students/summer-internship/page.tsx` | Updated. |
| 91 | ✅ | Remove `soldering` reference | `src/app/students/summer-internship/page.tsx` | Removed from impact copy. |
| 92 | ✅ | Thanksgiving Point photo -> video | `src/app/students/thanksgiving-point-internship/page.tsx`, `public/videos/thanksgiving-point.mp4` | Live video path set and real MP4 replaced. |

## Dependencies from Kristen / External Inputs
- 21: Footer Newsroom URL
- 30: Summer Internship replacement Dropbox image asset
- About Sponsors final logo/image assets before adding the visual sponsor section below the hero
- ⏳ Footer accessibility link/page removed for now; add back when final accessibility content is approved.
- 87: About Sponsors final sponsor CTA URL if mailto should be replaced

## Next verification pass
1. Validate row 34 (`students/clubs`) mailto behavior on desktop and mobile default mail clients.
2. Replace row 30 temporary summer image with final Dropbox asset when provided.
3. Re-run regression checks after each dependency URL is supplied.
