require 'open-uri'
require 'uri'
require 'yaml'

print "Enter title: "

title = gets.strip.gsub(/(^| )"/, '\1“').gsub(/"($|,| )/, '”\1').gsub(/"/, '”')

categories_text = "Choose category"
categories = YAML.load_file('_data/category.yml').map.with_index do |category, index|
  categories_text += " (#{index + 1}) #{category[0].capitalize}"
  [(index + 1).to_s, category[0]]
end.to_h
print categories_text += ': '

category = categories[gets.strip]
raise 'You need to enter the number for the category' if category.nil?

authors_text = "Choose author"
authors = YAML.load_file('_data/authors.yml').map.with_index do |author, index|
  authors_text += " (#{index + 1}) #{author[0].capitalize}"
  [(index + 1).to_s, author[0]]
end.to_h
print authors_text += ': '

author = authors[gets.strip]
raise 'You need to enter the number for the author' if author.nil?

print "Enter source (Reuters, USA TODAY, TechCrunch, Rolling Stone): "
source = gets.strip

print "Enter keywords separated by comma: "
keywords = gets.strip.split(',')

print "Enter full url to image on remote website (http://pen15.com/file.jpg): "
image = gets.strip

uri = URI(image)
image_filename = File.basename(uri.path)

URI.open(image) {|f|
  File.open("images/posts/#{image_filename}",'wb') do |file|
    file.puts f.read
  end
}

now = Time.now

filename = title.downcase.gsub(/[^a-z0-9\-_]+/, '-')

md_filename = "#{now.strftime('%Y-%m-%d')}-#{filename}.md"

File.open("_posts/#{md_filename}", 'w') do |file|

  file.write("---\n")
  file.write("layout: post\n")
  file.write("date: #{now.strftime('%Y-%m-%d %H:%M:%S %z')}\n")
  file.write("date_modified: #{now.strftime('%Y-%m-%d %H:%M:%S %z')}\n")
  file.write("title: \"" + title + "\"\n")
  file.write("categories: " + category.downcase + "\n")
  file.write("featured: yes")
  file.write("author: #{author}\n")
  file.write("source: #{source}\n")
  file.write("image: /images/posts/#{image_filename}\n")
  file.write("keywords: #{keywords}")
  file.write("\n---\n\n\n")

end

puts "--------------------------------------------------------"
puts ""
puts "FILE WRITTEN: #{md_filename}"

%x(open -a MacDown _posts/#{md_filename})
