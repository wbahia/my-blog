import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'posts.json');

export class JsonPostRepository implements PostRepository {

  private async readFromDisk(): Promise<PostModel[]> {
    const fileContent = await readFile(JSON_POSTS_PATH, 'utf-8');
    const parsedJson = JSON.parse(fileContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const post = posts.find(post => post.id === id);
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  }

  async findAll(): Promise<PostModel[]> {
    return await this.readFromDisk();
  }
}

export const postRepository: PostRepository = new JsonPostRepository();
