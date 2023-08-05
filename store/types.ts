export interface RootState {}

export interface News {
  title: string;
  link: string;
  keywords: any;
  creator: string[];
  video_url: any;
  description: string;
  content: string;
  pubDate: string;
  image_url: any;
  source_id: string;
  category: string[];
  country: string[];
  language: string;
}

export interface NewsWithId extends News {
  id: string;
}

export interface SearchNewsState {
  searchNews: NewsWithId[];
}
