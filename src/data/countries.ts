import { LAST_REVIEWED, makeSchengenCountry } from "./schengen-base";
import type { Country } from "./types";

const schengen: Country[] = [
  makeSchengenCountry({
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    blurb: "TLScontact runs French applications from ten US centres. Jurisdiction is strict.",
    processingTime: "Officially 2-3 weeks; up to 45 days in complex cases",
    appointmentWait: "Commonly 3-6 weeks, worst from April to July",
    officialSource: "https://france-visas.gouv.fr/en/etats-unis-d-amerique",
    center: "TLScontact",
    bookingHost: "fr.tlscontact.com",
    bookingUrl: "https://fr.tlscontact.com/en/",
    serviceFee: "TLScontact service fee, typically around USD 30-35",
    extraDocs: [
      "France-Visas receipt printed from the online wizard, which is separate from the appointment confirmation",
      "Proof of residence in the consulate's district, such as a driver's license or state ID",
    ],
    extraNotes: [
      "France-Visas generates a personalised checklist once you finish the online wizard. Take that exact list to the appointment — the counter checks against it.",
      "Ten French consulates split the US by state, and each requires proof that you live in its district. Applying outside your district gets the file rejected at the counter.",
    ],
    extraLinks: [
      {
        label: "France-Visas online wizard and jurisdiction lookup",
        url: "https://france-visas.gouv.fr/en/etats-unis-d-amerique",
      },
    ],
  }),
  makeSchengenCountry({
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    blurb: "Short-stay German applications go through BLS International, with jurisdiction enforced.",
    processingTime: "Typically 10-15 working days, up to 45 in complex cases",
    appointmentWait: "Commonly 4-10 weeks depending on the consulate",
    officialSource: "https://www.germany.info/us-en/service/visa",
    center: "BLS International",
    bookingHost: "blsinternational.com/germany/usa",
    bookingUrl: "https://www.blsinternational.com/germany/usa/",
    serviceFee: "BLS service fee charged at the centre; confirm the current figure when booking",
    extraNotes: [
      "BLS rejects applications lodged outside your jurisdiction, so confirm which German mission covers your state before booking.",
      "The German consulate in New York confirms the 59-month biometrics reuse rule, so a recent Schengen visa can save you the in-person fingerprinting.",
    ],
    extraLinks: [
      { label: "German mission and jurisdiction finder", url: "https://www.germany.info/us-en/appointment-899906" },
    ],
  }),
  makeSchengenCountry({
    slug: "italy",
    name: "Italy",
    flag: "🇮🇹",
    blurb: "VFS Global runs Italian applications from six US cities. The fee moves every quarter.",
    processingTime: "15 calendar days standard, frequently longer in summer",
    appointmentWait: "Commonly 4-8 weeks, worst in May and June",
    officialSource:
      "https://ambwashingtondc.esteri.it/en/servizi-consolari-e-servizi-per-il-cittadino-straniero/visti/visa-fees/",
    center: "VFS Global",
    bookingHost: "visa.vfsglobal.com/usa/en/ita",
    bookingUrl: "https://visa.vfsglobal.com/usa/en/ita",
    serviceFee: "VFS service fee of roughly USD 32-45",
    fee: "USD 104.90 for the July-September 2026 quarter, recalculated quarterly",
    extraNotes: [
      "Italy converts the EUR 90 fee to dollars once a quarter, so the amount you pay changes through the year. Check the embassy fee page in the week you apply.",
      "Names on hotel reservations must match your passport exactly, and the itinerary you submit must match the bookings.",
    ],
  }),
  makeSchengenCountry({
    slug: "spain",
    name: "Spain",
    flag: "🇪🇸",
    blurb: "BLS International handles Spanish applications, with a separate checklist per consulate.",
    processingTime: "15 calendar days, up to 45 in complex cases",
    appointmentWait: "Commonly 3-8 weeks depending on the consulate",
    officialSource: "https://www.exteriores.gob.es/en/ServiciosAlCiudadano/Paginas/Visados.aspx",
    center: "BLS International",
    bookingHost: "usa.blsspainvisa.com",
    bookingUrl: "https://usa.blsspainvisa.com/",
    serviceFee: "BLS service fee, non-refundable; some centres take cash or debit only",
    extraNotes: [
      "Each Spanish consulate publishes its own checklist and its own list of states. Use the checklist for the consulate that covers you, not a generic one.",
      "Spain states the main-destination and first-entry rules explicitly and enforces them at the counter.",
    ],
  }),
  makeSchengenCountry({
    slug: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    blurb: "VFS Global handles Dutch applications from seven US cities, with clear checklists.",
    processingTime: "15 calendar days, up to 45 in complex cases",
    appointmentWait: "Commonly 2-6 weeks",
    officialSource: "https://www.netherlandsworldwide.nl/visa-the-netherlands/schengen-visa/apply-united-states",
    center: "VFS Global",
    bookingHost: "visa.vfsglobal.com/usa/en/nld",
    bookingUrl: "https://visa.vfsglobal.com/usa/en/nld",
    serviceFee: "VFS service fee charged at the centre",
    extraNotes: [
      "The Netherlands only accepts applications from people who actually live in the US, which your F-1 status and I-20 establish.",
      "Centres are in Chicago, Houston, Los Angeles, Miami, New York, San Francisco and Washington DC.",
    ],
  }),
  makeSchengenCountry({
    slug: "switzerland",
    name: "Switzerland",
    flag: "🇨🇭",
    blurb: "Explicitly confirms that F-1 students on an I-20 may apply from inside the US.",
    processingTime: "15 calendar days, up to 45 in complex cases",
    appointmentWait: "Commonly 2-5 weeks",
    officialSource:
      "https://www.dfae.admin.ch/countries/usa/en/home/visa/entry-ch/up-90-days/where-to-apply-schengen.html",
    center: "VFS Global",
    bookingHost: "visa.vfsglobal.com/usa/en/che",
    bookingUrl: "https://visa.vfsglobal.com/usa/en/che",
    serviceFee: "VFS service fee charged at the centre",
    extraNotes: [
      "Switzerland names F-1 with an I-20 in its list of statuses that count as legal residence in the US, so you may apply here rather than in your home country.",
      "If you gave Schengen fingerprints in the last 59 months you can email the Swiss representation a copy of the old visa sticker instead of appearing in person.",
      "Switzerland is in the Schengen area but not the EU customs union, so goods allowances differ even though the visa is the same.",
    ],
    extraLinks: [
      {
        label: "Swiss jurisdiction table by US state",
        url: "https://www.dfae.admin.ch/countries/usa/en/home/visa/entry-ch/up-90-days/where-to-apply-schengen.html",
      },
    ],
  }),
  makeSchengenCountry({
    slug: "austria",
    name: "Austria",
    flag: "🇦🇹",
    blurb: "Consulates no longer take short-stay files directly — everything goes through VFS Global.",
    processingTime: "15 calendar days, up to 45 in complex cases",
    appointmentWait: "Commonly 3-6 weeks",
    officialSource:
      "https://www.bmeia.gv.at/en/consular-section-of-the-austrian-embassy-in-washington/travel-to-austria/entrance-and-residence/how-do-i-make-an-application",
    center: "VFS Global",
    bookingHost: "visa.vfsglobal.com/usa/en/aut",
    bookingUrl: "https://visa.vfsglobal.com/usa/en/aut",
    serviceFee: "VFS service fee charged at the centre",
    extraNotes: [
      "Austrian consulates stopped accepting short-stay applications in person in 2021. VFS centres in Houston, Miami, Los Angeles, San Francisco, New York and Chicago handle them instead.",
      "Austria confirms the 6-month advance window and requires the file to be lodged at least 15 calendar days before the trip.",
    ],
  }),
  makeSchengenCountry({
    slug: "belgium",
    name: "Belgium",
    flag: "🇧🇪",
    blurb: "Belgian consulates issue visas directly. A common first entry point into Europe.",
    processingTime: "15 calendar days, up to 45 in complex cases",
    appointmentWait: "Commonly 2-5 weeks",
    officialSource: "https://unitedstates.diplomatie.belgium.be/en/visa-belgium/schengen-visa-c-visa-90-days",
    center: "the Belgian embassy or consulate for your state",
    bookingHost: "unitedstates.diplomatie.belgium.be",
    bookingUrl: "https://unitedstates.diplomatie.belgium.be/en/travel-belgium/visa-belgium",
    serviceFee: "No outsourcing fee where the consulate takes the file directly",
    extraNotes: [
      "Belgium spells out the main-destination rule and the equal-nights fallback in detail on its own site, which is a useful reference even if you apply elsewhere.",
      "Washington DC, Atlanta, Los Angeles and New York each cover a group of states; some jurisdictions use an external centre, so check yours before booking.",
    ],
  }),
  makeSchengenCountry({
    slug: "portugal",
    name: "Portugal",
    flag: "🇵🇹",
    blurb: "VFS Global for most states, but Boston, Newark and Illinois follow their own routes.",
    processingTime: "15 calendar days, often 3-4 weeks in practice",
    appointmentWait: "Commonly 4-10 weeks",
    officialSource: "https://washingtondc.embaixadaportugal.mne.gov.pt/en/consular-services/visa-information",
    center: "VFS Global",
    bookingHost: "visa.vfsglobal.com/usa/en/prt",
    bookingUrl: "https://visa.vfsglobal.com/usa/en/prt",
    serviceFee: "USD 43.91 including tax per application",
    extraNotes: [
      "Illinois residents apply through the Consulate General of Lithuania in Chicago under a representation agreement — an easy detail to miss.",
      "Boston and Newark consulates handle their own regions directly rather than through VFS.",
    ],
    extraLinks: [
      {
        label: "Portugal jurisdiction list (PDF)",
        url: "https://www.vfsglobal.com/one-pager/portugal/usa/english/pdf/Areas-Of-Jurisdiction-Schengen-Aug-2025.pdf",
      },
    ],
  }),
  makeSchengenCountry({
    slug: "greece",
    name: "Greece",
    flag: "🇬🇷",
    blurb: "Books directly with the consulate, allows only a 3-month lead time, and asks for W-2s.",
    processingTime: "15 calendar days, extendable to 30 and exceptionally 60",
    appointmentWait: "Commonly 4-10 weeks in peak season",
    officialSource: "https://www.mfa.gr/usa/en/services/visas/schengen-visas/lodging-of-visa-application/",
    center: "the Greek consulate for your state",
    bookingHost: "mfa.gr",
    bookingUrl: "https://www.mfa.gr/usa/en/services/citizen-services/schedule-an-appointment/",
    serviceFee: "No outsourcing fee where the consulate takes the file directly",
    applyWindow: "No earlier than 3 months before the trip, and at least 15 days before",
    extraDocs: [
      "W-2 forms for the last two years where you have US earnings, such as an assistantship",
      "Three months of bank and credit card statements",
    ],
    extraNotes: [
      "Greece is one of the few Schengen states that caps the advance window at 3 months rather than 6, which squeezes the planning window for summer trips.",
      "Its financial documentation is heavier than most: W-2s and statements, plus a letter from your department if you are funded.",
    ],
  }),
  makeSchengenCountry({
    slug: "czechia",
    name: "Czechia",
    flag: "🇨🇿",
    blurb: "Direct consular applications, with a fee recalculated every month.",
    processingTime: "15 calendar days, up to 45 in complex cases",
    appointmentWait: "Commonly 3-7 weeks",
    officialSource: "https://mzv.gov.cz/washington/en/consular_information/short_term_schengen_visa.html",
    center: "the Czech embassy or consulate",
    bookingHost: "mzv.gov.cz",
    bookingUrl: "https://mzv.gov.cz/washington/en/consular_information/short_term_schengen_visa.html",
    serviceFee: "No outsourcing fee; the consulate takes the file directly",
    fee: "Recalculated monthly with the exchange rate — USD 103 in a recent month",
    extraNotes: [
      "Czechia does not use an outsourced visa centre in the US despite what many third-party sites claim. Book with the Washington, Chicago, New York or Los Angeles mission by email.",
      "The dollar fee is reset every month rather than quarterly, so check the current figure before you turn up with cash.",
    ],
  }),
  makeSchengenCountry({
    slug: "poland",
    name: "Poland",
    flag: "🇵🇱",
    blurb: "Book through e-Konsulat and lodge in person. Jurisdiction is published state by state.",
    processingTime: "15 calendar days, up to 45 in complex cases",
    appointmentWait: "Commonly 2-6 weeks",
    officialSource: "https://www.gov.pl/web/usa-en/c-type-schengen-visa",
    center: "the Polish consulate (e-Konsulat booking)",
    bookingHost: "secure.e-konsulat.gov.pl",
    bookingUrl: "https://secure.e-konsulat.gov.pl/",
    serviceFee: "No outsourcing fee; applications go straight to the consulate",
    extraNotes: [
      "Poland publishes an explicit state-by-state list: Washington, Chicago, Houston, Los Angeles and New York each cover a defined group of states.",
      "The application must be lodged in person. Poland does not accept files by mail, fax or email.",
    ],
  }),
  makeSchengenCountry({
    slug: "hungary",
    name: "Hungary",
    flag: "🇭🇺",
    blurb: "Names the I-20 explicitly in its F-1 checklist. Advance window differs by consulate.",
    processingTime: "10-15 days on average, up to 60 days in some cases",
    appointmentWait: "Commonly 3-6 weeks",
    officialSource: "https://washington.mfa.gov.hu/en/schengen-visas",
    center: "the Hungarian embassy or consulate",
    bookingHost: "konzinfobooking.mfa.gov.hu",
    bookingUrl: "https://konzinfobooking.mfa.gov.hu/",
    serviceFee: "No outsourcing fee; the consulate takes the file directly",
    applyWindow:
      "Washington says no more than 3 months ahead; Miami says 6. Confirm with your own consulate, and lodge at least 15 days before",
    extraNotes: [
      "Hungary is one of the few consulates that names F-1 students directly: bring the I-20 alongside proof of US status valid at least 3 months beyond your departure from the Schengen area.",
      "Hungarian consulates disagree in print about the advance window — Washington says 3 months, Miami says 6. Go by the page for the consulate that covers your state.",
      "Hungary frames the biometrics reuse rule as 5 years rather than 59 months. If you are close to the boundary, assume you will be fingerprinted again.",
    ],
  }),
  makeSchengenCountry({
    slug: "sweden",
    name: "Sweden",
    flag: "🇸🇪",
    blurb: "VFS Global, with published fees and a fee waiver route for some academic travel.",
    processingTime: "15 calendar days, up to 45 in complex cases",
    appointmentWait: "Commonly 2-5 weeks",
    officialSource:
      "https://www.swedenabroad.se/en/about-sweden-non-swedish-citizens/usa/going-to-sweden/visiting-sweden/information-about-schengen-visas/",
    center: "VFS Global",
    bookingHost: "visa.vfsglobal.com/usa/en/swe",
    bookingUrl: "https://visa.vfsglobal.com/usa/en/swe",
    serviceFee: "USD 24.44 VFS service fee",
    fee: "USD 104 for adults, USD 52 for children aged 6-11",
    extraNotes: [
      "Sweden operates fee waivers for some student, researcher and academic exchange travel. If your trip is a GIP or a conference rather than pure tourism, check whether you qualify before paying.",
      "The Embassy in Washington DC decides the applications; VFS only collects them.",
    ],
  }),
  makeSchengenCountry({
    slug: "denmark",
    name: "Denmark",
    flag: "🇩🇰",
    blurb: "VFS Global collects; the New York consulate decides for the whole US region.",
    processingTime: "15 calendar days, up to 45, plus about 45 more if referred to immigration",
    appointmentWait: "Commonly 2-5 weeks",
    officialSource: "https://um.dk/usa/en/travel-and-residence/how-to-apply-for-a-visa/",
    center: "VFS Global",
    bookingHost: "visa.vfsglobal.com/usa/en/dnk",
    bookingUrl: "https://visa.vfsglobal.com/usa/en/dnk",
    serviceFee: "VFS service fee charged at the centre",
    extraNotes: [
      "Denmark warns openly against visa shopping — applying to Denmark because slots are free when you are not really going there. A file that does not match the itinerary can be refused and the visa revoked later.",
      "Eight VFS centres feed one decision hub at the Consulate General in New York, which covers the US, Canada and Mexico.",
    ],
  }),
  makeSchengenCountry({
    slug: "norway",
    name: "Norway",
    flag: "🇳🇴",
    blurb: "VFS Global collects; the New York consulate decides. Budget up to 45 days.",
    processingTime: "15 days as the base case, but the consulate states up to 45 days",
    appointmentWait: "Commonly 2-5 weeks",
    officialSource: "https://www.norway.no/en/usa/services-info/visitors-visa-res-permit/visitors-visa/",
    center: "VFS Global",
    bookingHost: "visa.vfsglobal.com/usa/en/nor",
    bookingUrl: "https://visa.vfsglobal.com/usa/en/nor",
    serviceFee: "EUR 26 (about USD 28.50) VFS service fee, plus an optional courier fee",
    extraNotes: [
      "Norway's own page quotes up to 45 days from the moment the file reaches New York, so plan on the long end rather than the 15-day base case.",
      "As a non-citizen applying in the US you must show a valid US status document and the means to return — your F-1 stamp, I-94 and signed I-20 do this.",
    ],
  }),
  makeSchengenCountry({
    slug: "finland",
    name: "Finland",
    flag: "🇫🇮",
    blurb: "VFS Global handles Finnish applications, with the 6-month window stated plainly.",
    processingTime: "15 calendar days, extendable to 45 in individual cases",
    appointmentWait: "Commonly 2-5 weeks",
    officialSource: "https://finlandabroad.fi/web/usa/where-to-apply-for-a-visa-",
    center: "VFS Global",
    bookingHost: "visa.vfsglobal.com/usa/en/fin",
    bookingUrl: "https://visa.vfsglobal.com/usa/en/fin",
    serviceFee: "VFS service fee charged at the centre",
    extraNotes: [
      "Finland states the 6-month advance limit explicitly and requires a passport valid at least 3 months beyond your stay with two blank pages.",
    ],
  }),
  makeSchengenCountry({
    slug: "iceland",
    name: "Iceland",
    flag: "🇮🇸",
    blurb: "VFS Global, and the only Schengen state here with a genuine mail-in route.",
    processingTime: "15 calendar days, up to 45 in complex cases",
    appointmentWait: "Commonly 2-5 weeks, or no appointment at all on the mail-in route",
    officialSource: "https://visa.vfsglobal.com/usa/en/isl",
    center: "VFS Global",
    bookingHost: "visa.vfsglobal.com/usa/en/isl",
    bookingUrl: "https://visa.vfsglobal.com/usa/en/isl",
    serviceFee: "VFS service fee charged per application",
    extraNotes: [
      "If you already gave Schengen biometrics within the last 59 months, Iceland accepts a mail-in application through the Washington DC VFS office. That is the single biggest time saver available on this list.",
      "The Iceland desk only accepts files where Iceland is genuinely your main destination. It is not a shortcut for a France or Spain trip.",
    ],
  }),
  makeSchengenCountry({
    slug: "croatia",
    name: "Croatia",
    flag: "🇭🇷",
    blurb: "In Schengen since 2023, so a standard Schengen visa now covers it.",
    processingTime: "15 calendar days, up to 45 in complex cases",
    appointmentWait: "Commonly 2-5 weeks",
    officialSource: "https://mvep.gov.hr/consular-information-107317-257247/general-visa-information-107319-257249/257249",
    center: "VFS Global",
    bookingHost: "visa.vfsglobal.com/usa/en/hrv",
    bookingUrl: "https://visa.vfsglobal.com/usa/en/hrv/",
    serviceFee: "VFS service fee charged at the centre",
    extraNotes: [
      "Croatia joined the Schengen area on 1 January 2023, so a valid multiple-entry Schengen visa is enough and no separate Croatian visa is needed.",
      "A Croatian visa issued before 2023 was a national visa and is not valid for Schengen travel. Only post-2023 Croatian visas are full Schengen visas.",
      "The Los Angeles VFS centre covers 19 western states; other states are handled by the eastern centres.",
    ],
  }),
];

