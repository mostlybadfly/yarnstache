module Types
  class QueryType < Types::BaseObject

    field :yarns, [Types::YarnType], null: false

    def yarns
      Yarn.all
    end

    field :yarn, Types::YarnType, null: false do
      argument :id, ID, required: true
    end

    def yarn(id:)
      Yarn.find(id)
    end
  end
end
