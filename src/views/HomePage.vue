<template>
	<ion-page id="main-content">
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-title>
					<div class="flex items-center">
						<span class="material-symbols-outlined ml-3">chef_hat</span>
						<span class="ml-3">Sous</span>
					</div>
				</ion-title>
				<ion-buttons slot="end">
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
			</ion-toolbar>
		</ion-header>

		<ion-content :fullscreen="true" id="content">
			<ion-searchbar class="searchbar"></ion-searchbar>

			<ion-list>
				<div v-for="letter in Alphabet">
					<ion-list-header
						class="ml-2 text-lg font-bold"
					>
						{{ letter }}
				</ion-list-header>

					<ion-item v-for="meal in categorizedMeals?.[letter]">
						{{ meal.strMeal }}
					</ion-item>
				</div>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
	// Globals
	import '@/styles/global.css';
	import { Alphabet } from '@/utils/global';

	// Frameworks
	import { ref } from 'vue';
	import {
		IonContent, IonHeader, IonPage, IonTitle,
		IonToolbar, IonSearchbar, IonList, IonListHeader,
		IonItem, IonButtons, IonMenuButton
	} from '@ionic/vue';

	// Components
	import Menu from '@/components/Menu.vue';

	/*
		Refs
	*/
	const meals = ref();
	const categorizedMeals = ref();
	const filteredMeals = ref();


	/*
		Load Meals
	*/
	const getMeals = async () => {
		const url = 'https://www.themealdb.com/api/json/v1/1/search.php';

		try {
			let results = await Promise.all(
				Alphabet.map(async (letter) => {
					const request = await fetch(`${url}?f=${letter}`);
					const data = await request.json();

					return {
						letter,
						meals: data.meals ?? []
					};
				})
			);

			// Set all meals
			meals.value = results.flatMap((item) => item.meals);

			// Set categorized meals
			categorizedMeals.value = Object.fromEntries(
				results.map(({ letter, meals }) => [letter, meals])
			);

			console.log(meals.value);
			console.log(categorizedMeals.value);
		} catch (e) {
			console.log(e);
		}
	}

	const search = () => {

	}

	getMeals();

</script>

<style scoped>
#container {
	text-align: center;

	position: absolute;
	left: 0;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
}

#container strong {
	font-size: 20px;
	line-height: 26px;
}

#container p {
	font-size: 16px;
	line-height: 22px;

	color: #8c8c8c;

	margin: 0;
}

#container a {
	text-decoration: none;
}

#content {
	--padding-top: 10px;
	--padding-end: 10px;
	--padding-bottom: 10px;
	--padding-start: 10px;
}
.searchbar {
	--background: #f4f1ea;
	--color: #1f2937;
	padding-top: 10px;
	padding-bottom: 20px;
	padding-inline-start: 0;
	padding-inline-end: 0;
}
</style>