// Lower-volume Schengen states: the consulate itself usually takes the file.
const smallerSchengen: Country[] = (
  [
    {
      slug: "estonia",
      name: "Estonia",
      flag: "🇪🇪",
      source: "https://vm.ee/en/consular-visa-and-travel/visa-information",
      blurb: "Low-volume consulate, so appointments are usually easy to get.",
    },
    {
      slug: "latvia",
      name: "Latvia",
      flag: "🇱🇻",
      source: "https://www.mfa.gov.lv/en/visas",
      blurb: "Applications go to the Latvian embassy in Washington DC for most states.",
    },
    {
      slug: "lithuania",
      name: "Lithuania",
      flag: "🇱🇹",
      source: "https://www.urm.lt/default/en/visa-information",
      blurb: "Short waits, and the Chicago consulate also represents Portugal for Illinois.",
    },
    {
      slug: "luxembourg",
      name: "Luxembourg",
      flag: "🇱🇺",
      source: "https://maee.gouvernement.lu/en/services-aux-citoyens/visa.html",
      blurb: "Handled through the Dutch VFS channel in much of the US under a representation deal.",
    },
    {
      slug: "malta",
      name: "Malta",
      flag: "🇲🇹",
      source: "https://identita.gov.mt/central-visa-unit/",
      blurb: "Applications go to the Maltese embassy or a representing Schengen state.",
    },
    {
      slug: "slovakia",
      name: "Slovakia",
      flag: "🇸🇰",
      source: "https://www.mzv.sk/en/web/washington-en",
      blurb: "Handled by the Slovak embassy, with limited appointment days each month.",
    },
    {
      slug: "slovenia",
      name: "Slovenia",
      flag: "🇸🇮",
      source: "https://www.gov.si/en/topics/visa/",
      blurb: "Quiet consulate with short waits, handy for trips that continue into the Balkans.",
    },
    {
      slug: "liechtenstein",
      name: "Liechtenstein",
      flag: "🇱🇮",
      source: "https://www.llv.li/en/national-administration/migration-and-passport-office",
      blurb: "Represented by Switzerland, so a Swiss-issued Schengen visa covers it.",
    },
    {
      slug: "romania",
      name: "Romania",
      flag: "🇷🇴",
      source: "https://evisa.mae.ro/",
      blurb: "Full Schengen member since January 2025, so a Schengen visa now covers it.",
    },
    {
      slug: "bulgaria",
      name: "Bulgaria",
      flag: "🇧🇬",
      source: "https://www.mfa.bg/en/customerservice/travelbulgaria/visabulgaria",
      blurb: "Full Schengen member since January 2025, so a Schengen visa now covers it.",
    },
  ] as const
).map((c) =>
  makeSchengenCountry({
    slug: c.slug,
    name: c.name,
    flag: c.flag,
    blurb: c.blurb,
    processingTime: "15 calendar days, up to 45 in complex cases",
    appointmentWait: "Commonly 1-4 weeks; these are low-volume missions",
    officialSource: c.source,
    center: `the ${c.name} embassy or consulate, or the Schengen state representing it`,
    bookingHost: new URL(c.source).host,
    bookingUrl: c.source,
    serviceFee: "Usually no outsourcing fee when the embassy takes the file directly",
    extraNotes:
      c.slug === "romania" || c.slug === "bulgaria"
        ? [
            `${c.name} joined the Schengen area fully on 1 January 2025. A valid multiple-entry Schengen visa admits you without a separate national visa, and days there now count towards the 90/180 total.`,
          ]
        : c.slug === "liechtenstein"
          ? [
              "Liechtenstein issues no visa of its own. Apply to Switzerland, which represents it, and enter on the Swiss-issued Schengen visa.",
            ]
          : [
              "Smaller missions are represented by another Schengen state in several US jurisdictions. Confirm who actually takes your file before you prepare documents.",
            ],
  }),
);

