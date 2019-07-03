module Types
  class YarnType < Types::BaseObject
    field :id, ID, null: false
    field :maker, String, null: true
    field :name, String, null: true
    field :weight, String, null: true
    field :colorway, String, null: true

    def yarns_count
      object.yarns.size
    end
  end
end
