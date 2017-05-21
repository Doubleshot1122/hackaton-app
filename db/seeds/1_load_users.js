exports.seed = (knex) => {
  return knex('users').truncate()
    .then(() => {
      return knex('users').insert([
        {
          name: 'ICE Director',
          image_url: 'assets/ice-director.png',
          region: "domestic",
          keywords: {keywords: ['gang', 'construction', 'human traffic']}
        },
        {
          name: 'ASD-NCB',
          image_url: 'assets/asd-ncb.png',
          region: "international",
          keywords: {keywords: ['sanctions', 'weapon test', 'non-proliferation']}
        },
        {
          name: 'North Korea Policy Group',
          image_url: 'assets/korea.png',
          region: "international",
          keywords: {keywords: ['korea']}
        },
        {
          name: 'Director Maritime Security Operations',
          image_url: 'assets/maritime.png',
          region: "pacific rim",
          keywords: {keywords: ['port safe', 'fuel prices', 'weather']}
        },
        {
          name: 'Director Wildfire Division',
          image_url: 'assets/wildfire.png',
          region: "washington",
          keywords: {keywords: ['weather', 'fire', 'evacuation']}
        },
        {
          name: 'Mission Director SYRIA',
          image_url: 'assets/md-syria.png',
          region: "international",
          keywords: {keywords: ['refugee', 'war', 'path', 'casulties', 'government', 'rebels', 'insurgency', 'insurgents']}
        },
        {
          name: 'CENTCOM J2',
          image_url: './assets/centcom.png',
          region: "international",
          keywords: {keywords: ['ISIS']}
        }
      ])
    })
}
