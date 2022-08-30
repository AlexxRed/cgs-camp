import axios from 'axios';

interface IHttp {
  baseUrl: string;
  url: string;
  apiVersion: string;
}

class HttpService<T> implements IHttp {
  constructor(url: string, baseUrl = 'http://localhost:4200', apiVersion = 'api') {
    this.baseUrl = baseUrl;
    this.apiVersion = apiVersion;
    this.url = url;
  }

  baseUrl: string;

  url: string;

  apiVersion: string;

  getUrl() {
    return `${this.baseUrl}/${this.apiVersion}/${this.url}`;
  }

  getUrlId(id: string): string {
    return `${this.getUrl()}/${id}`;
  }

  public async getAll(): Promise<T[]> {
    const { data } = await axios.get(this.getUrl());
    return data;
  }

  public async getOne(id: string): Promise<T> {
    const { data } = await axios.get(this.getUrlId(id));
    return data;
  }

  public async create(body: T): Promise<T> {
    const { data } = await axios.post(this.getUrl(), body);
    return data;
  }

  public async update(id: string, body: T): Promise<T> {
    const { data } = await axios.put(this.getUrlId(id), body);
    return data;
  }

  public async delete(id: string): Promise<void> {
    await axios.delete(this.getUrlId(id));
  }
}

export default HttpService;
