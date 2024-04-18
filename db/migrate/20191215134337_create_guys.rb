class CreateGuys < ActiveRecord::Migration[6.0]
  def change
    create_table :guys do |t|
      t.string :name
      t.datetime :date_of_birth

      t.timestamps
    end
  end
end
