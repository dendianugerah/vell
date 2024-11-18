<script lang="ts">
  import { 
    Bold, 
    List, 
    Code,
    Hash,
    ChevronDown,
    Italic,
    ListOrdered,
    Quote,
    ImagePlus,
    Heading1,
    Heading2,
    Text,
    CheckSquare
  } from 'lucide-svelte';

  export let showTextStyles: boolean;
  export let isBold: boolean;
  export let isItalic: boolean;
  export let onCommand: (command: string, value?: string) => void;
  export let onHeading: (level: number) => void;
  export let onToggleTextStyles: () => void;
  export let onInsertImage: () => void;
</script>

<div class="sticky top-[57px] z-10 bg-white/70 backdrop-blur-sm border-b border-gray-100/80">
<div class="px-6 py-2.5">
  <div class="flex items-center gap-6">
    <!-- Text Style Group -->
    <div class="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-lg p-1">
      <div class="relative">
        <button 
          class="px-3 py-1.5 rounded-md hover:bg-white text-sm text-gray-700 font-medium flex items-center gap-2"
          on:click={onToggleTextStyles}
        >
          Text
          <ChevronDown class="h-3.5 w-3.5" />
        </button>
        {#if showTextStyles}
          <div class="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1">
              <button 
                class="w-full px-3 py-2 text-sm text-left hover:bg-gray-50 flex items-center gap-2"
                on:click={() => onHeading(1)}
              >
                <Heading1 class="h-4 w-4" />
                Heading 1
              </button>
              <button 
                class="w-full px-3 py-2 text-sm text-left hover:bg-gray-50 flex items-center gap-2"
                on:click={() => onHeading(2)}
              >
                <Heading2 class="h-4 w-4" />
                Heading 2
              </button>
              <button 
                class="w-full px-3 py-2 text-sm text-left hover:bg-gray-50 flex items-center gap-2"
                on:click={() => onCommand('formatBlock', '<p>')}
              >
                <Text class="h-4 w-4" />
                Normal Text
              </button>
          </div>
        {/if}
      </div>
    </div>

      <!-- Format Group -->
      <div class="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-lg p-1">
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-white text-sm text-gray-700"
          class:bg-white={isBold}
          on:click={() => onCommand('bold')}
        >
          <Bold class="h-4 w-4" />
        </button>
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-white text-sm text-gray-700"
          class:bg-white={isItalic}
          on:click={() => onCommand('italic')}
        >
          <Italic class="h-4 w-4" />
        </button>
      </div>

      <!-- Lists Group -->
      <div class="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-lg p-1">
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-white text-sm text-gray-700"
          on:click={() => onCommand('insertUnorderedList')}
        >
          <List class="h-4 w-4" />
        </button>
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-white text-sm text-gray-700"
          on:click={() => onCommand('insertOrderedList')}
        >
          <ListOrdered class="h-4 w-4" />
        </button>
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-white text-sm text-gray-700"
          on:click={() => onCommand('insertHTML', '- [ ] ')}
        >
          <CheckSquare class="h-4 w-4" />
        </button>
      </div>

      <!-- Insert Group -->
      <div class="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-lg p-1">
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-white text-sm text-gray-700"
          on:click={() => onCommand('formatBlock', '<blockquote>')}
        >
          <Quote class="h-4 w-4" />
        </button>
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-white text-sm text-gray-700"
          on:click={() => onCommand('formatBlock', '<pre>')}
        >
          <Code class="h-4 w-4" />
        </button>
        <button 
          class="px-2.5 py-1.5 rounded-md hover:bg-white text-sm text-gray-700"
          on:click={onInsertImage}
        >
          <ImagePlus class="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
</div> 