const nonSchengen: Country[] = [
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    bloc: "non-schengen",
    need: "visa-required",
    blurb: "A separate Standard Visitor visa. No Schengen visa or ETA route for Indian passports.",
    visaType: "Standard Visitor visa (tourism), normally issued for 6 months",
    fee: "GBP 135, charged to US applicants at about USD 190",
    serviceFee:
      "Optional priority service around GBP 500 and super priority higher again; confirm current pricing at booking",
    processingTime: "Officially within 15 working days; about 3 weeks in practice",
    appointmentWait: "1-3 weeks for a biometrics slot at a US application centre",
    applyWindow: "Up to 3 months before travel",
    biometrics: "Fingerprints and photo at a UK visa application centre in the US",
    steps: [
      {
        title: "Apply and pay online on GOV.UK",
        when: "10 weeks before travel",
        detail:
          "Complete the Standard Visitor application. It asks for your US immigration status, your funding, and your travel history for the last 10 years. You pay in dollars at the Home Office rate.",
      },
      {
        title: "Book a biometrics appointment",
        when: "Immediately after paying",
        detail:
          "Book at a UK visa application centre run by the Home Office's commercial partner. Centres in New York, Washington DC, Chicago and San Francisco fill first, so book before you finish gathering documents.",
      },
      {
        title: "Upload supporting documents",
        when: "Before or at the appointment",
        detail:
          "Scan and upload yourself, or pay the centre to scan for you. Include the I-20, F-1 stamp, I-94, enrollment letter, bank statements and your itinerary.",
      },
      {
        title: "Attend the appointment",
        when: "On the appointment date",
        detail:
          "Fingerprints and a photo are taken. Bring the printed confirmation and your passport, which is usually retained or posted in for processing.",
      },
      {
        title: "Wait for the decision",
        when: "About 3 weeks, or around 5 working days on priority",
        detail:
          "Track online. Priority is an optional paid add-on and is not always available at every centre.",
      },
    ],
    timeline: [
      { label: "12 weeks out", weeksBefore: 12, title: "Plan the trip", detail: "Dates, cities and who is paying for what." },
      { label: "10 weeks out", weeksBefore: 10, title: "Apply and pay online", detail: "The application window opens 3 months before travel." },
      { label: "9 weeks out", weeksBefore: 9, title: "Biometrics appointment", detail: "Fingerprints and photo at a US application centre." },
      { label: "6 weeks out", weeksBefore: 6, title: "Decision and passport back", detail: "About 3 weeks standard, faster on paid priority." },
      { label: "Departure", weeksBefore: 0, title: "Travel", detail: "Carry your passport, signed I-20 and proof of your return to studies." },
    ],
    documents: [
      {
        group: "Identity and status",
        items: [
          "Passport valid for the whole trip with a blank page",
          "Valid F-1 visa stamp and most recent I-94",
          "I-20 with a travel signature valid on your date of re-entry to the US",
          "Enrollment verification letter showing you are a continuing student",
        ],
      },
      {
        group: "Trip and money",
        items: [
          "Flight and accommodation bookings",
          "Bank statements for the last 6 months",
          "Assistantship, scholarship or CPT/OPT employment letter if you have one",
          "Sponsor letter and statements if someone else is paying",
        ],
      },
    ],
    links: [
      { label: "Apply for a Standard Visitor visa", url: "https://www.gov.uk/standard-visitor/apply-standard-visitor-visa" },
      { label: "Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "Home Office fee calculator", url: "https://visa-fees.homeoffice.gov.uk/" },
    ],
    notes: [
      "The UK is not in the Schengen area. A Schengen visa does not admit you to the UK, and a UK visa does not admit you to Schengen.",
      "Indian passport holders are visa nationals, so the Electronic Travel Authorisation route does not apply. ETA is only for nationalities that were already visa-free.",
      "Time spent in the UK does not count against your Schengen 90/180 allowance.",
      "Long-term visitor visas exist — 2, 5 and 10 year — and can be worth it if you expect several trips, though the up-front cost is much higher.",
    ],
    lastReviewed: LAST_REVIEWED,
    officialSource: "https://www.gov.uk/standard-visitor",
  },
  {
    slug: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    bloc: "non-schengen",
    need: "visa-required",
    blurb: "EU but not Schengen. Its own C visa through AVATS, and the slowest process on this list.",
    visaType: "Short stay 'C' visa (tourism), single or multiple entry",
    fee: "EUR 60 single entry, EUR 100 multiple entry",
    serviceFee: "VFS handling fee where documents are lodged through a visa centre",
    processingTime: "No guaranteed service standard; commonly 4-8 weeks",
    appointmentWait: "No interview; documents are lodged or posted in",
    applyWindow: "Up to 3 months before travel",
    biometrics: "Not routinely required for short stay visas from the US",
    steps: [
      {
        title: "Complete the AVATS online application",
        when: "12-14 weeks before travel",
        detail:
          "Fill in Ireland's online application, then print and sign the summary sheet it generates. Use only the official visas.inis.gov.ie address — there are convincing fake AVATS sites.",
      },
      {
        title: "Pay the fee and build the pack",
        when: "Within days of applying",
        detail:
          "Pay EUR 60 or EUR 100 and assemble exactly what the summary sheet lists, including F-1 status proof and six months of statements.",
      },
      {
        title: "Lodge passport and documents",
        when: "Within 30 days of the online application",
        detail:
          "Send or lodge the documents with the office covering your US jurisdiction. The application lapses if they do not arrive within 30 days.",
      },
      {
        title: "Wait for the decision",
        when: "4-8 weeks",
        detail:
          "Decisions are published in periodic lists. Do not commit to non-refundable travel before the visa is granted.",
      },
    ],
    timeline: [
      { label: "14 weeks out", weeksBefore: 14, title: "Start the AVATS application", detail: "Ireland is slower than Schengen; start earlier than you think you need to." },
      { label: "12 weeks out", weeksBefore: 12, title: "Lodge passport and documents", detail: "Must arrive within 30 days of applying online." },
      { label: "5 weeks out", weeksBefore: 5, title: "Decision and passport back", detail: "Typically 4 to 8 weeks from receipt." },
      { label: "Departure", weeksBefore: 0, title: "Travel", detail: "Carry your passport, signed I-20 and bookings." },
    ],
    documents: [
      {
        group: "Identity and status",
        items: [
          "Passport valid at least 6 months beyond your intended departure from Ireland",
          "Signed AVATS application summary sheet",
          "Two passport photographs",
          "Valid F-1 visa stamp, I-94 and I-20 with a current travel signature",
          "Enrollment letter from your university",
        ],
      },
      {
        group: "Trip and money",
        items: [
          "Letter explaining the trip, the dates and how it is funded",
          "Flight and accommodation bookings",
          "Bank statements for the last 6 months",
          "Travel medical insurance",
        ],
      },
    ],
    links: [
      { label: "Irish online visa application (AVATS)", url: "https://www.visas.inis.gov.ie/AVATS/OnlineHome.aspx" },
      { label: "Short stay 'C' visit visa guidance", url: "https://www.irishimmigration.ie/coming-to-visit-ireland/" },
    ],
    notes: [
      "Ireland is in the EU but not in Schengen. A Schengen visa does not admit you to Ireland, and time there does not count against the 90/180 allowance.",
      "The British-Irish Visa Scheme does not help you. It is only open to Indian nationals applying from India, not to those resident elsewhere.",
      "Treat 10-12 weeks as the realistic lead time. Ireland is the most common reason a spring-break itinerary has to be redrawn.",
    ],
    lastReviewed: LAST_REVIEWED,
    officialSource: "https://www.irishimmigration.ie/coming-to-visit-ireland/",
  },
  {
    slug: "cyprus",
    name: "Cyprus",
    flag: "🇨🇾",
    bloc: "non-schengen",
    need: "visa-waiver-possible",
    blurb: "EU but not Schengen. A used multi-entry Schengen visa gets you in; a US visa does not.",
    waiver:
      "Visa-free with a valid double or multiple-entry Schengen visa you have already used once, or an EU/Schengen residence permit",
    visaType: "National Cyprus visa, or entry on a qualifying Schengen visa",
    fee: "National visa fee applies; no fee if you enter on a qualifying Schengen visa",
    processingTime: "No published service standard; allow several weeks for a national visa",
    appointmentWait: "Short, but the channel from the US must be confirmed with the mission",
    applyWindow: "Up to 3 months before travel",
    biometrics: "Required for a national visa, in the same way as a Schengen application",
    steps: [
      {
        title: "Check whether your Schengen visa already covers you",
        when: "8 weeks before travel",
        detail:
          "Cyprus admits holders of a valid double or multiple-entry Schengen visa that has been used at least once, and holders of Bulgarian, Croatian or Romanian national visas and EU residence permits. A single-entry visa already used does not qualify.",
      },
      {
        title: "Do not assume your F-1 visa helps",
        when: "8 weeks before travel",
        detail:
          "Unlike the Balkan states, Cyprus does not publish a waiver based on holding a US visa. If you have no qualifying Schengen document, plan for a national visa.",
      },
      {
        title: "Apply for the national visa if needed",
        when: "6-8 weeks before travel",
        detail:
          "Apply through the Cypriot diplomatic mission covering your US state. Documentation mirrors a Schengen file: insurance with at least EUR 30,000 cover, funds, student status and bookings.",
      },
      {
        title: "Travel with the evidence in hand",
        when: "On the day",
        detail:
          "On the waiver route, carry the passport containing the Schengen visa and evidence that you have used it to enter the Schengen area.",
      },
    ],
    timeline: [
      { label: "8 weeks out", weeksBefore: 8, title: "Decide your route in", detail: "Schengen-visa waiver, or a national Cyprus visa." },
      { label: "6 weeks out", weeksBefore: 6, title: "Apply if the waiver does not cover you", detail: "Confirm the channel with the Cypriot mission for your state." },
      { label: "2 weeks out", weeksBefore: 2, title: "Check documents", detail: "Insurance, funds, signed I-20 and the qualifying Schengen visa." },
      { label: "Departure", weeksBefore: 0, title: "Travel", detail: "Carry proof you have used the Schengen visa at least once." },
    ],
    documents: [
      {
        group: "Identity and status",
        items: [
          "Passport valid at least 3 months beyond departure",
          "The valid double or multiple-entry Schengen visa, if relying on the waiver",
          "F-1 stamp, I-94 and I-20 with a current travel signature",
          "Proof of student status",
        ],
      },
      {
        group: "Trip and money",
        items: [
          "Return flight and accommodation bookings",
          "Proof of funds",
          "Travel medical insurance with at least EUR 30,000 cover",
        ],
      },
    ],
    links: [
      {
        label: "Cyprus: who does not need a visa",
        url: "https://www.gov.cy/mfa/en/documents/categories-of-persons-and-countries-whose-nationals-do-not-require-a-visa/",
      },
    ],
    notes: [
      "Cyprus is an EU member but not in the Schengen area, so days spent there do not count against your Schengen 90/180 allowance.",
      "The waiver needs a double or multiple-entry Schengen visa that has already been used. Check the entry stamp before you rely on it.",
      "There is no evidence of a Cyprus waiver based on a US visa alone, so do not plan around your F-1 stamp getting you in.",
    ],
    lastReviewed: LAST_REVIEWED,
    officialSource: "https://www.gov.cy/mfa/",
  },
  {
    slug: "turkiye",
    name: "Türkiye",
    flag: "🇹🇷",
    bloc: "non-schengen",
    need: "visa-waiver-possible",
    blurb: "A conditional e-Visa issued in minutes on the strength of your valid US visa.",
    waiver:
      "Conditional e-Visa online when you hold a valid US, UK, Irish or Schengen visa or residence permit",
    visaType: "e-Visa, single entry, up to 30 days within a 180-day window",
    fee: "About USD 43 including the service charge",
    processingTime: "Minutes to a few hours online",
    appointmentWait: "None; there is no appointment on the e-Visa route",
    applyWindow: "Any time before travel, though issue is near-instant",
    biometrics: "Not required on the e-Visa route",
    steps: [
      {
        title: "Confirm you meet the conditional e-Visa rule",
        when: "4 weeks before travel",
        detail:
          "Indian passport holders qualify for the e-Visa on condition of holding a valid visa or residence permit from the US, UK, Ireland or a Schengen state. The rule is written as a valid US visa, without excluding student categories, so an F-1 stamp normally satisfies it.",
      },
      {
        title: "Apply on the official portal only",
        when: "2-4 weeks before travel",
        detail:
          "Use evisa.gov.tr and nothing else. Copycat sites charge several times the real fee, and the Turkish foreign ministry publishes warnings about them.",
      },
      {
        title: "Carry the supporting visa to the border",
        when: "On the day",
        detail:
          "You must show the same US visa or residence permit you relied on, alongside the printed e-Visa. If that document has expired, the e-Visa is not valid.",
      },
    ],
    timeline: [
      { label: "4 weeks out", weeksBefore: 4, title: "Check eligibility", detail: "Valid F-1 stamp or other qualifying document." },
      { label: "2 weeks out", weeksBefore: 2, title: "Apply for the e-Visa", detail: "Usually issued within minutes." },
      { label: "1 week out", weeksBefore: 1, title: "Print everything", detail: "e-Visa PDF, bookings and proof of funds." },
      { label: "Departure", weeksBefore: 0, title: "Travel", detail: "Carry the e-Visa and the US visa it depends on." },
    ],
    documents: [
      {
        group: "Identity and status",
        items: [
          "Passport valid at least 6 months beyond entry",
          "Valid F-1 visa stamp, which is the document the conditional e-Visa depends on",
          "Printed e-Visa",
          "I-20 with a current travel signature, as backup evidence of your US ties",
        ],
      },
      {
        group: "Trip and money",
        items: ["Return or onward ticket", "Hotel bookings", "Proof of funds"],
      },
    ],
    links: [{ label: "Official Türkiye e-Visa portal", url: "https://www.evisa.gov.tr/en/" }],
    notes: [
      "Only evisa.gov.tr is official. Everything else is a reseller.",
      "The e-Visa is single entry and allows up to 30 days. If your itinerary leaves and re-enters Türkiye, you need a second e-Visa or a sticker visa.",
      "If you do not hold a qualifying visa, the fallback is a full sticker visa at a Turkish consulate, with biometrics and an appointment.",
      "Türkiye is not in Schengen, so time there does not count against the 90/180 allowance.",
    ],
    lastReviewed: LAST_REVIEWED,
    officialSource: "https://www.evisa.gov.tr/en/",
  },
  ...(
    [
      {
        slug: "serbia",
        name: "Serbia",
        flag: "🇷🇸",
        blurb: "Visa-free for 90 days on a valid Schengen, UK or US visa — the F-1 stamp counts.",
        stay: "up to 90 days in a 180-day period",
        condition:
          "a valid Schengen, UK or US visa, or a residence permit from one of those, within its validity",
        used: false,
        source: "https://www.mfa.gov.rs/en/citizens/travel-serbia/visa-requirements",
        extra: [
          "The Indian embassy in Belgrade publishes this advisory directly, and it names the US visa explicitly.",
          "Serbia withdrew blanket visa-free entry for Indian passports on 1 January 2023, so older guides are wrong.",
        ],
      },
      {
        slug: "albania",
        name: "Albania",
        flag: "🇦🇱",
        blurb: "Visa-free for 90 days, but the qualifying visa must be multi-entry and already used.",
        stay: "up to 90 days in a 180-day period",
        condition:
          "a valid multiple-entry US, UK or Schengen visa or residence permit that you have already used at least once in the issuing country",
        used: true,
        source: "https://punetejashtme.gov.al/en/regjimi-i-vizave-per-te-huajt/",
        extra: [
          "A brand-new F-1 stamp that you have not yet used to enter the US may not qualify. The decree wording requires prior use.",
          "You must leave within three days of the qualifying visa expiring if that comes first.",
          "If you do not qualify, Albania has an online e-Visa at e-visa.al with a stated minimum of 15 working days.",
        ],
      },
      {
        slug: "montenegro",
        name: "Montenegro",
        flag: "🇲🇪",
        blurb: "Visa-free for 30 days on a valid Schengen, US, UK or Irish visa or permit.",
        stay: "up to 30 days",
        condition: "a valid Schengen, US, UK or Irish visa or residence permit",
        used: false,
        source: "https://www.gov.me/en/diplomatic-missions/embassies-and-consulates-of-montenegro/india",
        extra: [
          "The cap is 30 days, not 90. Plan longer Balkan trips around that.",
          "Montenegro has limited representation in the US, so confirm the application channel directly with its nearest mission if you do need a visa.",
        ],
      },
      {
        slug: "bosnia-and-herzegovina",
        name: "Bosnia and Herzegovina",
        flag: "🇧🇦",
        blurb: "Visa-free for 30 days on a valid multiple-entry Schengen, EU or US visa.",
        stay: "up to 30 days at a time, within 90 days in a 180-day period",
        condition: "a valid multiple-entry Schengen, EU or US visa or residence permit",
        used: false,
        source: "https://www.bihembassy.org/",
        extra: [
          "The embassy wording names Schengen, EU and US visas. UK visas are cited by secondary sources but not by the embassy itself.",
          "Border officers may ask for proof of about EUR 75 per day of funds regardless of your visa status.",
        ],
      },
      {
        slug: "north-macedonia",
        name: "North Macedonia",
        flag: "🇲🇰",
        blurb: "Visa-free but only 15 days per entry, and only on a sticker visa in your passport.",
        stay: "up to 15 days per entry, within 90 days in a 180-day period",
        condition:
          "a valid double or multiple-entry Schengen Type C visa, or a valid UK, Canadian or US visa, physically stickered in your passport",
        used: false,
        source: "https://mfa.gov.mk/en-GB/konzularni-uslugi/informacii-za-vlez-vo-rsm",
        extra: [
          "The stay limit is 15 days per entry — much shorter than its neighbours. Check your itinerary against it.",
          "The qualifying document must be a sticker in the passport. Card-format or digital residence permits do not count, which matters if you rely on a permit rather than your F-1 stamp.",
          "Proof of onward travel is asked for at the border.",
        ],
      },
      {
        slug: "georgia",
        name: "Georgia",
        flag: "🇬🇪",
        blurb: "Very generous visa-free entry for holders of a valid US, UK or Schengen visa.",
        stay: "a long period, widely reported as up to a year — verify the current figure",
        condition:
          "a valid US, UK or Schengen visa or residence permit, or a US green card",
        used: false,
        source: "https://www.geoconsul.gov.ge/en/visaInformation",
        extra: [
          "The commonly quoted allowance is up to 365 days, but that figure comes from visa agencies rather than the government text. Confirm on geoconsul.gov.ge before planning a long stay.",
          "Even the Georgian e-Visa route requires Indian passport holders to hold a qualifying Schengen or OECD-country visa, so your F-1 stamp is doing the work either way.",
          "The e-Visa at evisa.gov.ge costs about USD 20 standard or USD 50 urgent if you need it.",
        ],
      },
    ] as const
  ).map<Country>((c) => ({
    slug: c.slug,
    name: c.name,
    flag: c.flag,
    bloc: "non-schengen",
    need: "visa-waiver-possible",
    blurb: c.blurb,
    waiver: `Visa-free ${c.stay} when you hold ${c.condition}`,
    visaType: "Visa-free entry on a qualifying visa, otherwise a national short-stay visa",
    fee: "No fee on the waiver route",
    processingTime: "Immediate at the border when the waiver applies",
    appointmentWait: "None on the waiver route",
    applyWindow: "No advance application needed on the waiver route",
    biometrics: "Not required on the waiver route",
    steps: [
      {
        title: "Re-check the waiver wording",
        when: "6 weeks before travel",
        detail: `${c.name} publishes its rules on the foreign ministry site and changes them from time to time. The current condition is ${c.condition}. Read the official page again a few weeks before you fly.`,
      },
      {
        title: "Plan the trip around the stay limit",
        when: "4 weeks before travel",
        detail: `The waiver allows ${c.stay}. Staying longer needs a national visa or permit, and overstaying can affect future entries across the region.`,
      },
      {
        title: c.used
          ? "Make sure the qualifying visa has actually been used"
          : "Check the qualifying visa is valid for the whole trip",
        when: "4 weeks before travel",
        detail: c.used
          ? "The rule requires the Schengen, UK or US visa to be multiple-entry and previously used to enter the issuing country. An unused stamp may not be accepted."
          : "The waiver lasts only as long as the visa it rests on. If your F-1 stamp expires mid-trip, the waiver lapses with it.",
      },
      {
        title: "Carry the qualifying visa at the border",
        when: "On the day",
        detail:
          "Officers check the visa the waiver depends on in the physical passport, plus your onward ticket, bookings and proof of funds.",
      },
      {
        title: "Apply for a national visa only if you do not qualify",
        when: "8 weeks before travel if needed",
        detail: `Apply to the ${c.name} mission or online portal covering the US. Allow several weeks, as US-based channels for these countries are thin.`,
      },
    ],
    timeline: [
      { label: "6 weeks out", weeksBefore: 6, title: "Re-check the waiver wording", detail: "Rules for these countries change with little notice." },
      { label: "4 weeks out", weeksBefore: 4, title: "Book travel", detail: `Keep the visit inside ${c.stay}.` },
      { label: "2 weeks out", weeksBefore: 2, title: "Check your documents", detail: "Qualifying visa valid, I-20 signature current, insurance bought." },
      { label: "Departure", weeksBefore: 0, title: "Travel", detail: "Carry the qualifying visa and an onward ticket." },
    ],
    documents: [
      {
        group: "Identity and status",
        items: [
          "Passport valid at least 3 to 6 months beyond departure",
          "The qualifying visa the waiver depends on, in the physical passport",
          "I-20 with a travel signature valid on your date of re-entry to the US",
          "Most recent I-94",
        ],
      },
      {
        group: "Trip and money",
        items: [
          "Return or onward ticket",
          "Accommodation bookings for the stay",
          "Proof of funds",
          "Travel medical insurance",
        ],
      },
    ],
    links: [{ label: `${c.name} official visa information`, url: c.source }],
    notes: [
      "This is a waiver, not a right. A border officer can still refuse entry if the conditions are not clearly met.",
      `${c.name} is outside the Schengen area, so days spent there do not count against your Schengen 90/180 allowance.`,
      "Whether a student visa counts as a valid US visa is not spelled out country by country. The texts say a valid US visa without excluding categories, but if the trip matters, email the consulate and keep the reply.",
      ...c.extra,
    ],
    lastReviewed: LAST_REVIEWED,
    officialSource: c.source,
  })),
  {
    slug: "moldova",
    name: "Moldova",
    flag: "🇲🇩",
    bloc: "non-schengen",
    need: "visa-required",
    blurb: "No US-visa waiver here. A Schengen visa only replaces the invitation letter.",
    visaType: "Short stay Type C visa (tourism)",
    fee: "About EUR 70 for a Type C tourism visa; confirm the US fee schedule",
    processingTime: "Allow several weeks; no published US service standard",
    appointmentWait: "Varies; the US channel must be confirmed with the embassy in Washington DC",
    applyWindow: "Up to 3 months before travel",
    biometrics: "Depends on the channel; confirm with the embassy",
    steps: [
      {
        title: "Accept that you need a visa",
        when: "10 weeks before travel",
        detail:
          "Indian passport holders are not on Moldova's visa-free list, and unlike Serbia or Georgia there is no waiver based on holding a US visa. Plan for a full application.",
      },
      {
        title: "Use your Schengen visa to skip the invitation letter",
        when: "10 weeks before travel",
        detail:
          "Moldova accepts a valid EU or Schengen visa or residence permit in place of an invitation from its migration authority, which removes the hardest document in the pack.",
      },
      {
        title: "Apply through the e-Visa portal or the embassy",
        when: "8 weeks before travel",
        detail:
          "Start at evisa.gov.md and confirm with the Moldovan embassy in Washington DC which channel applies to US residents, since much of Moldova's published guidance is written for applicants in India.",
      },
      {
        title: "Assemble the supporting pack",
        when: "6 weeks before travel",
        detail:
          "Passport, photo, the qualifying Schengen document, bookings, funds and insurance, plus your F-1 status evidence.",
      },
    ],
    timeline: [
      { label: "10 weeks out", weeksBefore: 10, title: "Confirm the channel", detail: "Email the embassy in Washington DC before you start." },
      { label: "8 weeks out", weeksBefore: 8, title: "Apply", detail: "e-Visa portal or embassy, with the Schengen visa attached." },
      { label: "4 weeks out", weeksBefore: 4, title: "Decision", detail: "Allow several weeks; there is no published guarantee." },
      { label: "Departure", weeksBefore: 0, title: "Travel", detail: "Carry the visa, bookings and your signed I-20." },
    ],
    documents: [
      {
        group: "Identity and status",
        items: [
          "Passport valid well beyond the trip",
          "Passport photograph",
          "Valid EU or Schengen visa or residence permit, used in place of an invitation letter",
          "F-1 stamp, I-94 and I-20 with a current travel signature",
        ],
      },
      {
        group: "Trip and money",
        items: ["Flight and accommodation bookings", "Proof of funds", "Travel medical insurance"],
      },
    ],
    links: [
      { label: "Moldova e-Visa portal", url: "https://www.evisa.gov.md/" },
      {
        label: "Short stay Type C requirements",
        url: "https://india.mfa.gov.md/en/content/short-stay-visa-requirements-and-supporting-documents-type-c",
      },
    ],
    notes: [
      "Moldova is the exception among its neighbours: a US visa does not open a visa-free route here.",
      "Most of Moldova's English guidance is aimed at applicants in India. Confirm the US channel in writing before you post a passport anywhere.",
      "Moldova is outside Schengen, so days there do not count against the 90/180 allowance.",
    ],
    lastReviewed: LAST_REVIEWED,
    officialSource: "https://www.evisa.gov.md/",
  },
];

export const countries: Country[] = [...schengen, ...smallerSchengen, ...nonSchengen].sort((a, b) =>
  a.name.localeCompare(b.name),
);

export const countryBySlug = (slug: string): Country | undefined =>
  countries.find((c) => c.slug === slug);

export const schengenCount = countries.filter((c) => c.bloc === "schengen").length;
export const nonSchengenCount = countries.filter((c) => c.bloc === "non-schengen").length;
