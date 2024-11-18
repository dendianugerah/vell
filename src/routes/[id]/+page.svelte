<script lang="ts">
  import { page } from '$app/stores';
  import { notes } from '$lib/stores';
  import { editorState } from '$lib/stores/editor';
  import { EditorActions } from '$lib/services/editorActions';
  import Header from '$lib/components/editor/Header.svelte';
  import Toolbar from '$lib/components/editor/Toolbar.svelte';
  import Editor from '$lib/components/editor/Editor.svelte';
  import StatusBar from '$lib/components/editor/StatusBar.svelte';
  
  const noteId = $page.params.id;
  const note = $notes.find(n => n.id === noteId);
  
  let title = note?.title || '';
  let editorRef: HTMLDivElement;
  let viewMode = false;

  function handleInput() {
    EditorActions.saveNote(noteId, title, editorRef.innerHTML);
    EditorActions.calculateStats(editorRef.textContent || '');
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'b' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      EditorActions.execCommand('bold');
    }
    if (e.key === 'i' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      EditorActions.execCommand('italic');
    }
    EditorActions.checkFormatting();
  }

  function handleHeading(level: number) {
    EditorActions.execCommand('formatBlock', `<h${level}>`);
  }

  function insertImage() {
    const url = prompt('Enter image URL:');
    if (url) {
      EditorActions.execCommand('insertImage', url);
    }
  }

  if (typeof window !== 'undefined') {
    document.addEventListener('selectionchange', EditorActions.checkFormatting);
  }
</script>

<div class="flex-1 flex flex-col bg-gradient-to-b from-gray-50 to-white {$editorState.isFullscreen ? 'fullscreen' : ''}">
  <Header 
    {noteId}
    category={note?.category || ''}
    isSaving={$editorState.isSaving}
    lastSaved={$editorState.lastSaved}
    isFullscreen={$editorState.isFullscreen}
    showToolbar={$editorState.showToolbar}
  />

  {#if !viewMode}
    <Toolbar 
      showTextStyles={$editorState.showTextStyles}
      isBold={$editorState.isBold}
      isItalic={$editorState.isItalic}
      onCommand={EditorActions.execCommand}
      onHeading={handleHeading}
      onToggleTextStyles={() => $editorState.showTextStyles = !$editorState.showTextStyles}
      onInsertImage={insertImage}
    />
  {/if}

  <div class="flex-1 overflow-auto">
    <Editor
      bind:editorRef
      {title}
      {viewMode}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
    />
  </div>

  <StatusBar 
    wordCount={$editorState.wordCount}
    charCount={$editorState.charCount}
    readingTime={$editorState.readingTime}
    onToggleToolbar={() => $editorState.showToolbar = !$editorState.showToolbar}
    onToggleFullscreen={() => $editorState.isFullscreen = !$editorState.isFullscreen}
    isFullscreen={$editorState.isFullscreen}
    showToolbar={$editorState.showToolbar}
  />
</div>

<style>
  .fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    background: linear-gradient(to bottom, #fafafa, #ffffff);
  }
</style> 