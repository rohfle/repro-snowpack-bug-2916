<script>
  import './App.css';
  import Subcomponent from './Subcomponent.svelte'
</script>

<style>
  .button {
    @apply bg-red-500 text-white inline-block p-2 rounded;
  }
</style>

<div>Changing the &lt;style&gt; @apply to include a new class will be seen immediately on save</div>
<div class="button">Button</div>

<br>
<br>
<br>

<div>Changing this inline style to include a new class will not be seen until snowpack is restarted</div>
<div class="bg-red-500 text-white inline-block p-2 rounded">Button</div>

<br>
<br>
<br>

<Subcomponent/>