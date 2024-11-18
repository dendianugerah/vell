<script lang="ts">
  export let title: string;
  export let viewMode: boolean;
  export let onInput: () => void;
  export let onKeyDown: (e: KeyboardEvent) => void;
  export let editorRef: HTMLDivElement;
</script>

<div class="max-w-4xl mx-auto px-12 py-10">
  <input
    type="text"
    bind:value={title}
    on:input={onInput}
    class="w-full text-3xl font-semibold text-gray-900 bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-gray-300 -ml-0.5"
    placeholder="Untitled Note"
    disabled={viewMode}
  />
  
  <div 
    bind:this={editorRef}
    contenteditable={!viewMode}
    on:input={onInput}
    on:keydown={onKeyDown}
    class="mt-8 text-[16px] leading-relaxed text-gray-600 focus:outline-none prose prose-slate max-w-none min-h-[calc(100vh-280px)]"
  />
</div>

<style>
  [contenteditable] {
    outline: none;
    caret-color: theme('colors.indigo.500');
  }

  [contenteditable]:empty:before {
    content: "Start writing...";
    color: theme('colors.gray.300');
    pointer-events: none;
  }

  :global(.prose) {
    max-width: none;
    font-family: system-ui, -apple-system, sans-serif;
  }

  :global(.prose p) {
    margin: 1.25em 0;
    line-height: 1.75;
    color: theme('colors.gray.600');
  }

  :global(.prose h1) {
    font-size: 1.875em;
    margin: 2em 0 1em;
    font-weight: 600;
    color: theme('colors.gray.900');
    letter-spacing: -0.025em;
  }

  :global(.prose h2) {
    font-size: 1.5em;
    margin: 1.75em 0 0.75em;
    font-weight: 600;
    color: theme('colors.gray.900');
    letter-spacing: -0.025em;
  }

  :global(.prose h3) {
    font-size: 1.25em;
    margin: 1.5em 0 0.75em;
    font-weight: 600;
    color: theme('colors.gray.900');
    letter-spacing: -0.025em;
  }

  :global(.prose ul), :global(.prose ol) {
    margin: 1.25em 0;
    padding-left: 1.625em;
    color: theme('colors.gray.600');
  }

  :global(.prose li) {
    margin: 0.5em 0;
    padding-left: 0.375em;
  }

  :global(.prose blockquote) {
    margin: 1.5em 0;
    padding: 0.75em 1.5em;
    border-left: 3px solid theme('colors.gray.200');
    background-color: theme('colors.gray.50');
    border-radius: 0 0.5em 0.5em 0;
    color: theme('colors.gray.600');
    font-style: italic;
  }

  :global(.prose pre) {
    margin: 1.5em 0;
    padding: 1.25em 1.5em;
    background-color: theme('colors.gray.50');
    border: 1px solid theme('colors.gray.100');
    border-radius: 0.5em;
    font-family: 'SF Mono', ui-monospace, monospace;
    font-size: 0.875em;
    line-height: 1.7;
    overflow-x: auto;
  }

  :global(.prose code) {
    font-family: 'SF Mono', ui-monospace, monospace;
    font-size: 0.875em;
    padding: 0.2em 0.4em;
    background-color: theme('colors.gray.50');
    border-radius: 0.25em;
    color: theme('colors.gray.700');
  }

  :global(.prose a) {
    color: theme('colors.indigo.600');
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.15s;
  }

  :global(.prose a:hover) {
    border-bottom-color: currentColor;
  }

  :global(.prose img) {
    margin: 1.5em 0;
    border-radius: 0.5em;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  }

  :global(.prose hr) {
    margin: 2em 0;
    border: none;
    border-top: 1px solid theme('colors.gray.200');
  }

  :global(.prose table) {
    margin: 1.5em 0;
    width: 100%;
    border-collapse: collapse;
  }

  :global(.prose th), :global(.prose td) {
    padding: 0.75em;
    border: 1px solid theme('colors.gray.200');
  }

  :global(.prose th) {
    background-color: theme('colors.gray.50');
    font-weight: 500;
  }

  :global(.prose tr:nth-child(even)) {
    background-color: theme('colors.gray.50/50');
  }

  /* Better selection color */
  ::selection {
    background-color: theme('colors.indigo.100');
    color: theme('colors.indigo.900');
  }

  /* Better focus styles */
  :global(.prose *:focus-visible) {
    outline: 2px solid theme('colors.indigo.500');
    outline-offset: 2px;
  }

  /* Task list styles */
  :global(.prose ul[data-type="taskList"]) {
    list-style: none;
    padding-left: 0;
  }

  :global(.prose ul[data-type="taskList"] li) {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  :global(.prose ul[data-type="taskList"] li::before) {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 2px solid theme('colors.gray.300');
    border-radius: 0.25em;
  }

  :global(.prose ul[data-type="taskList"] li[data-checked="true"]::before) {
    background-color: theme('colors.indigo.500');
    border-color: theme('colors.indigo.500');
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
  }
</style> 