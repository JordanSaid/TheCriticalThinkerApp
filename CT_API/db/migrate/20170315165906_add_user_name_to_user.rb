class AddUserNameToUser < ActiveRecord::Migration[5.0]
  def change
  	add_column :user, :username, :string
  end
end
