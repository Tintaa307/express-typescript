export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy"
export type Visibility = "good" | "average" | "poor" | "very poor" | "ok"

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">
