import axios from "axios"

interface PaginationUrls {
    last: string;
    next: string;
  }
  
  interface Pagination {
    per_page: number;
    pages: number;
    page: number;
    urls: PaginationUrls;
    items: number;
  }
  
  interface Community {
    want: number;
    have: number;
  }
  
  interface Result {
    style?: string[];
    thumb: string;
    title: string;
    country: string;
    format: string[];
    uri: string;
    community: Community;
    label: string[];
    catno: string;
    year?: string;
    genre: string[];
    resource_url: string;
    type: string;
    id: number;
    barcode?: string[];
  }
  
  interface DiscogsResponse {
    pagination: Pagination;
    results: Result[];
  }
  

export const searchDiscoG = async (query: string): Promise<DiscogsResponse> => {
    const search = await axios.get("https://api.discogs.com/database/search", {params: {q: query, key: "ThMXoDzKhwgqnJLNzvYa", secret: "DspvhxUDIDzzDxAVYhhgYeQPcWKJtMPT"}})
    console.log(search.data.results.slice(0, 10))
    return search.data
}