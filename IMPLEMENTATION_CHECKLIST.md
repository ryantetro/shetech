# Implementation Checklist

## Global layout
- ✅ Renamed the **Media Hub** navigation item to **Tech Careers** while keeping existing routes.
- ✅ Updated `Footer` with the plain SheTech logo, resource/program links, social URLs, privacy link, and a placeholder newsletter CTA (link pending).
- ⚠️ Newsletter link needs Kristen’s final form/URL before enabling the CTA (`data-link-pending="newsletter"`).
- ✅ Added a `/privacy-policy` page with placeholder copy flagged for Kristen/Legal review.

## Homepage & Explorer Day hero
- ✅ Adjusted the homepage hero CTAs (`Register Now` and `Become a Mentor`) to point to the Explorer Day page and mentor signup, respectively.
- ✅ Created `GalleryCarousel` + `ExplorerGallerySection`, reused on the homepage and Explorer Day page (including CTA/form/link updates, schedule anchor, and targeted gallery).

## Students & programs
- ✅ Leadership Board CTA now opens the provided Google Form.
- ✅ Media Internship apply button now uses the new `forms.gle` link.
- ✅ Summer Internship benefits/copy updated, Added a “Sign Up” CTA and placeholder for the new Thanksgiving Point image (currently points to `/summer-internship/thanksgiving-point-2025.jpg`), plus renamed “Brainstorm” and removed the soldering reference.
- ✅ Clubs “Start a Club” button links to the new form; Contact Us button remains mailto (noted as pending outreach confirmation).
- ⚠️ Scholarship cards now wrap “Apply Now” buttons in placeholder anchors (`href="#"` with `data-link-pending`) until Kristen supplies Energy Workforce & High School links.
- ✅ Entrepreneur Apprenticeship “Apply Now” CTA now says “Join Waitlist” and keeps the info form link.
- ✅ WTC College Interns “Stay Connected” section is now `More About This Opportunity`, includes `id="details"`, the alumni typo fix, and the CTA links to the SheTech Info Google Form.

## Companies & chapters
- ✅ Mentor page virtual training dates updated to Feb 12/13.
- ✅ Volunteer CTAs point to the provided Google Form.
- ⚠️ Sponsor, Host Internship, and Chapter CTA buttons still rely on mailto/placeholders—Mark these as `data-link-pending` in the checklist so they can be revisited when Kristen supplies firm URLs.

## Media hub + contact updates
- ✅ TechBuzz hero now promotes the “SheTech Explorer Day 2026” feature with the new copy and link.
- ✅ Added a “TechBuzz In Focus” tile grid powered by the provided article URLs.
- ✅ Student Demos hero replaced by a tilted tile gallery referencing earlier partner workshop imagery (no external watch button anymore).
- ✅ Tech Workshops header now reads “Skills for Future Tech Careers,” copy/bullets follow the requested narrative, and a placeholder indicates where Jill’s section will land.
- ✅ Contact page social icons use the new links (Twitter still pending).

## Media assets & video handling
- ⚠️ Thanksgiving Point hero now renders the video at `/videos/thanksgiving-point.mp4`, but the actual MP4 could not be downloaded because the network cannot reach `dropbox.com`. A zero-byte placeholder was created; replace it with the real file once the asset is available.

## Next Steps / Dependencies
1. 🚧 **Missing URLs:** Twitter/X link, Newsroom button, “Join Newsletter” form, sponsor/apply-host forms, and any other “Kristen will get link” anchors still need final destinations before releasing.
2. 🚧 **Scholarship & Energy Workforce links:** Update the placeholder anchors once Kristen shares the actual application URLs.
3. 🚧 **Jill’s Tech Workshops section:** Replace the dashed placeholder box with her new code/copy once it arrives.
4. 🚧 **Thanksgiving Point media:** Swap the placeholder video file at `/videos/thanksgiving-point.mp4` with the real MP4 once it can be downloaded (the prior `curl` attempt failed because `dropbox.com` cannot be reached).
5. 📌 **Club “Contact Us” button review:** Validate whether it should keep the mailto or point to a new contact form (flagged for Kristen).
