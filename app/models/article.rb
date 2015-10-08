class Article < ActiveRecord::Base
  validates :title,   presence: true
  validates :content, presence: true
  has_attached_file :picture, styles: { medium: "300x300>" }, default_url: "/assets/:class/:attachment/:style/missing.jpeg"
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/

  def picture_url
    picture.url(:medium)
  end
end