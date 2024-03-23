// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Accueil from "./page/user/Accueil.vue";
import Information from "./page/user/Information.vue";

const router = createRouter({
   history: createWebHistory(),
   routes: [
    	{
			path: '/', 
			component: Accueil
	 	},
		{
			path: '/information',
			component: Information
		},
   ]
});

export default router;
