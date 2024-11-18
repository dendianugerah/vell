<script lang="ts">
	import '../app.css';
	import { Circle, FolderOpen, Archive } from 'lucide-svelte';
	let { children } = $props();
</script>

<div class="flex h-screen bg-gradient-to-br from-gray-50/50 to-white">
	<nav class="w-64 p-6 bg-white/70 backdrop-blur-sm">
		<div class="flex items-center gap-3 mb-12">
			<div class="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-sm ring-1 ring-black/[0.03]">
				<Circle class="h-4 w-4 text-white" />
			</div>
			<span class="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500">Vell</span>
		</div>
		
		<div class="space-y-8">
			<!-- Main Section -->
			<div>
				<button class="w-full text-left text-sm font-medium text-gray-900 px-3.5 py-2.5 rounded-lg bg-gray-50 hover:bg-gray-100/80 transition-colors">
					All Notes
				</button>
			</div>

			<!-- Categories Section -->
			<div>
				<div class="px-3.5 mb-3">
					<span class="text-xs font-medium text-gray-400 uppercase tracking-wider">Categories</span>
				</div>
				<div class="space-y-0.5">
					<button class="w-full text-left text-sm font-medium text-gray-600 px-3.5 py-2.5 rounded-lg hover:bg-gray-50/80 transition-colors flex items-center gap-2">
						<div class="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
						Personal
					</button>
					<button class="w-full text-left text-sm font-medium text-gray-600 px-3.5 py-2.5 rounded-lg hover:bg-gray-50/80 transition-colors flex items-center gap-2">
						<div class="h-1.5 w-1.5 rounded-full bg-violet-500"></div>
						Work
					</button>
					<button class="w-full text-left text-sm font-medium text-gray-600 px-3.5 py-2.5 rounded-lg hover:bg-gray-50/80 transition-colors flex items-center gap-2">
						<div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
						Projects
					</button>
				</div>
			</div>

			<!-- Archive Section -->
			<div>
				<button class="w-full text-left text-sm font-medium text-gray-500 px-3.5 py-2.5 rounded-lg hover:bg-gray-50/80 transition-colors flex items-center gap-2">
					<Archive class="h-4 w-4" />
					Archive
				</button>
			</div>
		</div>
	</nav>
	
	{@render children()}
</div>
