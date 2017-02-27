class AddEmbededToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :embeded, :string
  end
end
