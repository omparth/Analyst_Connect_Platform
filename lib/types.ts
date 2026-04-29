export interface Analyst {
  id: string;
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  image: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  responseTime: string;
  location: string;
  verified: boolean;
  followers: number;
}

export type Specialty = 'Tech' | 'Healthcare' | 'Finance' | 'Energy' | 'Consumer' | 'Industrial';
