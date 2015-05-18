class TodoItem < ActiveRecord::Base
  validates :description, presence: true

end
