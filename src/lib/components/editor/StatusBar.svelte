<script lang="ts">
  import { Eye, Maximize2 } from 'lucide-svelte';

  export let wordCount: number;
  export let charCount: number;
  export let readingTime: number;
  export let onToggleToolbar: () => void;
  export let onToggleFullscreen: () => void;
  export let isFullscreen: boolean;
  export let showToolbar: boolean;
</script>

<div class="fixed bottom-4 right-4 flex items-center gap-3">
  <div class="flex items-center gap-2 text-xs text-gray-500 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
    <span>{wordCount} words</span>
    <div class="w-px h-3 bg-gradient-to-b from-gray-200 to-gray-100"></div>
    <span>{charCount} characters</span>
    <div class="w-px h-3 bg-gradient-to-b from-gray-200 to-gray-100"></div>
    <span>{readingTime} min read</span>
  </div>
  
  <div class="flex items-center gap-1 bg-white/70 backdrop-blur-sm rounded-full shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
    <button 
      class="p-1.5 hover:bg-gray-50/80 rounded-full text-gray-500 hover:text-gray-700 transition-colors"
      on:click={onToggleToolbar}
      title={showToolbar ? 'Hide toolbar' : 'Show toolbar'}
    >
      <Eye class="h-4 w-4" />
    </button>
    <button 
      class="p-1.5 hover:bg-gray-50/80 rounded-full text-gray-500 hover:text-gray-700 transition-colors"
      on:click={onToggleFullscreen}
      title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
    >
      <Maximize2 class="h-4 w-4" />
    </button>
  </div>
</div> 