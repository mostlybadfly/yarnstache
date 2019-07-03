weights = %w[fingering sport dk worsted bulky]

5.times do
  yarn =
    Yarn.create(
      maker: Faker::Company.name,
      name: Faker::Hipster.word,
      weight: weights.sample,
      colorway: Faker::Color.color_name,
      notes: Faker::Lorem.paragraph
    )
end
