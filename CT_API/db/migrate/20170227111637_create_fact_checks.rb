class CreateFactChecks < ActiveRecord::Migration[5.0]
  def change
    create_table :fact_checks do |t|
      t.string :type
      t.text :claim
      t.text :evidence
      t.text :sources
      t.references :user, foreign_key: true
      t.references :article, foreign_key: true
      t.datetime :posted

      t.timestamps
    end
  end
end
