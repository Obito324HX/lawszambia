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
  // Demo photos are LAWS's own photos hosted on their current Wix site.
  // Before launch, download them into /assets/animals/ and point to the local files.
  var wix = function (path) { return "https://static.wixstatic.com/media/" + path; };

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
        id: "traiger",
        name: "Traiger",
        species: "dog",
        sex: "Female",
        age: "About 5 years",
        ageGroup: "adult",
        breed: "German Shepherd",
        admitted: "2025-01-15",
        status: "available",
        hero: true,
        temperament: ["Friendly", "Energetic", "Alert"],
        short: "A friendly, energetic German Shepherd who loves fetch and long walks.",
        photos: [wix("a610ee_102f1b06340c49b88f446f7620bb6d56~mv2.jpg/v1/fill/w_980,h_870,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20250228-WA0001%20(1)_edited.jpg")],
        story: [
          "Traiger arrived at the shelter on 15 January 2025 with her sister, Russy. Their previous owner had to give them up because of home renovations, so Traiger is now looking for a new family.",
          "She is full of life: friendly, alert and always ready for fetch, a long walk or simply some company. She is intelligent and loyal, and would suit an active household where she gets plenty of exercise and affection.",
          "Traiger and Russy are sisters. Ask the team about adopting them together or separately."
        ],
        rescueTitle: "Surrendered because of home renovations",
        rescue: "Traiger and her sister Russy were handed over to LAWS on 15 January 2025 after their owner could no longer keep them while the home was being renovated."
      },
      {
        id: "russy",
        name: "Russy",
        species: "dog",
        sex: "Female",
        age: "About 4 years",
        ageGroup: "adult",
        breed: "German Shepherd",
        admitted: "2025-01-15",
        status: "available",
        temperament: ["Friendly", "Playful", "Energetic"],
        short: "A playful German Shepherd, always ready for an adventure.",
        photos: [wix("a610ee_e2715e6dc025455aac484346f1f2ab37~mv2.jpg/v1/fill/w_936,h_882,al_c,q_85,enc_avif,quality_auto/randy_edited.jpg")],
        story: [
          "Russy came to the shelter on 15 January 2025 with her older sister, Traiger. Their owner could not keep them during home renovations, and Russy is now waiting for a family of her own.",
          "She has endless energy and loves company. Walks, games of fetch and time with her favourite people all make her happy. She is smart and affectionate, and would do well with an active family.",
          "Russy and Traiger are sisters. Ask the team about adopting them together or separately."
        ]
      },
      {
        id: "linda",
        name: "Linda",
        species: "dog",
        sex: "Female",
        age: "Adult",
        ageGroup: "adult",
        breed: "Mixed breed",
        admitted: "2025-01-30",
        status: "available",
        temperament: ["Friendly", "Playful", "Good with other dogs"],
        short: "A gentle, trusting dog who is great with other dogs.",
        photos: [wix("a610ee_79af3d35104743babf4ea576d06f9080~mv2.jpg/v1/fill/w_980,h_724,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20250228-WA0004_edited.jpg")],
        spotlight: true,
        story: [
          "Linda reached LAWS on 30 January 2025. A group of children had been chasing her and throwing stones when a woman stepped in, opened her gate and gave Linda somewhere safe to go.",
          "After all that, Linda is still affectionate and trusting. She is playful with people and especially happy around other dogs, so she would be a good fit for a home that already has one.",
          "She is hoping for a family who will keep her safe and never let her feel afraid again."
        ],
        rescueTitle: "Chased and stoned, then taken in by a stranger",
        rescue: "A group of children were chasing Linda and throwing stones at her when a woman opened her gate and offered her shelter. LAWS took Linda in on 30 January 2025."
      },
      {
        id: "gazali",
        name: "Gazali",
        species: "dog",
        sex: "Female",
        age: "Adult",
        ageGroup: "adult",
        breed: "Mixed breed",
        admitted: "2025-01-30",
        status: "available",
        temperament: ["Friendly", "Playful", "Affectionate"],
        short: "A resilient, affectionate dog who loves belly rubs and company.",
        photos: [wix("a610ee_0b25903dbe4b490f99f7bdd2dd4aa9f3~mv2.jpg/v1/fill/w_980,h_1037,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20250228-WA0006_edited.jpg")],
        story: [
          "Gazali arrived at the shelter on 30 January 2025. She was rescued from a cruelty case, where she had been neglected and mistreated until she was confiscated.",
          "Her spirit is unbroken. She is friendly, playful and always up for affection, whether that means a game, a belly rub or sitting close to her favourite people. She trusts easily.",
          "Gazali is ready to start again with a family who will cherish and protect her."
        ],
        rescueTitle: "Rescued from a cruelty case",
        rescue: "Gazali had been neglected and mistreated before she was confiscated and placed in the care of LAWS on 30 January 2025."
      },
      {
        id: "sample-cat",
        name: "Sample cat",
        species: "cat",
        sex: "Female",
        age: "About 1 year",
        ageGroup: "young",
        breed: "Domestic shorthair",
        admitted: "2025-02-01",
        status: "available",
        demo: true,
        temperament: ["Curious", "Affectionate"],
        short: "Example listing. Replace it with a real cat from the shelter.",
        photos: [],
        story: [
          "This is a sample listing so you can see how cats appear on the site. Replace it with a real cat, or delete it, by editing js/data.js.",
          "Every cat gets the same profile as the dogs: a photo gallery, details and a full story."
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
    L.covers = { home: pic("linda"), about: pic("traiger"), adopt: pic("russy") };
  })();
})();
