exports.seed = (knex) => {
  return knex('users').truncate()
    .then(() => {
      return knex('users').insert([
        {
          name: 'ICE Director',
          image_url: 'ice.png',
          region: "domestic",
          keywords: {keywords: ['gang', 'construction', 'human traffic']}
        },
        {
          name: 'ASD-NCB',
          image_url: 'asd-ncb.png',
          region: "international",
          keywords: {keywords: ['sanctions', 'weapon test']}
        }
      ])
    })
}
