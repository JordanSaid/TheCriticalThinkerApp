class RemoveArticleIdFromFactChecks < ActiveRecord::Migration[5.0]
  def change
    remove_column :fact_checks, :article_id
  end
end
