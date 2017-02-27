class RemoveDateTimeFromFactCheck < ActiveRecord::Migration[5.0]
  def change
    remove_column :fact_checks, :posted
  end
end
