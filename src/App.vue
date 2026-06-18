<template>
	<ion-app>
		<!-- Menu needs to be included from the top level -->
		<Menu />

		<ion-router-outlet />
	</ion-app>
</template>

<script setup lang="ts">
	import '@/styles/global.css';
	import { IonApp, IonRouterOutlet } from '@ionic/vue';

	import Menu from '@/components/Menu.vue';
</script>
