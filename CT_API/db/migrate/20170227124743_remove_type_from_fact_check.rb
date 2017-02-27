class RemoveTypeFromFactCheck < ActiveRecord::Migration[5.0]
  def change
    remove_column :fact_checks, :type
  end
end
