class CreateYarns < ActiveRecord::Migration[5.2]
  def change
    create_table :yarns do |t|
      t.string :maker
      t.string :name
      t.string :weight
      t.string :colorway
      t.text :notes

      t.timestamps
    end
  end
end
