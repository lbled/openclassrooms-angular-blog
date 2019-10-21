export class Post {
  postTitle: string;
  content: string;
  loveIts: number;
  createdAt: Date;
  constructor(postTitle: string, content: string) {
    this.postTitle = postTitle ? postTitle : 'Default title';
    this.content = content ? content : 'Default content';
    this.loveIts = 0;
    this.createdAt = new Date();
  }
}
