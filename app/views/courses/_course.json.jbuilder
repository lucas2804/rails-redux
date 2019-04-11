json.extract! course, :id, :title, :slug, :author_id, :category, :created_at, :updated_at
json.url course_url(course, format: :json)
