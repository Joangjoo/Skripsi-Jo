export interface Course {
    id: number;
    title: string;
    description: string;
    category_id: number;
    category_name : string;
    level_id: number;
    level_name : string;
    rating: number;
    thumbnail: string;
    price: number;
    duration: string;
    instructor: string;
    last_updated: string;
    learn: string[] | string;
    module : string[] | string;
    subtitle : string;
    overview : string;
}

export interface CourseState {
  ListCourses: Course[];
  CourseDetail: Course | null;
  learnItems: string[];
  moduleItems: string[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  filterCategoryQuery : string;
  sortQuery: string;
  setSearchQuery: (query: string) => void;
  setFilterCategoryQuery : (query: string) => void;
  setSortQuery: (query: string) => void;
  fetchAllCourses: () => Promise<void>;
  fetchCourseDetail: (id: number) => Promise<void>;
}

export interface Curriculum {
    id: number;
    title: string;
    description: string;
}