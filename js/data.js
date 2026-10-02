/*
  LAWS site content. Edit this file to change what appears on the site.

  To add an animal (dog or cat, set `species`): copy one object in `animals`, give it a new unique `id`,
  and fill in the fields. The adoption grid, profile page, rescue stories and
  homepage all update automatically. Photos go in the `photos` array
  (first photo is the cover). Use files in /assets/animals/ or full URLs.

  Entries marked `demo: true` are sample placeholders. Remove that flag
  (and replace the text) once LAWS supplies real content.
*/
(function () {
  window.LAWS = {
    org: {
      name: "Lusaka Animal Welfare Society",
      short: "LAWS",
      email: "lusakaanimalwelfaresociety@gmail.com",
      phone: "+260 96 6242776",
      whatsapp: "260966779896",
      whatsappDisplay: "+260 96 677 9896",
      address: "Council Yard, Sadzu Rd, behind Levy Junction Mall, Lusaka, Zambia",
      instagram: "https://www.instagram.com/laws_zambia/",
      facebook: "https://www.facebook.com/LAWSzambia/",
      gofundme: "https://www.gofundme.com/f/lusaka-animal-welfare-society-laws"
    },

    donate: {
      bank: [
        ["Bank", "Stanbic Bank Zambia Limited"],
        ["Account name", "Lusaka Animal Welfare Society"],
        ["Account number", "9130003232585"],
        ["Branch", "East Park Mall"],
        ["Branch code", "04-00-10"],
        ["Swift code", "SBICZMLX"]
      ],
      mobile: [
        ["MTN", "+260 76 6568771"],
        ["Airtel", "+260 770530001"]
      ]
    },

    // Impact figures. Leave empty to hide the section; add real numbers from LAWS.
    // Example: { value: "120", label: "animals rehomed this year" }
    stats: [],

    animals: [
  {
    "id": "ndevu",
    "name": "Ndevu",
    "species": "dog",
    "sex": "Male",
    "age": "About 2 years",
    "ageGroup": "adult",
    "breed": "Mixed breed",
    "admitted": "2026-06-10",
    "status": "available",
    "temperament": [
      "Friendly"
    ],
    "short": "A friendly mixed-breed who joined LAWS in June 2026.",
    "photos": [
      "assets/animals/ndevu-1.jpg"
    ],
    "story": [
      "Ndevu joined LAWS on 10 June 2026. He is a friendly mixed-breed, about 2 years.",
      "The team will add more of his story as it is written up. The best way to get to know Ndevu is to meet him: send an enquiry below or visit the shelter."
    ],
    "hero": true
  },
  {
    "id": "dhalia",
    "name": "Dhalia",
    "species": "cat",
    "sex": "Female",
    "age": "About 12 months",
    "ageGroup": "young",
    "breed": "Domestic shorthair",
    "admitted": "2026-05-05",
    "status": "available",
    "temperament": [
      "Friendly",
      "Shy"
    ],
    "short": "A gentle, shy cat whose brother has already found a home.",
    "photos": [
      "assets/animals/dhalia-1.jpg",
      "assets/animals/dhalia-2.jpg"
    ],
    "story": [
      "Dhalia is a gentle and shy cat who came to the shelter with her brother, Dante. Her brother was adopted, and now it is her turn to find a home.",
      "She joined LAWS on 5 May 2026 and is about 12 months old. Staff describe her as friendly, and a little shy at first, so she will do best with a patient family who lets her settle in at her own pace."
    ],
    "spotlight": true,
    "rescueTitle": "Her brother found a home. Now it's her turn.",
    "rescue": "Dhalia came to the shelter with her brother, Dante. Dante has been adopted, and Dhalia is still waiting for her family."
  },
  {
    "id": "lorenzo",
    "name": "Lorenzo",
    "species": "dog",
    "sex": "Male",
    "age": "About 2 years",
    "ageGroup": "adult",
    "breed": "Mixed breed",
    "admitted": "2026-08-19",
    "status": "available",
    "temperament": [
      "Friendly"
    ],
    "short": "A friendly mixed-breed who joined LAWS in August 2026.",
    "photos": [
      "assets/animals/lorenzo-1.jpg"
    ],
    "story": [
      "Lorenzo joined LAWS on 19 August 2026. He is a friendly mixed-breed, about 2 years.",
      "The team will add more of his story as it is written up. The best way to get to know Lorenzo is to meet him: send an enquiry below or visit the shelter."
    ]
  },
  {
    "id": "mand",
    "name": "Mand",
    "species": "cat",
    "sex": "Male",
    "age": "Young (age to be confirmed)",
    "ageGroup": "young",
    "breed": "Domestic shorthair",
    "admitted": "2025-07-24",
    "status": "available",
    "temperament": [
      "Friendly",
      "Active",
      "Curious"
    ],
    "short": "Active, alert and curious. At the shelter since he was a kitten.",
    "photos": [
      "assets/animals/mand-1.jpg",
      "assets/animals/mand-2.jpg"
    ],
    "story": [
      "Mand has been at the shelter since he was a kitten and is still waiting for a family to call his own. He is an active, alert and curious cat who loves to explore and would thrive in a home with room to roam.",
      "He joined LAWS on 24 July 2025. Staff describe him as friendly."
    ],
    "rescueTitle": "At the shelter since he was a kitten",
    "rescue": "Mand has been at LAWS since 24 July 2025, when he was still a kitten, and is still waiting for a family to call his own."
  },
  {
    "id": "jubie",
    "name": "Jubie",
    "species": "dog",
    "sex": "Female",
    "age": "About 2 years",
    "ageGroup": "adult",
    "breed": "Mixed breed",
    "admitted": "2026-08-05",
    "status": "available",
    "temperament": [
      "Friendly"
    ],
    "short": "A friendly mixed-breed who joined LAWS in August 2026.",
    "photos": [
      "assets/animals/jubie-1.jpg"
    ],
    "story": [
      "Jubie joined LAWS on 5 August 2026. She is a friendly mixed-breed, about 2 years.",
      "The team will add more of her story as it is written up. The best way to get to know Jubie is to meet her: send an enquiry below or visit the shelter."
    ]
  },
  {
    "id": "upe",
    "name": "Upe",
    "species": "cat",
    "sex": "Female",
    "age": "About 2 years",
    "ageGroup": "adult",
    "breed": "Domestic shorthair",
    "admitted": "2026-01-17",
    "status": "available",
    "temperament": [
      "Friendly",
      "Affectionate",
      "Good with other cats"
    ],
    "short": "A sweet, affectionate cat who has waited close to a year for a family.",
    "photos": [
      "assets/animals/upe-1.jpg",
      "assets/animals/upe-2.jpg"
    ],
    "story": [
      "Upe has been waiting for a forever home for close to a year. She is a sweet and affectionate cat who enjoys human interaction, gets along well with other cats, and is patiently hoping for someone to finally choose her.",
      "She joined LAWS on 17 January 2026 and is about 2 years old."
    ],
    "rescueTitle": "Waiting for a forever home for close to a year",
    "rescue": "Upe joined LAWS on 17 January 2026 and has been waiting for a family ever since. She enjoys company, gets along with other cats, and is patiently hoping someone will choose her."
  },
  {
    "id": "kumbi",
    "name": "Kumbi",
    "species": "dog",
    "sex": "Female",
    "age": "About 2 years",
    "ageGroup": "adult",
    "breed": "Mixed breed",
    "admitted": "2026-05-19",
    "status": "available",
    "temperament": [
      "Friendly"
    ],
    "short": "A friendly mixed-breed who joined LAWS in May 2026.",
    "photos": [
      "assets/animals/kumbi-1.jpg"
    ],
    "story": [
      "Kumbi joined LAWS on 19 May 2026. She is a friendly mixed-breed, about 2 years.",
      "The team will add more of her story as it is written up. The best way to get to know Kumbi is to meet her: send an enquiry below or visit the shelter."
    ]
  },
  {
    "id": "lumumba",
    "name": "Lumumba",
    "species": "cat",
    "sex": "Male",
    "age": "About 2 years",
    "ageGroup": "adult",
    "breed": "Domestic shorthair",
    "admitted": "2025-01-28",
    "status": "available",
    "temperament": [
      "Feral",
      "Harmless",
      "Independent"
    ],
    "short": "A feral but harmless cat looking for a farm or spacious property.",
    "photos": [
      "assets/animals/lumumba-2.jpg",
      "assets/animals/lumumba-3.jpg"
    ],
    "story": [
      "Lumumba is a feral but harmless cat looking for a safe place to call home. He would thrive on a farm or spacious property where he can live freely while being provided with food, water and shelter.",
      "If you are looking for a natural rodent controller and can offer him a safe environment, Lumumba could be the perfect fit. He joined LAWS on 28 January 2025 and is about 2 years old."
    ],
    "rescueTitle": "A feral cat who needs room to roam",
    "rescue": "Lumumba is a feral but harmless cat. He is not suited to a typical home, but would thrive on a farm or spacious property with food, water and shelter provided."
  },
  {
    "id": "lila",
    "name": "Lila",
    "species": "dog",
    "sex": "Male",
    "age": "About 2 years",
    "ageGroup": "adult",
    "breed": "Mixed breed",
    "admitted": "2026-07-15",
    "status": "available",
    "temperament": [
      "Friendly"
    ],
    "short": "A friendly mixed-breed who joined LAWS in July 2026.",
    "photos": [
      "assets/animals/lila-1.jpg"
    ],
    "story": [
      "Lila joined LAWS on 15 July 2026. He is a friendly mixed-breed, about 2 years.",
      "The team will add more of his story as it is written up. The best way to get to know Lila is to meet him: send an enquiry below or visit the shelter."
    ]
  },
  {
    "id": "marley",
    "name": "Marley",
    "species": "dog",
    "sex": "Male",
    "age": "About 1 year",
    "ageGroup": "young",
    "breed": "Mixed breed",
    "admitted": "2026-09-04",
    "status": "available",
    "temperament": [
      "Friendly"
    ],
    "short": "A friendly mixed-breed who joined LAWS in September 2026.",
    "photos": [
      "assets/animals/marley-1.jpg"
    ],
    "story": [
      "Marley joined LAWS on 4 September 2026. He is a friendly mixed-breed, about 1 year.",
      "The team will add more of his story as it is written up. The best way to get to know Marley is to meet him: send an enquiry below or visit the shelter."
    ]
  },
  {
    "id": "wood",
    "name": "Wood",
    "species": "dog",
    "sex": "Female",
    "age": "About 1 year",
    "ageGroup": "young",
    "breed": "Mixed breed",
    "admitted": "2026-08-09",
    "status": "available",
    "temperament": [
      "Friendly"
    ],
    "short": "A friendly mixed-breed who joined LAWS in August 2026.",
    "photos": [
      "assets/animals/wood-1.jpg"
    ],
    "story": [
      "Wood joined LAWS on 9 August 2026. She is a friendly mixed-breed, about 1 year.",
      "The team will add more of her story as it is written up. The best way to get to know Wood is to meet her: send an enquiry below or visit the shelter."
    ]
  },
  {
    "id": "tawanda",
    "name": "Tawanda",
    "species": "dog",
    "sex": "Male",
    "age": "About 2 years",
    "ageGroup": "adult",
    "breed": "Mixed breed",
    "admitted": "2026-08-17",
    "status": "available",
    "temperament": [
      "Friendly"
    ],
    "short": "A friendly mixed-breed who joined LAWS in August 2026.",
    "photos": [
      "assets/animals/tawanda-1.jpg",
      "assets/animals/tawanda-2.jpg"
    ],
    "story": [
      "Tawanda joined LAWS on 17 August 2026. He is a friendly mixed-breed, about 2 years.",
      "The team will add more of his story as it is written up. The best way to get to know Tawanda is to meet him: send an enquiry below or visit the shelter."
    ]
  }
],

    // Sample content: replace with real stories from LAWS.
    successStories: [
      {
        name: "Sample story 1",
        text: "Add a short story about an animal that found a home: where they came from, how they settled in, and how they are doing now.",
        quote: "A one-line quote from the new owner works well here.",
        photo: "assets/placeholder.svg",
        demo: true
      },
      {
        name: "Sample story 2",
        text: "Each success story gets its own card. Photos of the animal in their new home help most.",
        quote: "",
        photo: "assets/placeholder.svg",
        demo: true
      }
    ],

    beforeAfter: [
      {
        name: "Sample rescue",
        caption: "Replace with a real before and after photo pair from a LAWS rescue.",
        before: "assets/before-placeholder.svg",
        after: "assets/after-placeholder.svg",
        demo: true
      }
    ],

    // Executive board. Replace the sample entries with real names, positions and photos.
    board: [
      { name: "Name to be added", role: "Position", photo: "assets/placeholder.svg", demo: true },
      { name: "Name to be added", role: "Position", photo: "assets/placeholder.svg", demo: true },
      { name: "Name to be added", role: "Position", photo: "assets/placeholder.svg", demo: true },
      { name: "Name to be added", role: "Position", photo: "assets/placeholder.svg", demo: true }
    ],

    team: [
      { name: "Name to be added", role: "Role", photo: "assets/placeholder.svg", demo: true },
      { name: "Name to be added", role: "Role", photo: "assets/placeholder.svg", demo: true },
      { name: "Name to be added", role: "Role", photo: "assets/placeholder.svg", demo: true }
    ]

    // Cover photos shown behind the page headers. Replace with wide, high-resolution LAWS photos.
    // Leave a page out to keep the plain header.
  };
  (function () {
    var L = window.LAWS;
    function pic(id) { var a = L.animals.filter(function (x) { return x.id === id; })[0]; return a && a.photos[0]; }
    var P = function (id, i) { var a = L.animals.filter(function (x) { return x.id === id; })[0]; return a && a.photos[i || 0]; };
    // Each page cover is a strip of photos (portrait photos look best in threes).
    L.covers = {
      about: [P("dhalia"), P("ndevu"), P("mand")],
      adopt: [P("lila"), P("jubie"), P("upe")],
      rescue: [P("lumumba"), P("kumbi"), P("dhalia", 1)],
      rehabilitate: ["assets/shelter/treatment-1.jpg", "assets/shelter/kitten-ginger.jpg", "assets/shelter/kittens-litter.jpg"]
    };
    L.shelter = [
      { img: "assets/shelter/kittens-litter.jpg", cap: "A litter of kittens settling in" },
      { img: "assets/shelter/treatment-1.jpg", cap: "Treatment time" },
      { img: "assets/shelter/kitten-ginger.jpg", cap: "Small, and already curious" },
      { img: "assets/shelter/cat-grey.jpg", cap: "Garden sunbathing" },
      { img: "assets/shelter/kitten-black.jpg", cap: "First days outside" },
      { img: "assets/shelter/cat-black.jpg", cap: "Making herself at home" }
    ];
    L.journeyPhotos = { rescue: "assets/shelter/kittens-yard.jpg", rehabilitate: "assets/shelter/treatment-2.jpg", rehome: P("dhalia") };
  })();
})();
