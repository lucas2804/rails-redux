require 'rails_helper'

RSpec.describe "courses/index", type: :view do
  before(:each) do
    assign(:courses, [
      Course.create!(
        :title => "Title",
        :slug => "Slug",
        :author_id => 2,
        :category => "Category"
      ),
      Course.create!(
        :title => "Title",
        :slug => "Slug",
        :author_id => 2,
        :category => "Category"
      )
    ])
  end

  it "renders a list of courses" do
    render
    assert_select "tr>td", :text => "Title".to_s, :count => 2
    assert_select "tr>td", :text => "Slug".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => "Category".to_s, :count => 2
  end
end
