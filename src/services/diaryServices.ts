import { DiaryEntry } from "../types"
import diaryData from "./diaries.json"
import { NonSensitiveInfoDiaryEntry } from "../types"

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = (): Array<DiaryEntry> => diaries

export const getNonSensitiveEntries = (): NonSensitiveInfoDiaryEntry[] =>
  diaries

export const addEntries = (): undefined => undefined
