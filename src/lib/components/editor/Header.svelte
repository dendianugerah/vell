<script lang="ts">
  import { ArrowLeft, Clock, ChevronDown } from 'lucide-svelte';
  import { goto } from '$app/navigation';

  export let noteId: string;
  export let category: string;
  export let isSaving: boolean;
  export let lastSaved: Date;
  export let isFullscreen: boolean;
  export let showToolbar: boolean;

  function formatTime(date: Date) {
    return new Intl.DateTimeFormat('en', {
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  }
</script>

<header 
  class="px-6 py-3 bg-white/70 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-100/80 transition-all duration-200"
  class:opacity-0={isFullscreen && !showToolbar}
  class:hover:opacity-100={isFullscreen}
>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-4">
      <button 
        on:click={() => goto('/')}
        class="p-2 rounded-lg hover:bg-gray-50/80 text-gray-500 transition-colors"
      >
        <ArrowLeft class="h-4 w-4" />
      </button>
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2 px-2 py-1 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-md">
          <span class="text-xs font-medium text-indigo-600">{noteId}</span>
        </div>
        <button class="flex items-center gap-2 px-2.5 py-1.5 hover:bg-gray-50/80 rounded-lg text-sm text-gray-600 transition-colors">
          {category}
          <ChevronDown class="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-lg text-xs text-gray-500">
        <Clock class="h-3.5 w-3.5" />
        {isSaving ? 'Saving...' : `Last saved at ${formatTime(lastSaved)}`}
      </div>
    </div>
  </div>
</header> 