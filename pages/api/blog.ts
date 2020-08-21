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

  convertImage = (rawImage): HeroImage => {
    if (rawImage) {
      return {
        imageUrl: rawImage.file.url.replace('//', 'https://'),
        description: rawImage.description,
        title: rawImage.title,
      };
    }
    return null;
  };

  convertAuthor = (rawAuthor): Author => {
    if (rawAuthor) {
      return {
        name: rawAuthor.name,
        phone: rawAuthor.phone,
        shortBio: rawAuthor.shortBio,
        title: rawAuthor.title,
        email: rawAuthor.email,
        company: rawAuthor.company,
        twitter: rawAuthor.twitter,
        facebook: rawAuthor.facebook,
        github: rawAuthor.github,
      };
    }
    return null;
  };

  convertPost = (rawData): BlogPost => {
    const rawPost = rawData.fields;
    const rawHeroImage = rawPost.heroImage ? rawPost.heroImage.fields : null;
    const rawAuthor = rawPost.author ? rawPost.author.fields : null;
    return {
      id: rawData.sys.id,
      body: rawData.sys.body,
      description: rawData.description,
      publishedDate: moment(rawPost.publishedDate).format('MMM DD YYYY'),
      slug: rawPost.slug,
      tags: rawPost.tags,
      title: rawPost.title,
      heroImage: this.convertImage(rawHeroImage),
      author: this.convertAuthor(rawAuthor),
    };
  };
}
