<script>
	import "../app.scss"
  	import Nav from "../components/Nav.svelte"
	import PageTransitions from '../components/PageTransition.svelte'
	import { page } from '$app/stores'
</script>

<div class="bg"/>
<Nav key={$page.url.pathname} />

<PageTransitions refresh={$page.url.pathname}>
  	<slot />
</PageTransitions>

