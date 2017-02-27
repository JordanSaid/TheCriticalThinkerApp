class Article < ApplicationRecord
  belongs_to :user
  has_many :checks, through: :fact_checks, source: :user
end
