// All website content lives here. Edit this file to personalise the site.
// Event times are ISO strings with an explicit UTC offset so countdowns and
// calendar links are correct for guests in any time zone.

export const config = {
  timeZone: 'Asia/Kolkata',

  couple: {
    shortNames: ['Pranoy', 'Susan'],
    bride: {
      name: 'Susan Sara Joby',
      relation: 'Daughter of',
      parents: 'Mr. Joby N Mathew & Mrs. Vidhu Joby',
      house: 'Kallarackal House, Kottayam',
    },
    groom: {
      name: 'Pranoy Paul Panakkal',
      relation: 'Son of',
      parents: 'Mr. Saju P Panakkal & Mrs. Sheela George',
      house: 'Puthenpurackal House, Thrissur',
    },
  },

  hero: {
    eyebrow: 'By the grace of God',
    subtitle: 'together with our families',
    // Put your photo at public/images/couple.jpg (portrait works best).
    photo: `${import.meta.env.BASE_URL}images/couple.jpg`,
    verse: {
      text: 'Therefore what God has joined together, let no one separate.',
      reference: 'Mark 10:9',
    },
    place: 'Kottayam, Kerala',
  },

  invitation: {
    intro:
      'With hearts full of gratitude to God Almighty and the blessings of our families, we joyfully invite you to witness the Holy Matrimony of',
    closing: 'Your presence and prayers would mean the world to us. May God bless you abundantly.',
  },

  events: [
    {
      id: 'engagement',
      name: 'The Engagement',
      start: '2027-01-10T18:30:00+05:30',
      durationHours: 4,
      onwards: true,
      venue: {
        name: 'Grand Hall Auditorium',
        shortLocation: 'Kottayam',
        address: ['Grand Hall Road, Nagampadam', 'Kottayam, Kerala 686001'],
        lat: 9.5916,
        lng: 76.5222,
      },
    },
    {
      id: 'madhuramvepp',
      name: 'Madhuramvepp',
      start: '2027-01-14T19:00:00+05:30',
      durationHours: 4,
      onwards: true,
      venue: {
        name: 'Lakeside Resort',
        shortLocation: 'Kumarakom',
        address: ['Lake Road, Kumarakom', 'Kottayam, Kerala 686563'],
        lat: 9.6175,
        lng: 76.4301,
      },
    },
    {
      id: 'wedding',
      name: 'Holy Matrimony',
      main: true,
      start: '2027-01-17T14:00:00+05:30',
      durationHours: 4,
      venue: {
        name: "St Mary's Church",
        shortLocation: 'Kottayam',
        address: ["St Mary's Church Road", 'Kottayam, Kerala 686001'],
        lat: 9.5885,
        lng: 76.5215,
      },
    },
    {
      id: 'reception',
      name: 'The Reception',
      start: '2027-01-17T18:00:00+05:30',
      durationHours: 4,
      onwards: true,
      venue: {
        name: 'Parish Hall',
        shortLocation: 'Kottayam',
        address: ["St Mary's Parish Hall", 'Kottayam, Kerala 686001'],
        lat: 9.5889,
        lng: 76.5219,
      },
    },
  ],

  blessing: {
    lines: [
      'Love is patient, love is kind.',
      'It does not envy, it does not boast,',
      'it is not proud.',
      'It always protects, always trusts,',
      'always hopes, always perseveres.',
    ],
    reference: '1 Corinthians 13:4, 7',
    cord: {
      text: 'A cord of three strands is not quickly broken.',
      reference: 'Ecclesiastes 4:12',
      tagline: 'Two hearts, one faith — bound together in Christ.',
    },
  },

  wishes: {
    title: 'Bless the Couple',
    subtitle: 'Leave a prayer or a few kind words for them to treasure.',
  },

  contact: {
    name: 'Mathew',
    phone: '+91 90000 00000',
  },

  credits: {
    glory: 'To God be the glory',
    from: 'With love from both families',
    music: 'Canon in D — Johann Pachelbel',
  },

  // Put an mp3 at public/music/background.mp3, or set to null to hide the player.
  music: `${import.meta.env.BASE_URL}music/background.mp3`,
}
