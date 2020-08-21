import { ContentfulClientApi, createClient } from 'contentful';
import { Author, HeroImage, BlogPost } from './blog.types';
import moment from 'moment';

export class BlogApi {
  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
  }

  async fetchBlogEntries(): Promise<Array<BlogPost>> {
    return await this.client
      .getEntries({
        content_type: 'blogPost',
      })
      .then((entries) => {
        if (entries && entries.items) {
          const blogPosts = entries.items.map((entry) =>
            this.convertPost(entry)
          );
          return blogPosts;
        }
        return [];
      });
  }

  async fetchBlogById(id): Promise<BlogPost> {
    return await this.client.getEntry(id).then((entry) => {
      if (entry) {
        const post = this.convertPost(entry);
        return post;
      }
      return null;
    });
  }
}
