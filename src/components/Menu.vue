<template>
	<ion-menu side="end" content-id="main-content">
		<ion-header>
			<ion-toolbar>
				<ion-title class="ion-padding">Menu</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content class="ion-padding">This is the menu content.</ion-content>
	</ion-menu>
</template>

<script setup>
	import '@/styles/global.css';

	import {
		IonMenu, IonHeader, IonToolbar, IonTitle, IonContent
	} from '@ionic/vue';
</script>