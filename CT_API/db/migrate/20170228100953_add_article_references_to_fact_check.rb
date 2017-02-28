class AddArticleReferencesToFactCheck < ActiveRecord::Migration[5.0]
  def change
    add_reference :fact_checks, :article, foreign_key: true
  end
end
