class Guy < ApplicationRecord
  attr_accessor :age

  def age
    Date.diff(Time.now, self.date_of_birth)[:year]
  end
end
