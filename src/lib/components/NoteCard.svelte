<script lang="ts">
  import type { Note } from '$lib/types';
  import { goto } from '$app/navigation';
  
  export let note: Note;
</script>

<button 
  class="w-full text-left group flex items-center justify-between p-4 rounded-lg hover:bg-white cursor-pointer transition-all"
  on:click={() => goto(`/${note.id}`)}
>
  <div class="flex items-center gap-4 min-w-0">
    <div class="flex items-center gap-3">
      <span class="text-xs text-gray-400 font-medium">{note.id}</span>
      <span class="text-xs font-medium px-2 py-1 rounded-md bg-gray-50 text-gray-600">
        {note.category}
      </span>
    </div>
    <div>
      <h3 class="text-sm font-medium text-gray-900">{note.title}</h3>
      <p class="mt-1 text-sm text-gray-500 line-clamp-1">{note.preview}</p>
    </div>
  </div>
  
  <div class="text-xs text-gray-400">
    {note.date}
  </div>
</button>