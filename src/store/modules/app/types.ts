import { OsEnum } from "@/enum";

export interface AppState {
  theme: string;
  locale: string;
  system: string,
  focus: boolean; // 是否聚焦
}