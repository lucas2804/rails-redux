class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string :title
      t.string :slug
      t.integer :author_id
      t.string :category

      t.timestamps
    end
  end
end
