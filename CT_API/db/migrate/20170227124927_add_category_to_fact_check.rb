class AddCategoryToFactCheck < ActiveRecord::Migration[5.0]
  def change
    add_column :fact_checks, :category, :string
  end
end
