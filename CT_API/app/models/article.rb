class Article < ApplicationRecord
  belongs_to :user
  has_many :fact_checks
end
