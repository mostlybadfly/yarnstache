class Mutations::CreateYarn < Mutations::BaseMutation
  argument :maker, String, required: true
  argument :name, String, required: true
  argument :weight, String, required: true
  argument :colorway, String, required: false
  argument :notes, String, required: false

  field :yarn, Types::YarnType, null: false
  field :errors, [String], null: false

  def resolve(maker:, name:, weight:, colorway:, notes:)
    yarn = Yarn.new(maker: maker, name: name, weight: weight, colorway: colorway, notes: notes)
    if yarn.save
      {
        yarn: yarn,
        errors: [],
      }
    else
      {
        yarn: nil,
        errors: yarn.errors.full_messages
      }
    end
  end
end
