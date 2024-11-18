import { writable } from 'svelte/store';
import type { Note } from './types';

// Load notes from localStorage or use initial data
const storedNotes = typeof window !== 'undefined' ? localStorage.getItem('notes') : null;
const initialNotes: Note[] = storedNotes ? JSON.parse(storedNotes) : [
  {
    id: "NOTE-20",
    title: "Project ideas",
    preview: "1. Personal portfolio\n2. Note taking app\n3. Task manager",
    date: "2024-03-15",
    category: "Personal",
    priority: "high"
  },
  {
    id: "NOTE-140",
    title: "Meeting notes",
    preview: "Discussed new features and timeline...",
    date: "2024-03-14",
    category: "Work",
    priority: "medium"
  },
  {
    id: "NOTE-90",
    title: "Reading list",
    preview: "Books to read this month...",
    date: "2024-03-13",
    category: "Personal",
    priority: "low"
  }
];

export const notes = writable<Note[]>(initialNotes);

// Subscribe to changes and save to localStorage
notes.subscribe(value => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('notes', JSON.stringify(value));
  }
});

export const categories = [
  { name: 'All Notes', color: 'gray' },
  { name: 'Personal', color: 'blue' },
  { name: 'Work', color: 'violet' },
  { name: 'Projects', color: 'emerald' },
  { name: 'Archive', color: 'amber' }
]; 