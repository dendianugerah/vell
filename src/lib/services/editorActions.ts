import { editorState } from '../stores/editor';
import { notes } from '../stores';
import { get } from 'svelte/store';

export class EditorActions {
  static execCommand(command: string, value = '') {
    document.execCommand(command, false, value);
  }

  static calculateStats(text: string) {
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const charCount = text.length;
    const readingTime = Math.ceil(wordCount / 200);

    editorState.update(state => ({
      ...state,
      wordCount,
      charCount,
      readingTime
    }));
  }

  static saveNote(noteId: string, title: string, content: string) {
    editorState.update(state => ({ ...state, isSaving: true }));

    notes.update(notes => 
      notes.map(n => 
        n.id === noteId 
          ? { ...n, title, preview: content }
          : n
      )
    );

    setTimeout(() => {
      editorState.update(state => ({ 
        ...state, 
        isSaving: false,
        lastSaved: new Date()
      }));
    }, 500);
  }

  static checkFormatting() {
    if (document.queryCommandState) {
      editorState.update(state => ({
        ...state,
        isBold: document.queryCommandState('bold'),
        isItalic: document.queryCommandState('italic')
      }));
    }
  }
} 