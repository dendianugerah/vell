import { writable } from 'svelte/store';

interface EditorState {
  isFullscreen: boolean;
  showToolbar: boolean;
  wordCount: number;
  charCount: number;
  readingTime: number;
  isBold: boolean;
  isItalic: boolean;
  showTextStyles: boolean;
  lastSaved: Date;
  isSaving: boolean;
}

const initialState: EditorState = {
  isFullscreen: false,
  showToolbar: true,
  wordCount: 0,
  charCount: 0,
  readingTime: 0,
  isBold: false,
  isItalic: false,
  showTextStyles: false,
  lastSaved: new Date(),
  isSaving: false
};

export const editorState = writable<EditorState>(initialState); 