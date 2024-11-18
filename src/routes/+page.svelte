<script lang="ts">
  import { Search, Plus } from 'lucide-svelte';
  import type { Note } from '$lib/types';
  import { notes } from '$lib/stores';
  import NoteCard from '$lib/components/NoteCard.svelte';
  
  let searchQuery = '';
  
  function addNote() {
    const newNote: Note = {
      id: `NOTE-${Math.floor(Math.random() * 1000)}`,
      title: "Untitled Note",
      preview: "Click to start writing...",
      date: new Date().toISOString().split('T')[0],
      category: "Personal"
    };
    
    notes.update(n => [newNote, ...n]);
  }
</script>

<main class="flex-1 overflow-hidden">
  <header class="px-8 py-6 bg-white/70 backdrop-blur-sm border-b border-gray-100/80">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">Notes</h1>
      <div class="flex items-center gap-3">
        <div class="relative group">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-gray-600 transition-colors" />
          <input
            bind:value={searchQuery}
            class="w-72 pl-9 pr-4 py-2 text-sm rounded-lg bg-gray-50 border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-indigo-500/10 focus:outline-none placeholder:text-gray-400 transition-all"
            placeholder="Search notes..."
          />
        </div>
        <button 
          on:click={addNote}
          class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg hover:opacity-90 active:scale-[0.98] transition-all"
        >
          <Plus class="h-4 w-4" />
          New Note
        </button>
      </div>
    </div>
  </header>
  
  <div class="px-8 py-6">
    <div class="space-y-2">
      {#each $notes as note (note.id)}
        <NoteCard {note} />
      {/each}
    </div>
  </div>
</main>
