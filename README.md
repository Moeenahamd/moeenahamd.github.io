# Directions
### Posts
- (Optional) To set the featured article, add `featured: ` variable in post's front matter. (Ex. `featured: yes`)
- This will pull the **most recent** post with *featured* variable

## Recommended image size
Article cover: 
- W 760 x H 400 | Recommended resolution: High / 150 - 300 

Article body image
` <div class="img-thumbnail crop-height-post" style="background-image: url('IMAGE_URL');">
      <img src="IMAGE_URL" class="scale scale-cover transparent" alt="Image Alt">
 </div>`

### Includes
- Sidebar | 600px Ad

    `{% include widget_ad_sidebar.html %}`

- Category

    `{% include widget_category.html %}`

- YouTube

` {% include youtube.html id="3lWjhgJ-aVI" %} `

- Read More

` {% include read_more.html link="https://www.instagram.com" %} `
