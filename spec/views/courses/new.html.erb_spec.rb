require 'rails_helper'

RSpec.describe "courses/new", type: :view do
  before(:each) do
    assign(:course, Course.new(
      :title => "MyString",
      :slug => "MyString",
      :author_id => 1,
      :category => "MyString"
    ))
  end

  it "renders new course form" do
    render

    assert_select "form[action=?][method=?]", courses_path, "post" do

      assert_select "input[name=?]", "course[title]"

      assert_select "input[name=?]", "course[slug]"

      assert_select "input[name=?]", "course[author_id]"

      assert_select "input[name=?]", "course[category]"
    end
  end
end
