<script>
  import './App.css';
  import Subcomponent from './Subcomponent.svelte'
</script>

<style>
  .button {
    @apply bg-red-500 text-white inline-block p-2 rounded;
  }
</style>

<div>This is styled using &lt;style&gt; and @apply</div>
<div class="button">Button</div>

<br>
<br>
<br>

<div>This has the same styling as class attributes</div>
<div class="bg-red-500 text-white inline-block p-2 rounded">Button</div>

<br>
<br>
<br>

<Subcomponent/>