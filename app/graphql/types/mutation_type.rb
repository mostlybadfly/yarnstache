module Types
  class MutationType < Types::BaseObject
    field :create_yarn, mutation: Mutations::CreateYarn
  end
end
