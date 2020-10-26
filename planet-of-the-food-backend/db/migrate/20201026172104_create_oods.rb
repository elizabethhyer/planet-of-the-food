class CreateOods < ActiveRecord::Migration[6.0]
  def change
    create_table :oods do |t|
      t.string :name

      t.timestamps
    end
  end
end
