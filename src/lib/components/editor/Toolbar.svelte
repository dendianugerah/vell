<script lang="ts">
  import { 
    Bold, 
    List,
    Code,
    Italic,
    ListOrdered,
    Quote,
    Heading1,
    Heading2,
    Text
  } from 'lucide-svelte';

  export let showTextStyles: boolean;
  export let isBold: boolean;
  export let isItalic: boolean;
  export let onCommand: (command: string, value?: string) => void;
  export let onHeading: (level: number) => void;
  export let onToggleTextStyles: () => void;
</script>

<div class="sticky top-[57px] z-10 bg-white/70 backdrop-blur-sm border-b border-gray-100/80">
  <div class="px-6 py-2">
    <div class="flex items-center gap-4">
      <!-- Text Style Group -->
      <div class="flex items-center gap-2">
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-gray-100 text-sm text-gray-700"
          on:click={() => onCommand('formatBlock', '<p>')}
          title="Normal Text"
        >
          <Text class="h-4 w-4" />
        </button>
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-gray-100 text-sm text-gray-700"
          class:bg-gray-100={isBold}
          on:click={() => onCommand('bold')}
          title="Bold"
        >
          <Bold class="h-4 w-4" />
        </button>
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-gray-100 text-sm text-gray-700"
          class:bg-gray-100={isItalic}
          on:click={() => onCommand('italic')}
          title="Italic"
        >
          <Italic class="h-4 w-4" />
        </button>
      </div>

      <div class="h-4 w-px bg-gray-200"></div>

      <!-- Headings -->
      <div class="flex items-center gap-2">
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-gray-100 text-sm text-gray-700"
          on:click={() => onHeading(1)}
          title="Heading 1"
        >
          <Heading1 class="h-4 w-4" />
        </button>
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-gray-100 text-sm text-gray-700"
          on:click={() => onHeading(2)}
          title="Heading 2"
        >
          <Heading2 class="h-4 w-4" />
        </button>
      </div>

      <div class="h-4 w-px bg-gray-200"></div>

      <!-- Lists -->
      <div class="flex items-center gap-2">
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-gray-100 text-sm text-gray-700"
          on:click={() => onCommand('insertUnorderedList')}
        >
          <List class="h-4 w-4" />
        </button>
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-gray-100 text-sm text-gray-700"
          on:click={() => onCommand('insertOrderedList')}
        >
          <ListOrdered class="h-4 w-4" />
        </button>
      </div>

      <div class="h-4 w-px bg-gray-200"></div>

      <!-- Additional Formatting -->
      <div class="flex items-center gap-2">
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-gray-100 text-sm text-gray-700"
          on:click={() => onCommand('formatBlock', '<blockquote>')}
        >
          <Quote class="h-4 w-4" />
        </button>
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-gray-100 text-sm text-gray-700"
          on:click={() => onCommand('formatBlock', '<pre>')}
        >
          <Code class="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
</div> 